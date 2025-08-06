import ModalWrapper from "@/components/atoms/Modal-wrapper";
import Title from "@/components/atoms/Title";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  ctaText?: string;
}

function Modal({ isOpen, onClose, type }: IModalProps) {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.fullfunnel.app/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const isTrainingPage =
    typeof window !== "undefined" &&
    window.location.hostname.startsWith("training.");

  const getIframeProps = () => {
    if (type === "boleto") {
      return {
        src: "https://link.fullfunnel.app/widget/form/0hXB83sRNQDKOtzIstRm",
        id: "inline-0hXB83sRNQDKOtzIstRm",
        formId: "0hXB83sRNQDKOtzIstRm",
        title: "Nova Página MB (Boleto)",
      };
    }

    return {
      src: "https://link.fullfunnel.app/widget/form/q83mTTfJZnmOvoz653iR",
      id: "inline-q83mTTfJZnmOvoz653iR",
      formId: "q83mTTfJZnmOvoz653iR",
      title: "Nova Página MB - International",
    };
  };

  const iframeProps = getIframeProps();

  return (
    <ModalWrapper isOpen={isOpen}>
      <div className="bg-white rounded-3xl max-w-screen-xs md:max-w-lg lg:max-w-2xl h-min flex justify-center items-center flex-col relative">
        <button onClick={onClose} className="absolute top-6 right-6 z-10">
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

        {/* Título */}
        <div className="w-full text-center pt-8 pb-0 px-6">
          <Title size="text-2xl md:text-4xl">{t("common.modal.ffTitle")}</Title>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-green to-yellow-green mx-auto mt-4"></div>
        </div>

        {/* Iframe */}
        <div className="w-full px-4 md:px-6 pb-8">
          <iframe
            src={iframeProps.src}
            style={{
              width: "100%",
              minWidth: "350px",
              height: "432px",
              border: "none",
              borderRadius: "3px",
            }}
            className="md:min-w-[500px] lg:min-w-[600px]"
            id={iframeProps.id}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={iframeProps.title}
            data-height="400"
            data-layout-iframe-id={iframeProps.id}
            data-form-id={iframeProps.formId}
            title={iframeProps.title}
          />
        </div>
      </div>
    </ModalWrapper>
  );
}

export default Modal;
