
interface CarQueryResponse {
  Makes?: Array<{
    make_id: string;
    make_display: string;
    make_country: string;
  }>;
  Models?: Array<{
    model_name: string;
    model_make_id: string;
  }>;
  Trims?: Array<{
    model_id: string;
    model_make_id: string;
    model_name: string;
    model_trim: string;
    model_year: string;
    model_body: string;
    model_engine_position: string;
    model_engine_cc: string;
    model_engine_cyl: string;
    model_engine_type: string;
    model_engine_valves_per_cyl: string;
    model_engine_power_ps: string;
    model_engine_power_rpm: string;
    model_engine_torque_nm: string;
    model_engine_torque_rpm: string;
    model_engine_bore_mm: string;
    model_engine_stroke_mm: string;
    model_engine_compression: string;
    model_engine_fuel: string;
    model_top_speed_kph: string;
    model_0_to_100_kph: string;
    model_drive: string;
    model_transmission_type: string;
    model_seats: string;
    model_doors: string;
    model_weight_kg: string;
    model_length_mm: string;
    model_width_mm: string;
    model_height_mm: string;
    model_wheelbase_mm: string;
    model_lkm_hwy: string;
    model_lkm_mixed: string;
    model_lkm_city: string;
    model_fuel_cap_l: string;
    model_sold_in_us: string;
    model_co2: string;
    model_make_display: string;
  }>;
  Years?: Array<{
    year: string;
  }>;
}

class CarQueryService {
  private apiUrl = 'https://www.carqueryapi.com/api/0.3/';
  
  async getMakes(): Promise<CarQueryResponse> {
    try {
      const response = await fetch(`${this.apiUrl}?callback=?&cmd=getMakes`);
      // The API sometimes returns JSONP, we need to clean it
      const text = await response.text();
      const jsonText = text.replace(/\?\((.*)\)/, '$1');
      return JSON.parse(jsonText);
    } catch (error) {
      console.error('Error fetching makes:', error);
      return {};
    }
  }
  
  async getModels(make: string, year?: string): Promise<CarQueryResponse> {
    try {
      let url = `${this.apiUrl}?callback=?&cmd=getModels&make=${make}`;
      if (year) {
        url += `&year=${year}`;
      }
      
      const response = await fetch(url);
      const text = await response.text();
      const jsonText = text.replace(/\?\((.*)\)/, '$1');
      return JSON.parse(jsonText);
    } catch (error) {
      console.error('Error fetching models:', error);
      return {};
    }
  }
  
  async getTrims(make: string, model: string, year?: string): Promise<CarQueryResponse> {
    try {
      let url = `${this.apiUrl}?callback=?&cmd=getTrims&make=${make}&model=${model}`;
      if (year) {
        url += `&year=${year}`;
      }
      
      const response = await fetch(url);
      const text = await response.text();
      const jsonText = text.replace(/\?\((.*)\)/, '$1');
      return JSON.parse(jsonText);
    } catch (error) {
      console.error('Error fetching trims:', error);
      return {};
    }
  }
  
  async getYears(): Promise<CarQueryResponse> {
    try {
      const response = await fetch(`${this.apiUrl}?callback=?&cmd=getYears`);
      const text = await response.text();
      const jsonText = text.replace(/\?\((.*)\)/, '$1');
      return JSON.parse(jsonText);
    } catch (error) {
      console.error('Error fetching years:', error);
      return {};
    }
  }
  
  async getVehiclesByCategory(category: string): Promise<Array<any>> {
    try {
      // Map category to appropriate API parameters
      let make = '';
      let body = '';
      
      switch (category) {
        case 'cars':
          body = 'Sedan,Coupe,Convertible';
          break;
        case 'suvs':
          body = 'SUV,Crossover';
          break;
        case 'trucks':
          body = 'Pickup';
          break;
        case 'vans':
          body = 'Van,Minivan';
          break;
        case 'hybrids':
          // For hybrids, we'll need to filter after getting results
          body = 'Sedan,SUV';
          // Ideally, we would use model_engine_type, but will filter later
          break;
        case 'electric':
          // For electric, we'll need to filter after getting results
          body = 'Sedan,SUV';
          // Ideally, we would use model_engine_fuel = 'Electric', but will filter later
          break;
        default:
          // Default to sedans
          body = 'Sedan';
      }
      
      // Get the latest year to simplify the query
      const yearsResponse = await this.getYears();
      const latestYear = yearsResponse.Years ? yearsResponse.Years[0].year : '2023';
      
      // For simplicity, we'll fetch some popular makes and then filter by body type
      const popularMakes = ['audi', 'bmw', 'ford', 'honda', 'toyota', 'tesla'];
      let allTrims: any[] = [];
      
      // For each make, get models and trims
      for (const make of popularMakes) {
        const trimResponse = await this.getTrims(make, '', latestYear);
        if (trimResponse.Trims) {
          // Filter by body type if applicable
          const filteredTrims = trimResponse.Trims.filter(trim => {
            if (category === 'hybrids') {
              return trim.model_engine_type?.toLowerCase().includes('hybrid');
            } else if (category === 'electric') {
              return trim.model_engine_fuel?.toLowerCase().includes('electric');
            } else if (body) {
              return body.split(',').some(b => 
                trim.model_body?.toLowerCase().includes(b.toLowerCase())
              );
            }
            return true;
          });
          
          allTrims = [...allTrims, ...filteredTrims];
        }
      }
      
      // Limit to prevent too many items
      return allTrims.slice(0, 10);
    } catch (error) {
      console.error(`Error fetching vehicles for category ${category}:`, error);
      return [];
    }
  }
}

export const carQueryService = new CarQueryService();
