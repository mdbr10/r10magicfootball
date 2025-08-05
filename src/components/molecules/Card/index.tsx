import { ICardProps } from "./types";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";

function Card({
  text,
  title,
  image,
}: ICardProps) {
  return (
    <div
      className={`w-72 min-h-72 lg:min-h-96 bg-cover bg-center rounded-xl relative`}
      style={{ backgroundImage: `url(${image?.src})` }}
    >
      <div className="w-72 min-h-72 lg:min-h-96 bg-gradient-to-t from-black/100 to-transparent via-black/50 rounded-xl absolute top-0 left-0" />
      <div className="px-4 absolute z-10 bottom-4">
        <Title
          color="text-primary-green"
          size="text-5xl"
          customClassName=""
        >
          {title!}
        </Title>
        <Text color="white max-w-60 min-h-[84px]">{text}</Text>
      </div>
    </div>
  );
}
export default Card;
