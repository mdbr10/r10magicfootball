"use client";
import Ronaldinho from "@/assets/ronaldinho.png";
import RetornoDaMagia from "@/assets/retornodamagia.png";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function BecomeYourDreamsIntoReality() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-black w-full">
        <Container>
          <section className="w-full h-[calc(100vh-180px)] md:h-[calc(100vh-100px)] lg:h-screen lg:max-h-[900px] flex relative px-2 md:px-10 xl:px-5 flex-row-reverse">
            <div className="bg-white md:bg-black via-black/20 from-black to-white md:bg-gradient-to-r md:via-white/75 w-fit h-full absolute md:relative right-0 lg:w-[2000px]">
              <Image
                src={Ronaldinho}
                placeholder="blur"
                alt={"Ronaldinho Gaúcho"}
                className="object-cover h-[calc(100vh-300px)] md:h-[calc(100vh-100px)] lg:h-screen lg:max-h-[900px]  end-0 relative mix-blend-multiply"
              />
              <div className="md:hidden">
                <div className="absolute bottom-0 left-0 w-full h-[120px] bg-black"></div>
                <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-black via-black/90 to-transparent"></div>
              </div>
            </div>
            <div className="flex flex-col justify-end pb-10 md:justify-center w-full z-10">
              <div className="max-w-md mx-auto md:mx-0 flex flex-col gap-2 text-center md:text-left lg:-mr-64 lg:pt-28">
                <div className="flex justify-center md:justify-start">
                  <Image
                    alt="O retorno da magia"
                    src={RetornoDaMagia}
                    width={200}
                    height={30}
                    className="max-w-[160px] md:max-w-full"
                  />
                </div>
                <Title
                  color="text-primary-green"
                  size="text-5xl"
                  customClassName="md:text-6xl lg:text-8xl font-extrabold"
                >
                  {t("selection.becomeYourDreams.title")}
                </Title>
                <Text
                  size="text-md"
                  color="white"
                  customClassName="md:text-xl lg:text-2xl md:mb-8"
                >
                  {t("selection.becomeYourDreams.subtitle")}
                </Text>
                <a href="#oferta" className="w-full flex justify-center">
                  <Button
                    variant={"primary"}
                    customClassName="px-2 mt-4 md:mt-0 w-full"
                  >
                    <Text size="text-base" weight={"bold"} customClassName="sm:text-xl">
                      {t("selection.becomeYourDreams.cta")}
                    </Text>
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
