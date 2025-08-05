import { TriangleAlert } from "lucide-react";
import Text from "../Text";
import { IVagaLimitadaProps } from "./types";
import { useTranslation } from "react-i18next";

export function VagaLimitada({ customClassName }: IVagaLimitadaProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`border border-light-gray/80 rounded-2xl px-4 py-2 bg-transparent w-fit flex justify-center items-center gap-2 ${
        customClassName ? customClassName : ""
      }`}
    >
      <TriangleAlert className="w-6 h-6" color="#CEFF08" />
      <Text color="yellow-green" customClassName="text-[#CEFF08]">
        {t("common.vagaLimitada.text")}
      </Text>
    </div>
  );
}
