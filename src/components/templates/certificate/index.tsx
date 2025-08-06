"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import certificateImg from "@/assets/MDB.png";
import { useTranslation } from "react-i18next";

function Certificate() {
  const { t } = useTranslation();

  return (
    <section className="bg-black py-16 w-full">
      <Container>
        <div className="flex flex-col items-center text-center gap-8 px-5">
          {/* Título principal */}
          <Title
            size="text-6xl"
            color="text-primary-green"
            customClassName="font-extrabold"
          >
            {t("certificate.title")}
          </Title>

          {/* Subtítulo */}
          <Text
            size="text-lg"
            color="white"
            customClassName="md:text-xl lg:text-2xl max-w-2xl"
          >
            {t("certificate.subtitle")}
          </Text>

          <div className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:items-stretch">
            {/* Imagem do certificado */}
            <div className="max-w-2xl w-full">
              <Image
                src={certificateImg}
                alt="Certificado Premium Manual do Bruxo"
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Informações do certificado */}
            <div className="rounded-2xl p-6 border border-primary-green max-w-2xl w-full bg-[#1B1B1B] flex flex-col justify-center lg:px-20">
              <div className="space-y-4">
                <Text
                  size="text-lg"
                  color="white"
                  customClassName="md:text-xl"
                >
                  {t("certificate.features.design")}
                </Text>
                <hr className="border-primary-green" />
                <Text
                  size="text-lg"
                  color="white"
                  customClassName="md:text-xl"
                >
                  {t("certificate.features.recognition")}
                </Text>
                <hr className="border-primary-green" />
                <Text
                  size="text-lg"
                  color="white"
                  customClassName="md:text-xl"
                >
                  {t("certificate.features.physical")}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Certificate;
