"use client";

import Logo from "@/assets/svg/logo";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Link from "next/link";
import { useState } from "react";
import LanguageSelector from "@/components/molecules/LanguageSelector";
import { useTranslation } from "react-i18next";

function Header({
  showCta,
  openModal,
  ctaText
}: {
  showCta?: boolean;
  openModal?: () => void;
  ctaText?: string
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const renderButton = (isMobile = false) => {
    const buttonWidth = isMobile ? "w-full" : "w-4/4";

    const buttonComponent = (
      <Button variant="secondary" width={buttonWidth}>
        <Text size="text-md" weight={"bold"}>
          {ctaText || t('common.header.cta')}
        </Text>
      </Button>
    );

    if (openModal) {
      return <div onClick={openModal}>{buttonComponent}</div>;
    } else {
      return <a href="#oferta">{buttonComponent}</a>;
    }
  };

  return (
    <>
      <header className="py-6 flex lg:absolute top-0 lg:bg-transparent w-full items-center md:relative md:bg-black md:px-10 px-4 bg-black z-30">
        <Container>
          <div className="flex flex-row justify-between items-center w-full">
            <Link href="/" className="w-full max-w-36 md:max-w-44">
              <Logo />
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex flex-row items-center gap-6 z-30">
              {/* Seletor de bandeiras - Desktop */}
              <LanguageSelector
                size="lg"
              />
              {showCta && renderButton()}
            </div>

            {/* Menu Mobile Icon */}
            <div className="flex flex-row items-center gap-2 md:hidden">
              {/* Seletor de bandeiras - Mobile */}
              <LanguageSelector
                size="sm"
              />

              <button
                className="md:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
              <div className="absolute md:hidden top-[88px] left-0 right-0 bg-black p-4 border-t border-gray-800 z-30">
                <div className="flex flex-col items-center gap-6">
                  {showCta && renderButton(true)}
                </div>
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
