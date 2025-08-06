"use client";
import WhatsappButton from "@/components/atoms/WhatsappButton";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import CourseHero from "@/components/templates/courseHero";
import AboutCourse from "@/components/templates/abourCourse";
import Trailers from "@/components/templates/trailers";
import FaqCurso from "@/components/templates/faq/FaqCurso";
import { useSubscriptionModal } from "@/hooks/useSubscriptionModal";
import Modal from "@/components/molecules/Modal/ffModal";
import { useTranslation } from "react-i18next";
import Rewards from "@/components/templates/rewards";
import Certificate from "@/components/templates/certificate";

function page() {
  const { openModal, isOpen, closeModal } = useSubscriptionModal();
  const { t } = useTranslation();

  return (
    <>
      <Header showCta={true} openModal={openModal} />
      <main>
        <WhatsappButton />
        <CourseHero openModal={openModal} />
        <AboutCourse openModal={openModal} />
        <Trailers />
        {/* Ocultado por solicitação do time de negócio */}
        {/* <Rewards /> */}
        <Certificate />
        <FaqCurso />
      </main>
      <Footer />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        ctaText={t("common.modal.submit")}
        type="default"
      />
    </>
  );
}

export default page;
