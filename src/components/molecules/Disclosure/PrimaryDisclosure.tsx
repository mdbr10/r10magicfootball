import Text from "@/components/atoms/Text";
import { useState } from "react";

interface IPrimaryDisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  titleColor?: string;
  borderColor?: string;
}

function PrimaryDisclosure({
  title,
  children,
  defaultOpen = false,
  titleColor = "dark-gray",
  borderColor = "border-dark-gray/74"
}: IPrimaryDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-transparent border border-sm ${borderColor} rounded-lg p-4`}>
      <button
        className="flex justify-between items-center w-full text-left text-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <Text color={titleColor} customClassName="font-semibold text-xl">{title}</Text>
        </div>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14L0.20577 0.5L15.7942 0.500002L8 14Z"
              className={`fill-current ${isOpen ? "text-light-gray" : "text-mid-gray"
                }`}
            />
          </svg>
        </span>
      </button>
      <div
        className={`transition-[max-height,opacity] duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="mt-2 text-dark-gray font-normal">{children}</div>
      </div>
    </div>
  );
}

export default PrimaryDisclosure; 