"use client";

import Instagram from "@/assets/svg/instagram";
import LogoEn from "@/assets/r10.png";
import Logo from "@/assets/svg/logo";
import Mail from "@/assets/svg/mail";
import SevenDays from "@/assets/svg/sevenDays";
import Whatsapp2 from "@/assets/svg/whatsapp2";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import guarantee from "@/assets/guarantee.png";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

function Footer() {
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
      hostname.includes("training.manualdobruxo.com") ||
      normalizedPath.startsWith("/terms-of-service") ||
      normalizedPath.startsWith("/privacy-policy")
    );
  }, [pathname]);

  const redirectToWhatsapp = () => {
    window.open(
      "https://wa.me/5511942499988?text=TheMagicFootballbyRonaldinho",
      "_blank"
    );
  };

  return (
    <footer className="bg-black w-full py-6 lg:py-10 px-4 md:px-10 lg:px-40">
      <Container>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Logo e Garantia */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="w-full max-w-[250px] mx-auto lg:mx-0">
              {shouldUseEnglishLogo ? (
                <Image
                  src={LogoEn}
                  alt="Logo"
                  style={{ maxWidth: 80 }}
                  priority
                />
              ) : (
                <Logo />
              )}
            </div>

            {/* Garantia - Desktop */}
            <div className="hidden lg:flex gap-3 items-center">
              <div className="w-[80px] h-[80px]" style={{minWidth: 80}}>
                {shouldUseEnglishLogo ? (
                  <Image
                    src={guarantee}
                    alt="Garantia"
                    style={{ width: 80, height: 80 }}
                    priority
                  />
                ) : (
                  <SevenDays width={80} height={80} />
                )}
              </div>
              <Text color="dark-gray" size="text-xs">
                {t("common.footer.guarantee")}
              </Text>
            </div>
          </div>

          {/* Garantia e Contatos em Row para Mobile */}
          <div className="flex flex-row justify-center gap-4 items-center lg:hidden">
            {/* Garantia */}
            <div
              className="flex flex-col md:flex-row items-center gap-2"
              style={{ gap: 40 }}
            >
              <div className="w-[50px] h-[50px]">
                {shouldUseEnglishLogo ? (
                  <Image
                    src={guarantee}
                    alt="Garantia"
                    style={{ width: 80, height: 80, maxWidth: 100 }}
                    priority
                  />
                ) : (
                  <SevenDays width={80} height={80} />
                )}
              </div>
              <div className="max-w-sm md:max-w-32">
                <Text color="dark-gray" size="text-xs">
                  {t("common.footer.guarantee")}
                </Text>
              </div>
            </div>

            {/* Divider Vertical */}
            <div className="h-16 w-[1px] bg-zinc-800" />

            {/* Contatos Mobile */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="text-[#00FF00]">
                  <Mail width="18" height="18" />
                </div>
                <Text color="mid-gray" size="text-xs" weight="light">
                  <a href="mailto:ronaldinhogauchoeuropa@gmail.com">
                    Magic Football e-mail
                  </a>
                </Text>
              </div>

              {!shouldUseEnglishLogo && (
                <div className="flex items-center gap-2">
                  <div className="text-[#00FF00]">
                    <Instagram width="18" height="18" />
                  </div>
                  <Text color="mid-gray" size="text-xs" weight="light">
                    <a
                      href="https://www.instagram.com/manualdobruxo/"
                      target="_blank"
                    >
                      {t("common.footer.instagram")}
                    </a>
                  </Text>
                </div>
              )}

              <div
                className="flex items-center gap-2"
                onClick={redirectToWhatsapp}
                style={{ cursor: "pointer" }}
              >
                <div className="text-[#00FF00]">
                  <Whatsapp2 width="18" height="18" />
                </div>
                <Text color="mid-gray" size="text-xs" weight="light">
                  {shouldUseEnglishLogo
                    ? "Customer Care"
                    : t("common.footer.whatsapp")}
                </Text>
              </div>
            </div>
          </div>

          {/* Contatos Desktop */}
          <div className="hidden lg:flex lg:flex-col lg:gap-4">
            <div className="flex items-center gap-2">
              <div className="text-[#00FF00]">
                <Mail width="20" height="20" />
              </div>
              <Text color="mid-gray" size="text-sm" weight="light">
                <a href="mailto:ronaldinhogauchoeuropa@gmail.com">Magic Football e-mail</a>
              </Text>
            </div>
            {!shouldUseEnglishLogo && (
              <div className="flex items-center gap-2">
                <div className="text-[#00FF00]">
                  <Instagram width="18" height="18" />
                </div>
                <Text color="mid-gray" size="text-xs" weight="light">
                  <a
                    href="https://www.instagram.com/manualdobruxo/"
                    target="_blank"
                  >
                    {t("common.footer.instagram")}
                  </a>
                </Text>
              </div>
            )}
            <div
              className="flex items-center gap-2"
              onClick={redirectToWhatsapp}
              style={{ cursor: "pointer" }}
            >
              <div className="text-[#00FF00]">
                <Whatsapp2 width="20" height="20" />
              </div>
              <Text color="mid-gray" size="text-sm" weight="light">
                {t("common.footer.whatsapp")}
              </Text>
            </div>
          </div>

          {/* Política de Privacidade */}
          <div className="hidden lg:flex flex-col gap-4">
            <Text color="light-gray" size="text-lg" weight="light">
              <a href="/terms-of-service">
                {t("common.footer.privacy_policy")}
              </a>
            </Text>
            <Text color="light-gray" size="text-lg" weight="light">
              <a href="/privacy-policy">{t("common.footer.terms")}</a>
            </Text>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 lg:mt-10 text-center flex flex-col lg:flex-row">
          <Text color="dark-gray" size="text-sm" weight="light">
            {t("common.footer.company")}
          </Text>
          <Text color="dark-gray" size="text-sm" weight="light">
            {t("common.footer.copyright")}
          </Text>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
