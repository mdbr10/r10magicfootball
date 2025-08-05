"use client";
import Person from "@/assets/svg/person";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { VagaLimitada } from "@/components/atoms/VagaLimitada";
import StepCard from "@/components/molecules/StepCard";
import Categories from "@/components/organisms/Categories";
import { useTranslation } from "react-i18next";

function HourToShowYourTalent() {
  const { t } = useTranslation();
  const stepsData = t("selection.hourToShowYourTalent.steps", {
    returnObjects: true,
  }) as Array<{ title: string; text: string }>;

  const stepsImages = [
    [
      <>
        <Person fill="#00FF63" />
        <Person fill="#00FF63" />
        <Person fill="#00FF63" />
        <Person fill="#00FF63" />
        <Person fill="#00FF63" />
      </>,
    ],
    [
      <>
        <Person fill="#00FF63" />
        <Person fill="#4E4E4E" />
        <Person fill="#00FF63" />
        <Person fill="#4E4E4E" />
        <Person fill="#00FF63" />
      </>,
    ],
    [
      <>
        <Person fill="#4E4E4E" />
        <Person fill="#4E4E4E" />
        <Person fill="#00FF63" />
        <Person fill="#4E4E4E" />
        <Person fill="#4E4E4E" />
      </>,
    ],
  ];

  const steps = stepsData.map((step, index) => ({
    title: step.title,
    text: step.text,
    image: stepsImages[index],
  }));

  return (
    <>
      <div className="bg-black block lg:hidden">
        <Container>
          <div className="py-12 flex flex-col gap-6 px-4 max-w-lg mx-auto md:max-w-screen-md">
            <Title
              size="text-5xl"
              color="text-primary-green"
              customClassName="text-center mx-auto max-w-xs font-extrabold"
            >
              {t("selection.hourToShowYourTalent.title")}
            </Title>
            <Text color="white" customClassName="text-center">
              {t("selection.hourToShowYourTalent.subtitle")}
            </Text>
            <div className="flex flex-col gap-4 items-center ">
              {steps.map((step, index) => (
                <StepCard
                  key={index}
                  title={step.title}
                  text={step.text}
                  image={step.image}
                />
              ))}
            </div>
            <Categories />
            <div className="flex flex-row justify-center ">
              <a href="#oferta" className="w-full">
                <Button
                  variant={"primary"}
                  customClassName="w-full max-w-2xl flex justify-center items-center text-center py-4 px-2"
                >
                  <Text
                    size="text-sm"
                    customClassName="text-center overflow-hidden sm:text-xl"
                    weight={"bold"}
                  >
                    {t("selection.hourToShowYourTalent.cta")}
                  </Text>
                </Button>
              </a>
            </div>

            <div className="mx-auto">
              <VagaLimitada />
            </div>
          </div>
        </Container>
      </div>
      <div className="hidden lg:block bg-light-gray">
        <Container>
          <div className="xl:px-20 lg:px-8 py-16">
            <div className="w-full flex flex-row justify-between items-center mb-11 gap-2">
              <div className="max-w-lg">
                <Title
                  size={"text-7xl"}
                  color={"black"}
                  customClassName="font-extrabold"
                >
                  {t("selection.hourToShowYourTalent.title")}
                </Title>
              </div>
              <div className="max-w-lg">
                <p
                  className="text-2xl font-body"
                  color="dark-gray"
                  style={{ textAlign: "justify" }}
                >
                  {t("selection.hourToShowYourTalent.desktopSubtitle")}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between mb-2 gap-2">
              {steps.map((step, index) => (
                <StepCard
                  key={index}
                  title={step.title}
                  text={step.text}
                  image={step.image}
                />
              ))}
            </div>
            <Categories />
            <div className="flex flex-row justify-center pt-6">
              <a
                href="#oferta"
                className="w-full flex justify-center items-center"
              >
                <Button
                  variant={"primary"}
                  width="w-9/12"
                  customClassName="xs:w-11/12 flex justify-center items-center text-center py-4 px-4"
                >
                  <Text
                    size="text-xl"
                    weight={"bold"}
                    customClassName="text-center overflow-hidden"
                  >
                    {t("selection.hourToShowYourTalent.cta")}
                  </Text>
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HourToShowYourTalent;
