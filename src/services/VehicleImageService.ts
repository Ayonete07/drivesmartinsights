
interface ApiResponse {
  collections: any[];
  total: number;
  total_pages: number;
}

class VehicleImageService {
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private accessKey = 'YOUR_ACCESS_KEY'; // For production, this should be stored securely

  async getVehicleImage(query: string): Promise<string> {
    try {
      // This is a fallback for development purposes
      const fallbackImages: Record<string, string> = {
        'sedan': 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlZGFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        'suv': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3V2fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        'truck': 'https://images.unsplash.com/photo-1595595512954-c6d34f0699d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        'van': 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'hybrid': 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHlicmlkJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        'electric': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cmljJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        'default': 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
      };
      
      // Check if we're using a fallback
      if (!this.accessKey || this.accessKey === 'YOUR_ACCESS_KEY') {
        console.log('Using fallback images since no API key is provided');
        
        // Find the best matching image based on the query
        const lowerQuery = query.toLowerCase();
        for (const [key, url] of Object.entries(fallbackImages)) {
          if (lowerQuery.includes(key)) {
            return url;
          }
        }
        
        // Return default if no match found
        return fallbackImages.default;
      }
      
      // Make actual API call if we have a key
      const response = await fetch(`${this.apiUrl}?query=${encodeURIComponent(query)}&per_page=1`, {
        headers: {
          'Authorization': `Client-ID ${this.accessKey}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error fetching image: ${response.statusText}`);
      }
      
      const data: ApiResponse = await response.json();
      
      if (data.total > 0 && data.collections.length > 0) {
        return data.collections[0].urls.regular;
      } else {
        // Return a fallback image if no results
        return fallbackImages.default;
      }
    } catch (error) {
      console.error('Error fetching vehicle image:', error);
      return 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
    }
  }
}

export const vehicleImageService = new VehicleImageService();
