import { ICard2Props } from "./types";
import Text from "@/components/atoms/Text";
import Divider from "@/assets/svg/divider";

function Card2({ image, text }: ICard2Props) {
  return (
    <div className="w-full lg:w-48 md:min-h-72 bg-black rounded-xl flex flex-col p-6 relative border-2 border-primary-green">
      <div className="md:min-h-28 flex items-start justify-center pt-4">
        {image}
      </div>
      <div className="flex flex-col justify-between items-center">
        <div className="flex-1 flex items-center my-2">
          <Divider />
        </div>
        <div className="mb-2">
          <Text color="white" size="text">
            {text}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Card2; 