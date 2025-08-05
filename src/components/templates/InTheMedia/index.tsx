import media1 from "@/assets/media1.jpeg";
import media2 from "@/assets/media2.png";
import media3 from "@/assets/media3.jpeg";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import Container from "@/components/atoms/Container";
import { useTranslation } from "react-i18next";

const images = [media1, media2, media3];

function InTheMedia() {
  const { t } = useTranslation();
  const mediaItems = t("common.inTheMedia.items", {
    returnObjects: true,
  }) as Array<{
    subTitle: string;
    text: string;
  }>;

  return (
    <section className="flex-col xl:px-32 px-5 lg:px-10 py-16 md:flex xs:hidden">
      <Container>
        <div className="flex flex-row justify-between">
          <Title size="text-6xl" customClassName="font-extrabold">
            {t("common.inTheMedia.title")}
          </Title>
        </div>
        <div className="flex flex-row justify-between mt-8 gap-6">
          {mediaItems.map((item, index) => (
            <div key={index} className="flex flex-col max-w-[384px]">
              <div className="relative w-full h-[216px] rounded-lg overflow-hidden">
                <Image
                  src={images[index]}
                  alt={item.text}
                  fill
                  className="object-cover"
                />
              </div>
              <Text customClassName="text-gray-500 mt-4 text-sm uppercase tracking-wider">
                {item.subTitle}
              </Text>
              <Text customClassName="text-xl font-bold mt-2 leading-tight">
                {item.text}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default InTheMedia;
