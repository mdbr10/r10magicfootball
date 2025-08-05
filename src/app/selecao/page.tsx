"use client";
import Header from "@/components/templates/header";
import WhatsappButton from "@/components/atoms/WhatsappButton";
import BecomeYourDreamsIntoReality from "@/components/templates/becomeYourDreamsIntoReality";
import Faq from "@/components/templates/faq";
import Footer from "@/components/templates/footer";
import GrantYourVacancy from "@/components/templates/grantYourVacancy";
import GuaranteesWithTheManual from "@/components/templates/GuaranteesWithTheManual";
import HourToShowYourTalent from "@/components/templates/hourToShowYourTalent";
import InTheMedia from "@/components/templates/InTheMedia";
import PromoBanner from "@/components/molecules/PromoBanner";
import UniqueOportunity from "@/components/templates/uniqueOportunity";
import WhyWeAreDifferent from "@/components/templates/whyWeAreDifferent";
import Modal from "@/components/molecules/Modal/ffModal";
import { useSubscriptionModal } from "@/hooks/useSubscriptionModal";
import { useTranslation } from "react-i18next";

function page() {
  const { openModal, isOpen, closeModal } = useSubscriptionModal();
  const { t } = useTranslation();
  return (
    <>
      <Header showCta={true} ctaText={t("selection.header.cta")} />
      <main className="w-full overflow-x-hidden">
        <PromoBanner
          customClassName="md:hidden"
          text={t("selection.promoBanner.text")}
        />
        <WhatsappButton />
        <BecomeYourDreamsIntoReality />
        <UniqueOportunity />
        <HourToShowYourTalent />
        <WhyWeAreDifferent />
        <GrantYourVacancy />
        <GuaranteesWithTheManual
          openModal={openModal}
          installments={"12"}
          installmentValue={"29,64"}
          totalValue={"297,00"}
        />
        <InTheMedia />
        <Faq />
      </main>
      <Footer />
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        ctaText={t("selection.modal.cta")}
        type="hotmart"
      />
    </>
  );
}

export default page;
