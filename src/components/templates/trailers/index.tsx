"use client";

import Modulo1 from "@/assets/modulos/1.png";
import Modulo2 from "@/assets/modulos/2.png";
import Modulo3 from "@/assets/modulos/3.png";
import Modulo4 from "@/assets/modulos/4.png";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import CardSliderContainer from "@/components/organisms/CardSlider";
import Card3 from "@/components/molecules/Card3";
import { SwiperSlide } from "swiper/react";
import VideoModal from "@/components/molecules/Modal/VideoModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const VIDEOS_IDS = {
  modulo1: "BWfLN1cwybQ",
  modulo2: "Cvq91b611n8",
  modulo3: "vNC3g3la_lM",
  modulo4: "mWa8LYlX1go",
};

export default function Trailers() {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleOpenVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
  };

  return (
    <section className="w-full bg-black">
      <Container>
        <div className="flex flex-col gap-8 py-16 px-4">
          <Text color="white" size="text-3xl" customClassName="lg:text-4xl">
            {t("course.trailers.title")}
          </Text>
          <div>
            <CardSliderContainer customClassName="bullets-gray">
              <SwiperSlide className="w-auto max-w-72">
                <Card3
                  image={Modulo1}
                  title={t("course.trailers.modules.1")}
                  onClick={() => handleOpenVideo(VIDEOS_IDS.modulo1)}
                />
              </SwiperSlide>
              <SwiperSlide className="w-auto max-w-72">
                <Card3
                  image={Modulo2}
                  title={t("course.trailers.modules.2")}
                  onClick={() => handleOpenVideo(VIDEOS_IDS.modulo2)}
                />
              </SwiperSlide>
              <SwiperSlide className="w-auto max-w-72">
                <Card3
                  image={Modulo3}
                  title={t("course.trailers.modules.3")}
                  onClick={() => handleOpenVideo(VIDEOS_IDS.modulo3)}
                />
              </SwiperSlide>
              <SwiperSlide className="w-auto max-w-72">
                <Card3
                  image={Modulo4}
                  title={t("course.trailers.modules.4")}
                  onClick={() => handleOpenVideo(VIDEOS_IDS.modulo4)}
                />
              </SwiperSlide>
            </CardSliderContainer>
          </div>
        </div>
      </Container>

      <VideoModal
        isOpen={!!currentVideoId}
        onClose={() => setCurrentVideoId(null)}
        videoId={currentVideoId || ""}
      />
    </section>
  );
}
