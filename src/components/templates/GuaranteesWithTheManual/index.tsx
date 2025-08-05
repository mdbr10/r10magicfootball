import ronaldinho2 from "@/assets/ronaldinho2.png";
import twohundredoff from "@/assets/200off.png";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Divider from "@/components/atoms/Divider";
import TextWithDivider from "@/components/molecules/TextWithDivider";
import Image from "next/image";
import GreenBackground from "@/assets/green-background.png";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import { useTranslation } from "react-i18next";

interface GuaranteesWithTheManualProps {
  openModal: () => void;
  installments?: string;
  installmentValue?: string;
  totalValue?: string;
}

function GuaranteesWithTheManual({
  openModal,
  installments = "12",
  installmentValue = "29,64",
  totalValue = "297,00",
}: GuaranteesWithTheManualProps) {
  const { t } = useTranslation();
  const benefits = t("selection.guaranteesWithTheManual.benefits", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <section id="oferta" className="relative h-full py-8 bg-[#E6E6E6]">
        <Container>
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              backgroundImage: `url(${GreenBackground.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
          <div className="mx-auto px-4">
            <div className="flex md:flex-row justify-center items-stretch relative z-20 mx-auto xs:flex-col">
              <div className="bg-[#5810BF] border border-primary-green rounded-lg px-5 py-10 w-full md:max-w-[400px] lg:max-w-[600px] lg:-mr-6 z-10">
                <div className="mx-auto px-8">
                  <Title
                    size="text-5xl"
                    color="text-white mx-auto w-fit text-center max-w-64 lg:max-w-full font-extrabold"
                  >
                    {t("selection.guaranteesWithTheManual.title")}
                  </Title>
                  <Divider className="mt-4" />
                  <div className="w-full flex flex-col">
                    {benefits.map((benefit, index) => (
                      <TextWithDivider
                        key={index}
                        text={benefit}
                        textClassName="max-w-64 m-auto"
                        className="pl-6 pt-1"
                      />
                    ))}
                  </div>
                </div>
                <div className="mx-auto w-full max-w-[500px] mt-8 bg-[#3D0390] rounded-lg p-4 flex flex-col lg:flex-row-reverse justify-around items-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="max-w-[100px] lg:max-w-[140px]">
                      <Image src={twohundredoff} alt="twohundredoff" />
                    </div>
                  </div>
                  <div className="hidden lg:block border-l border-gray-500 h-[120px]" /><div>
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="text-[#FF4141] line-through text-lg">
                        {t("selection.guaranteesWithTheManual.fromText")} <span className="font-bold">R$ 497,00</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-end xs:w-full justify-center gap-2">
                      <Title
                        color="text-purple-300"
                        size="text-3xl"
                        customClassName="pb-3 uppercase"
                      >
                        {`${t(
                          "selection.guaranteesWithTheManual.installmentsText"
                        )}`}
                      </Title>
                      <Title
                        color="text-white"
                        size="text-8xl"
                        customClassName="font-extrabold uppercase"
                      >
                        {`R$ ${totalValue}`}
                      </Title>
                    </div>
                    <Text
                      color="purple-300"
                      customClassName="w-full text-center uppercase"
                    >
                      {t("selection.guaranteesWithTheManual.orText", {
                        installments,
                        installmentValue,
                      })}
                    </Text>
                  </div>
                </div>
                <div className="mx-auto md:max-w-md">
                  <Button
                    variant="primary"
                    onClick={openModal}
                    width="w-full"
                    customClassName="my-6 px-4"
                  >
                    <Text size="text-sm" weight="bold" customClassName="sm:text-xl">
                      {t("selection.guaranteesWithTheManual.cta")}
                    </Text>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block w-full relative">
                <Image
                  src={ronaldinho2}
                  alt="ronaldinho"
                  className="rounded-lg h-full w-full object-cover object-center"
                  style={{ objectPosition: "80% center" }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default GuaranteesWithTheManual;
