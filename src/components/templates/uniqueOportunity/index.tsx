"use client";
import uniqueOportunity1 from "@/assets/uniqueOportunity1.jpeg";
import uniqueOportunity2 from "@/assets/uniqueOportunity2.jpeg";
import uniqueOportunity3 from "@/assets/uniqueOportunity3.jpeg";
import uniqueOportunity4 from "@/assets/uniqueOportunity4.jpeg";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Card from "@/components/molecules/Card";
import CardSliderContainer from "@/components/organisms/CardSlider";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

function UniqueOportunity() {
  const { t } = useTranslation();
  const cards = t("selection.uniqueOportunity.cards", {
    returnObjects: true,
  }) as Array<{ title: string; text: string }>;

  return (
    <>
      <section className="flex flex-col py-8 md:py-16 w-full xl:px-5">
        <Container className="flex flex-col lg:gap-8 pl-5">
          <div className="w-full flex justify-between lg:flex-row flex-col mb-4 lg:gap-6 pr-5 xl:pr-0">
            <Title
              color="black"
              size="text-5xl"
              customClassName="lg:text-left xs:text-center md:text-6xl font-extrabold"
            >
              {t("selection.uniqueOportunity.title")}
            </Title>
            <div className="xs:w-full content-center max-w-sm mx-auto lg:mx-0">
              <Text
                size="text-2xl"
                color="dark-gray"
                customClassName="lg:text-2xl lg:text-left xs:text-center xs:text-xl content-center lg:text-right"
              >
                {t("selection.uniqueOportunity.subtitle")}
              </Text>
            </div>
          </div>
          <CardSliderContainer disableLargeScreen={true}>
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="w-auto max-w-72">
                <Card
                  title={card.title}
                  text={card.text}
                  image={
                    [
                      uniqueOportunity1,
                      uniqueOportunity2,
                      uniqueOportunity3,
                      uniqueOportunity4,
                    ][index]
                  }
                />
              </SwiperSlide>
            ))}
          </CardSliderContainer>
          <div className="w-full flex align-center justify-center mt-8 pr-6 xl:pr-0">
            <a href="#oferta">
              <Button
                variant={"primary"}
                width="w-full"
                customClassName="max-w-full md:max-w-lg lg:w-full mt-4 md:mt-0 px-4"
              >
                <Text size="text-sm" weight={"bold"} customClassName="sm:text-xl">
                  {t("selection.uniqueOportunity.cta")}
                </Text>
              </Button>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

export default UniqueOportunity;
