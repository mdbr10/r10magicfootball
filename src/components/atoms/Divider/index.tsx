import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full h-[1px] ${className}`}
      style={{
        border: '1px solid',
        borderImageSource: 'linear-gradient(90deg, #5810BF 0%, #00FF63 52.5%, #5810BF 100%)',
        borderImageSlice: '1'
      }}
    />
  );
};

export default Divider; 