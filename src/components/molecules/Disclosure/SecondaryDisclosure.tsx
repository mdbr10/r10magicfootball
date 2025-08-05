import Text from "@/components/atoms/Text";
import { useState } from "react";

interface ISecondaryDisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function SecondaryDisclosure({
  title,
  children,
  defaultOpen = false
}: ISecondaryDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-black/85 border border-sm border-primary-green rounded-lg text-primary-green p-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <svg
            width="81"
            height="79"
            viewBox="0 0 81 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-14 max-h-14 mr-8"
          >
            <path
              d="M40.5 19L45.5516 34.5471H61.8988L48.6736 44.1558L53.7252 59.7029L40.5 50.0942L27.2748 59.7029L32.3264 44.1558L19.1012 34.5471H35.4484L40.5 19Z"
              fill="#00FF63"
            />
            <g filter="url(#filter0_f_238_284)">
              <path
                d="M40.5 19L45.5516 34.5471H61.8988L48.6736 44.1558L53.7252 59.7029L40.5 50.0942L27.2748 59.7029L32.3264 44.1558L19.1012 34.5471H35.4484L40.5 19Z"
                fill="#00FF63"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_238_284"
                x="0.101196"
                y="0"
                width="80.7976"
                height="78.7029"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="9.5"
                  result="effect1_foregroundBlur_238_284"
                />
              </filter>
            </defs>
          </svg>
          <Text color="primary-green">{title.toUpperCase()}</Text>
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
              className="fill-current text-mid-gray"
            />
          </svg>
        </span>
      </button>
      <div
        className={`transition-[max-height,opacity] duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {isOpen && (
          <div className="w-[95%] mx-auto mb-4 h-[1px] bg-primary-green" />
        )}
        <div className="mt-2 text-primary-green">{children}</div>
      </div>
    </div>
  );
}

export default SecondaryDisclosure; 