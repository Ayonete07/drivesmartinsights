
import React from 'react';
import { Car } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'small' | 'large';
}

const Logo = ({ variant = 'default' }: LogoProps) => {
  const sizes = {
    small: {
      iconSize: 16,
      textSize: 'text-lg',
      spacing: 'gap-1',
    },
    default: {
      iconSize: 24,
      textSize: 'text-2xl',
      spacing: 'gap-2',
    },
    large: {
      iconSize: 32,
      textSize: 'text-4xl',
      spacing: 'gap-3',
    },
  };

  const { iconSize, textSize, spacing } = sizes[variant];

  return (
    <div className={`flex items-center ${spacing}`}>
      <div className="relative">
        <Car className="text-dsblue-500" size={iconSize} />
        <div className="absolute inset-0 bg-dsblue-500 opacity-30 rounded-full scale-150 -z-10" />
      </div>
      <div className={`font-bold ${textSize} tracking-tight`}>
        <span className="text-dsblue-500">Drive</span>
        <span className="text-dssilver-800">Smart</span>
        <span className="text-dsblue-700">Insights</span>
      </div>
    </div>
  );
};

export default Logo;
