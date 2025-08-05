import Image from "next/image";
import { ICard3Props } from "./types";
import Text from "@/components/atoms/Text";
import { useTranslation } from "react-i18next";
function Card3({ image, title, onClick }: ICard3Props) {
  const { t } = useTranslation();
  return (
    <div
      className="relative w-full h-[400px] rounded-2xl overflow-hidden group cursor-pointer hover:bg-white transition-all duration-300"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
        <Text color="white" size="text-2xl" customClassName="text-center">
          {title}
        </Text>
        <div className="bg-transparent border border-white rounded-full px-4 py-2 text-center group-hover:bg-white">
          <Text
            color="white"
            size="text-2xl"
            customClassName="group-hover:text-black transition-colors duration-300"
          >
            {t("course.hero.trailer")}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Card3;
