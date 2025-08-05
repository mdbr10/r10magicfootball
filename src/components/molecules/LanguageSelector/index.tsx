"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text";
import BrazilFlag from "@/assets/brazilFlag.png";
import USFlag from "@/assets/flags/us.svg";
import SpainFlag from "@/assets/flags/es.svg";
import FranceFlag from "@/assets/flags/fr.svg";
import ItalyFlag from "@/assets/flags/it.svg";
import ChinaFlag from "@/assets/flags/cn.svg";
import { useTranslation } from "react-i18next";

// Interface para as bandeiras
export interface Flag {
  id: string;
  src: any;
  alt: string;
  name: string;
}

interface LanguageSelectorProps {
  onSelectFlag?: (flag: Flag) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  customFlags?: Flag[];
}

// Bandeiras padrão disponíveis no componente
const defaultFlags: Flag[] = [
  {
    id: "pt-BR",
    src: BrazilFlag,
    alt: "Bandeira do Brasil",
    name: "Português"
  },
  {
    id: "en-US",
    src: USFlag,
    alt: "Bandeira dos EUA",
    name: "English"
  },
  {
    id: "es-ES",
    src: SpainFlag,
    alt: "Bandeira da Espanha",
    name: "Español"
  },
  {
    id: "fr-FR",
    src: FranceFlag,
    alt: "Bandeira da França",
    name: "Français"
  },
  {
    id: "it-IT",
    src: ItalyFlag,
    alt: "Bandeira da Itália",
    name: "Italiano"
  },
  {
    id: "zh-CN",
    src: ChinaFlag,
    alt: "Bandeira da China",
    name: "中文"
  }
];

const LanguageSelector = ({
  onSelectFlag,
  size = "md",
  className = "",
  customFlags,
}: LanguageSelectorProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation();

  // Use bandeiras personalizadas se fornecidas, caso contrário use as padrão
  const flags = customFlags || defaultFlags;

  // Inicializa com a primeira bandeira (será atualizado no useEffect)
  const [currentFlag, setCurrentFlag] = useState<Flag>(flags[0]);

  // Inicializa o idioma no lado do cliente
  useEffect(() => {
    // Encontra a bandeira correspondente ao idioma atual do i18n
    const currentLanguage = i18n.language;
    const foundFlag = flags.find(flag => flag.id === currentLanguage);

    if (foundFlag) {
      setCurrentFlag(foundFlag);
    }
  }, [flags, i18n.language]);

  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFlagChange = (flag: Flag) => {
    setCurrentFlag(flag);
    setIsMenuOpen(false);

    // Muda o idioma no i18next
    i18n.changeLanguage(flag.id);

    // Notifica o componente pai sobre a mudança, se um callback foi fornecido
    if (onSelectFlag) {
      onSelectFlag(flag);
    }
  };

  // Tamanhos baseados no parâmetro size
  const sizeClasses = {
    sm: {
      button: "w-8 h-8",
      dropdown: "w-56",
      flagIcon: "w-6 h-6",
      textSize: "text-xs",
      gap: "gap-3",
      padding: "p-2.5",
      maxHeight: "250px"
    },
    md: {
      button: "w-10 h-10",
      dropdown: "w-64",
      flagIcon: "w-7 h-7",
      textSize: "text-sm",
      gap: "gap-3",
      padding: "p-3",
      maxHeight: "280px"
    },
    lg: {
      button: "w-12 h-12",
      dropdown: "w-72",
      flagIcon: "w-8 h-8",
      textSize: "text-sm",
      gap: "gap-4",
      padding: "p-3",
      maxHeight: "300px"
    },
  };

  const currentSize = sizeClasses[size];

  // Estilos CSS para a barra de rolagem personalizada
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(31, 31, 31, 0.5);
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(107, 114, 128, 0.8);
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(107, 114, 128, 1);
    }
  `;

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      {/* Estilos para a barra de rolagem personalizada */}
      <style jsx global>{scrollbarStyles}</style>

      <div
        className={`${currentSize.button} overflow-hidden rounded-full border-2 border-primary-green cursor-pointer flex items-center justify-center hover:shadow-lg hover:shadow-primary-green/20 transition-all duration-300 ${isMenuOpen ? 'ring-2 ring-primary-green ring-offset-2 ring-offset-black' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={t('common.header.selectLanguage')}
        title={t('common.header.selectLanguage')}
      >
        <Image
          src={currentFlag.src}
          alt={currentFlag.alt}
          width={size === "sm" ? 32 : size === "md" ? 40 : 48}
          height={size === "sm" ? 32 : size === "md" ? 40 : 48}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dropdown de bandeiras */}
      {isMenuOpen && (
        <div
          className={`absolute right-0 mt-3 ${currentSize.dropdown} bg-black border border-gray-700 rounded-xl shadow-xl z-40 overflow-hidden animate-fadeIn`}
          style={{
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="sticky top-0 bg-gray-900 p-3 border-b border-gray-700/50 z-10">
            <div className="flex items-center justify-between">
              <Text
                size={currentSize.textSize as any}
                weight="bold"
                color="primary-green"
              >
                {t('common.header.selectLanguage')}
              </Text>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="py-2 overflow-y-auto custom-scrollbar"
            style={{
              maxHeight: currentSize.maxHeight,
            }}
          >
            {flags.map((flag) => (
              <div
                key={flag.id}
                className={`flex items-center ${currentSize.gap} ${currentSize.padding} hover:bg-gray-800 cursor-pointer transition-all duration-200 ${currentFlag.id === flag.id ? "bg-gray-800 border-l-4 border-primary-green" : "border-l-4 border-transparent"
                  }`}
                onClick={() => handleFlagChange(flag)}
              >
                <div className={`${currentSize.flagIcon} overflow-hidden rounded-full border-2 ${currentFlag.id === flag.id ? 'border-primary-green' : 'border-gray-600'} flex-shrink-0 shadow-md transition-all duration-200`}>
                  <Image
                    src={flag.src}
                    alt={flag.alt}
                    width={size === "sm" ? 24 : size === "md" ? 28 : 32}
                    height={size === "sm" ? 24 : size === "md" ? 28 : 32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Text
                    size={currentSize.textSize as any}
                    weight={currentFlag.id === flag.id ? "bold" : "normal"}
                    color="white"
                    customClassName="tracking-wide"
                  >
                    {flag.name}
                  </Text>
                </div>
                {currentFlag.id === flag.id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-primary-green flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 