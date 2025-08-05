"use client";

import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Divider from "@/assets/svg/divider";
import Container from "@/components/atoms/Container";
import PrimaryDisclosure from "@/components/molecules/Disclosure/PrimaryDisclosure";
import PlayIcon from "@/assets/play.png";
import SobreImg from "@/assets/sobre.jpg";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "@/components/molecules/Modal/VideoModal";
import { useTranslation } from "react-i18next";

interface Module {
  title: string;
  content: string;
}

export default function AboutCourse({ openModal }: { openModal: () => void }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { t } = useTranslation();

  const modules = t("course.about.modules.list", {
    returnObjects: true,
  }) as Module[];

  return (
    <>
      <section className="w-full bg-[#121212]">
        <Container>
          <div className="flex flex-col gap-8 py-16 px-4">
            <Text color="white" size="text-3xl" customClassName="lg:text-4xl">
              {t("course.about.title")}
            </Text>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Lado Esquerdo - Imagem e Play Button */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video w-full">
                  <Image
                    src={SobreImg}
                    alt="Ronaldinho Gaúcho"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      className="backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
                      onClick={() => setIsVideoModalOpen(true)}
                    >
                      <Image src={PlayIcon} alt="Play" width={64} height={64} />
                    </button>
                  </div>
                </div>
                <div className="my-6">
                  <Divider />
                </div>
                <Text
                  color="white"
                  size="text-base"
                  customClassName="font-thin"
                  style={{ textAlign: "justify" }}
                >
                  {t("course.about.bio")}
                </Text>
              </div>

              {/* Lado Direito - Módulos */}
              <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-between">
                <div>
                  <div className="bg-black px-6 py-4 rounded-lg mb-2">
                    <Text
                      color="mid-gray"
                      size="text-lg"
                      customClassName="uppercase"
                    >
                      {t("course.about.modules.title")}
                    </Text>
                  </div>
                  <div className="space-y-2">
                    {modules.map((module: any, index: number) => (
                      <div key={index} className="">
                        <PrimaryDisclosure
                          title={module.title}
                          titleColor="white"
                          borderColor="border-[#353535]"
                        >
                          <Text color="white" size="text-sm">
                            {module.content}
                          </Text>
                        </PrimaryDisclosure>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full flex justify-center lg:justify-end">
                  <div className="w-fit">
                    <Button
                      variant="primary"
                      onClick={openModal}
                      width="w-64"
                      customClassName="max-w-xs"
                    >
                      <Text size="text-xl" weight="bold">
                        {t("course.about.cta")}
                      </Text>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="1060604510/ea01d69592"
        platform="vimeo"
      />
    </>
  );
}
