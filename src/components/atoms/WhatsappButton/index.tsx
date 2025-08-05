"use client";
import WhatsappIcon from "@/assets/svg/whatsapp";
import Text from "../Text";
import { useTranslation } from "react-i18next";

function WhatsappButton() {
  const { t } = useTranslation();
  return (
    <button
      className={`border-2 border-white rounded-full bg-gray-300 flex flex-row items-center gap-3 justify-center w-auto p-1 fixed lg:bottom-4 lg:right-4 md:bottom-4 md:right-4 bottom-4 right-4 z-40 hover:scale-105 hover:bg-gray-200 transition-all duration-300 ease-in-out`}
    >
      <a
        href="https://api.whatsapp.com/send?phone=5511916863204&text=Quero%20saber%20mais%20sobre%20o%20Manual%C2%A0do%C2%A0Bruxo"
        target="_blank"
        className="flex flex-row items-center gap-2"
      >
        <Text
          size="text-base"
          customClassName="text-wrap text-left pl-6 max-w-28 hidden md:block leading-none"
        >
          {t("common.whatsapp.text")}
        </Text>
        <WhatsappIcon className={"flex flex-1"} />
      </a>
    </button>
  );
}

export default WhatsappButton;
