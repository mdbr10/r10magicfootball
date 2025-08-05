"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import bolaImg from "@/assets/bolamdb.png";
import camisaImg from "@/assets/camisamdb.png";
import { useTranslation } from "react-i18next";

function Rewards() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1B1B1B] py-16 w-full">
      <Container>
        <div className="flex flex-col items-center text-center gap-8 px-5">
          {/* Título principal */}
          <Title
            size="text-6xl"
            color="text-primary-green"
            customClassName="font-extrabold"
          >
            {t("rewards.title")}
          </Title>

          {/* Texto explicativo */}
          <Text
            size="text-lg"
            color="white"
            customClassName="md:text-xl lg:text-2xl max-w-2xl"
          >
            {t("rewards.subtitle")}
          </Text>

          {/* Cards com prêmios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mt-8">
            {/* Card da Camisa */}
            <div className="inline-block rounded-2xl border-2 border-primary-green overflow-hidden h-64 lg:h-auto">
              <Image
                src={camisaImg}
                alt="Camisa Manual do Bruxo"
                className="w-full h-auto"
              />
            </div>

            {/* Card da Bola */}
            <div className="flex items-center justify-center rounded-2xl border-2 border-primary-green overflow-hidden h-60 lg:h-auto">
              <Image
                src={bolaImg}
                alt="Bola Manual do Bruxo"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Texto sobre certificado */}
          <Text
            size="text-sm"
            color="light-gray"
            customClassName="md:text-base max-w-3xl mt-8"
          >
            {t("rewards.certificate")}
          </Text>
        </div>
      </Container>
    </section>
  );
}

export default Rewards;
