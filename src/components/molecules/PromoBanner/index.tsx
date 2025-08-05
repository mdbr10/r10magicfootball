import Text from "@/components/atoms/Text";
import { PromoBannerProps } from "./types";

function PromoBanner({ text, customClassName }: PromoBannerProps) {
  return (
    <div className={`bg-[#5810BF] ${customClassName}`}>
      <Text size="text-base" customClassName={`text-white max-w-[500px] text-center py-4 mx-auto px-2`}  >
        {text}
      </Text>
    </div>
  )
}

export default PromoBanner;
