import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { VagaLimitada } from "@/components/atoms/VagaLimitada";
import Table from "@/components/molecules/Table";
import { useTranslation } from "react-i18next";

function Categories() {
  const { t } = useTranslation();

  return (
    <div className="border border-primary-green rounded-lg bg-black flex lg:border lg:border-primary-green lg:grid lg:grid-cols-3 flex-col gap-6 w-full px-0 lg:px-5 pt-12 lg:py-12 border-none">
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col w-full">
          <Title
            size="text-5xl"
            color="text-primary-green"
            customClassName="lg:text-left xs:text-center max-w-sm mx-auto lg:mx-0"
          >
            {t("categories.title")}
          </Title>
          <Text
            size="text-base"
            color="mid-gray"
            customClassName="lg:text-left md:text-white md:text-xl xs:text-center xs:text-white xs:text-lg"
          >
            {t("categories.subtitle")}
          </Text>
        </div>
        <div className="hidden lg:block">
          <VagaLimitada customClassName="bg-[#5B5B5B]/20" />
        </div>
      </div>
      <Table
        headers={t("categories.headers", { returnObjects: true }) as string[]}
        data={t("categories.data", { returnObjects: true }) as any[]}
      ></Table>
    </div>
  );
}

export default Categories;
