"use client";
import ronaldinho3 from "@/assets/ronaldinho3.png";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { SecondaryDisclosure } from "@/components/molecules/Disclosure";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function WhyWeAreDifferent() {
  const { t } = useTranslation();
  const disclosureContent = t("selection.whyWeAreDifferent.disclosures", {
    returnObjects: true,
  }) as Array<{ title: string; answer: string }>;

  return (
    <>
      <div className="relative h-full bg-black overflow-hidden">
        <Image
          src={ronaldinho3}
          alt={"ronaldinho-gaúcho-bola-de-ouro"}
          className="object-cover grayscale w-screen h-96 lg:h-screen absolute"
        />
        <div
          className="absolute w-full h-96 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 70%, rgba(0,0,0,1) 100%)",
          }}
        ></div>
        <div className="relative w-full bg-black/80 pt-20">
          <Container>
            <div className="flex lg:flex-row justify-between md:flex-col md:px-12 flex-col px-5 lg:gap-12">
              <div className="flex flex-col justify-start lg:max-w-md relative z-10 w-full">
                <div className="flex flex-col py-6 gap-5 w-full">
                  <Title
                    size="text-6xl"
                    color="text-primary-green"
                    customClassName="lg:text-left xs:text-center lg:text-8xl font-extrabold"
                  >
                    {t("selection.whyWeAreDifferent.title")}
                  </Title>
                  <Text
                    size="text-xl"
                    color="light-gray"
                    customClassName="lg:text-left xs:text-center lg:text-2xl"
                  >
                    {t("selection.whyWeAreDifferent.subtitle")}
                  </Text>
                  <div className="hidden lg:block">
                    <a href="#oferta" className="flex">
                      <Button
                        variant="primary"
                        width="auto"
                        customClassName="px-4 ml-0"
                      >
                        <Text size="text-sm" weight={"bold"} customClassName="sm:text-xl">
                          {t("selection.whyWeAreDifferent.cta")}
                        </Text>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:max-w-screen-sm md:max-w-full w-full gap-6 my-6">
                {disclosureContent.map((_content, index) => (
                  <SecondaryDisclosure
                    key={index}
                    title={_content.title}
                    defaultOpen={index === 0}
                  >
                    <Text size="text-base" customClassName="text-gray-400">
                      {_content.answer}
                    </Text>
                  </SecondaryDisclosure>
                ))}

                <div className="block lg:hidden">
                  <a href="#oferta" className="flex justify-center">
                    <Button
                      variant="primary"
                      width="auto"
                      customClassName="px-4 my-6"
                    >
                      <Text size="text-sm" weight="bold" customClassName="sm:text-xl">
                        {t("selection.whyWeAreDifferent.cta")}
                      </Text>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default WhyWeAreDifferent;
