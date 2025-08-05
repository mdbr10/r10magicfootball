"use client";

import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Button from "@/components/atoms/Button";
import { Play, Share, ShoppingCart } from "lucide-react";
import CursoBg from "@/assets/curso-bg.png";
import Image from "next/image";
import VideoModal from "@/components/molecules/Modal/VideoModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HERO_VIDEO_ID = "1060604510/ea01d69592";

export default function CourseHero({ openModal }: { openModal: () => void }) {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: t("course.hero.share.title"),
          text: t("course.hero.share.text"),
          url: window.location.href,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = window.location.href;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    } catch (error) {
      console.error("Erro ao compartilhar:", error);
    }
  };

  const handlePurchase = () => {
    openModal();
  };

  return (
    <>
      <div className="flex flex-col">
        <section className="relative w-full h-[90vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

          {/* Background Image for mobile/tablet */}
          <div className="absolute inset-0 lg:hidden mt-16">
            <Image
              src={CursoBg}
              alt="Ronaldinho Gaúcho"
              fill
              className="object-cover scale-150"
              placeholder="blur"
              style={{ objectPosition: "center 0%" }}
              priority
            />
          </div>

          {/* Video for desktop */}
          <div className="hidden lg:block absolute inset-0 bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/videos/course-video.webm" type="video/webm" />
            </video>
          </div>

          <div className="relative z-20 h-full flex flex-col items-center justify-end pb-16 px-4">
            <div className="max-w-[1200px] text-center space-y-6">
              <Title
                size="text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                color="text-primary-green"
                customClassName="font-extrabold leading-tight"
              >
                {t("course.hero.title")}
              </Title>
              <Text
                size="text-xl md:text-2xl"
                color="white"
                customClassName="max-w-xl lg:max-w-full mx-auto"
              >
                {t("course.hero.subtitle")}
              </Text>
              <Button
                onClick={openModal}
                variant={"primary"}
                width="w-full"
                customClassName="max-w-sm md:max-w-xs lg:w-full mt-4 md:mt-0"
              >
                <Text
                  size="text-xl"
                  weight={"bold"}
                  customClassName="lg:text-2xl"
                >
                  {t("course.hero.cta")}
                </Text>
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-black w-full pb-6">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <button
              className="flex flex-col items-center gap-2 group"
              onClick={() => setCurrentVideoId(HERO_VIDEO_ID)}
            >
              <span className="w-10 h-10 flex items-center justify-center group-hover:border-[#00FF75] transition-colors">
                <Play className="w-8 h-8 text-white group-hover:text-[#00FF75] transition-colors" />
              </span>
              <Text
                color="white"
                size="text-sm"
                customClassName="group-hover:text-[#00FF75] transition-colors"
              >
                {t("course.hero.trailer")}
              </Text>
            </button>
            <button
              className="flex flex-col items-center gap-2 group"
              onClick={handleShare}
            >
              <span className="w-10 h-10 flex items-center justify-center group-hover:border-[#00FF75] transition-colors">
                <Share className="w-8 h-8 text-white group-hover:text-[#00FF75] transition-colors" />
              </span>
              <Text
                color="white"
                size="text-sm"
                customClassName="group-hover:text-[#00FF75] transition-colors"
              >
                {t("course.hero.share.button")}
              </Text>
            </button>
            <button
              className="flex flex-col items-center gap-2 group"
              onClick={handlePurchase}
            >
              <span className="w-10 h-10 flex items-center justify-center group-hover:border-[#00FF75] transition-colors">
                <ShoppingCart className="w-8 h-8 text-white group-hover:text-[#00FF75] transition-colors" />
              </span>
              <Text
                color="white"
                size="text-sm"
                customClassName="group-hover:text-[#00FF75] transition-colors"
              >
                {t("course.hero.purchase")}
              </Text>
            </button>
          </div>
        </div>

        <VideoModal
          isOpen={!!currentVideoId}
          onClose={() => setCurrentVideoId(null)}
          videoId={currentVideoId || ""}
          platform="vimeo"
        />
      </div>
    </>
  );
}
