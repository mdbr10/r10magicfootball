"use client";
import Certificate from "@/assets/svg/certificate";
import Shirt from "@/assets/svg/shirt";
import VideoPlayer from "@/assets/svg/videoplayer";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Card2 from "@/components/molecules/Card2";
import GreenBackground from "@/assets/green-background.png";
import { useTranslation } from "react-i18next";

function GrantYourVacancy() {
  const { t } = useTranslation();
  const benefitsData = t("selection.grantYourVacancy.benefits", {
    returnObjects: true,
  }) as Array<{ text: string }>;

  const benefitIcons = [
    <VideoPlayer key={0} />,
    <Shirt key={1} />,
    <Certificate key={2} />,
  ];

  const benefits = benefitsData.map((benefit, index) => ({
    text: benefit.text,
    image: benefitIcons[index],
  }));

  return (
    <>
      <section className="w-full lg:py-14 lg:bg-black flex flex-col items-center justify-center md:bg-transparent md:py-0 bg-transparent py-0">
        <Container>
          <div className="flex lg:flex-row justify-between xl:px-8 py-12 lg:px-4 md:w-full md:flex-col w-full flex-col px-4 bg-cover bg-center gap-3 lg:bg-primary-green relative md:max-w-screen-lg lg:mx-auto xl:max-w-full">
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                backgroundImage: `url(${GreenBackground.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
            />
            <div className="xl:w-5/12 flex flex-col gap-2 lg:gap-7 lg:w-5/12 md:w-full w-full">
              <Title
                size={"text-5xl"}
                color={"black"}
                customClassName="lg:text-left text-center max-w-lg mx-auto font-extrabold lg:text-6xl"
              >
                {t("selection.grantYourVacancy.title")}
              </Title>

              <div className="bg-gradient-to-r from-black to-black/60 md:rounded-lg md:px-6 md:my-4 rounded-lg px-6 my-4">
                <Text
                  size={"text-lg"}
                  color={"white"}
                  customClassName="lg:text-lg md:text-2xl text-xl max-w-sm lg:mx-0 text-center lg:text-left mx-auto py-4"
                >
                  {t("selection.grantYourVacancy.subtitle")}
                </Text>
              </div>

              <div className="hidden lg:block">
                <a href="#oferta">
                  <Button variant="quarternary" width="w-full px-2">
                    <Text size="text-xl" weight="bold">
                      {t("selection.grantYourVacancy.cta")}
                    </Text>
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row h-fit my-auto xl:gap-4 lg:gap-1 md:gap-0 md:justify-between justify-evenly gap-2">
              {benefits.map((benefit, index) => (
                <Card2 key={index} text={benefit.text} image={benefit.image} />
              ))}
            </div>
            <div className="block lg:hidden">
              <a href="#oferta">
                <Button
                  variant="quarternary"
                  width="w-full"
                  customClassName="md:mt-6 mt-6 px-4"
                >
                  <Text size="text-sm" weight="bold" color="text-purple-300" customClassName="sm:text-xl">
                    {t("selection.grantYourVacancy.cta")}
                  </Text>
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default GrantYourVacancy;
