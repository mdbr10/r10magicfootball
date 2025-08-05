import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ModalWrapper from "@/components/atoms/Modal-wrapper";
import Text from "@/components/atoms/Text";
import { IMaskInput } from "react-imask";
import { IModalProps } from "./types";
import { useSubscriptionModal } from "@/hooks/useSubscriptionModal";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

function Modal({ isOpen, onClose, redirectUrl }: IModalProps) {
  const { form, onSubmit: handleSubmit, isLoading } = useSubscriptionModal();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = async (data: any) => {
    await handleSubmit(data, redirectUrl);
  };

  const finalCtaText = t("common.modal.submit");

  return (
    <ModalWrapper isOpen={isOpen}>
      <div className="bg-white rounded-3xl max-w-screen-xs h-min flex justify-center items-center px-8 pb-10 pt-6 flex-col gap-8">
        <button onClick={onClose} className="w-full flex justify-end">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.941406 14.1175L7.02937 6.93001V7.24899L1.07603 0.529297H3.11034L8.2709 6.39839H8.4504L13.611 0.529297H15.6602L9.69193 7.24899V6.93001L15.7649 14.1175H13.6858L8.4504 7.86567H8.2709L3.02059 14.1175H0.941406Z"
              className="text-mid-gray fill-current"
            />
          </svg>
        </button>

        <div className="flex w-full h-min flex-row justify-between items-center">
          <Text align="center" customClassName="text-lg font-bold">
            {t("common.modal.title")}
          </Text>
        </div>

        <form
          onSubmit={formSubmit(onSubmit)}
          className="gap-4 flex flex-col w-full m-auto justify-center items-center"
        >
          <div className="w-full">
            <Input
              placeholder={t("common.modal.name")}
              {...register("name")}
              error={errors.name?.message}
            />
          </div>

          <div className="w-full">
            <Input
              placeholder={t("common.modal.email")}
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>

          <div className="w-full">
            <Controller
              name="whatsapp"
              control={control}
              render={({ field: { onChange, value } }) => (
                <IMaskInput
                  mask="(00) 00000-0000"
                  value={value}
                  onAccept={(value) => onChange(value.replace(/\D/g, ""))}
                  placeholder={t("common.modal.phone")}
                  className="w-full px-6 py-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-primary-green text-base font-normal font-body placeholder:text-gray-500"
                />
              )}
            />
            {errors.whatsapp && (
              <span className="text-red-500 text-sm mt-1 block font-body">
                {errors.whatsapp.message}
              </span>
            )}
          </div>

          <Button
            variant="tertiary"
            customClassName="w-full"
            onClick={formSubmit(onSubmit)}
            disabled={isLoading}
            isLoading={isLoading}
          >
            <Text weight="bold" size="text-md">
              {isLoading ? t("common.modal.loading") : finalCtaText}
            </Text>
          </Button>
        </form>
      </div>
    </ModalWrapper>
  );
}

export default Modal;
