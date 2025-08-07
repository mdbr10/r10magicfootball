"use client";

import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Link from "next/link";
import { useState, useMemo } from "react";
import LanguageSelector from "@/components/molecules/LanguageSelector";
import { useTranslation } from "react-i18next";
import LogoEn from "@/assets/r10.png";
import Image from "next/image";
import Logo from "@/assets/svg/logo";
import { usePathname } from "next/navigation";

function Header({
  showCta,
  openModal,
  ctaText,
}: {
  showCta?: boolean;
  openModal?: () => void;
  ctaText?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  const shouldUseEnglishLogo = useMemo(() => {
    if (!pathname) return false;

    const normalizedPath = pathname.toLowerCase();
    const hostname =
      typeof window !== "undefined" ? window.location.hostname : "";

    return (
      normalizedPath.startsWith("/curso") ||
      normalizedPath.startsWith("/course") ||
      hostname.includes("r10magicfootball.com") ||
      hostname.includes("localhost") ||
      hostname.includes("127.0.0.1") ||
      normalizedPath.startsWith("/terms-of-service") ||
      normalizedPath.startsWith("/privacy-policy")
    );
  }, [pathname]);

  const renderButton = (isMobile = false) => {
    const buttonWidth = isMobile ? "w-full" : "w-4/4";

    const buttonComponent = (
      <Button variant="secondary" width={buttonWidth}>
        <Text size="text-md" weight={"bold"}>
          {ctaText || t("common.header.cta")}
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
    <header className="py-6 flex lg:absolute top-0 lg:bg-transparent w-full items-center md:relative md:bg-black md:px-10 px-4 bg-black z-30">
      <Container>
        <div className="flex flex-row justify-between items-center w-full">
          <Link href="/" className="w-full max-w-36 md:max-w-44">
            {shouldUseEnglishLogo ? (
              <Image
                src={LogoEn}
                style={{ maxWidth: 80 }}
                alt="Logo"
                priority
              />
            ) : (
              <Logo />
            )}
          </Link>

          <div className="hidden md:flex flex-row items-center gap-6 z-30">
            <LanguageSelector size="lg" />
            {showCta && renderButton()}
          </div>

          <div className="flex flex-row items-center gap-2 md:hidden">
            <LanguageSelector size="sm" />
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
  );
}

export default Header;
