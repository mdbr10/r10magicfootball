import React from 'react';
import Text from '@/components/atoms/Text';
import Divider from '@/components/atoms/Divider';
import { Check } from 'lucide-react';

interface TextWithDividerProps {
  text: string;
  showDivider?: boolean;
  color?: string;
  className?: string;
  textClassName?: string;
}

const TextWithDivider: React.FC<TextWithDividerProps> = ({
  text,
  showDivider = true,
  color = 'primary-green',
  className = '',
  textClassName = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className={`flex flex-row items-center gap-2 ${textClassName}`}>
        <Check className="text-primary-green" size={20} />
        <Text color={color}>
          {text}
        </Text>
      </div>
      {showDivider && <Divider className="mt-1" />}
    </div>
  );
};

export default TextWithDivider; 