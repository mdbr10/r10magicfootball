'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { LANGUAGE_STORAGE_KEY } from './index';
import Cookies from 'js-cookie';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Garantir que o i18n só é inicializado no lado do cliente
    setMounted(true);

    // Configurar um listener para mudanças de idioma
    const handleLanguageChange = (newLanguage: string) => {
      document.documentElement.lang = newLanguage.split('-')[0];
      // Armazenar o idioma apenas em cookies
      Cookies.set(LANGUAGE_STORAGE_KEY, newLanguage, { path: '/' });
    };

    // Adicionar o listener
    i18n.on('languageChanged', handleLanguageChange);

    // Limpar o listener quando o componente for desmontado
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  // Não renderizar nada até que o componente esteja montado no cliente
  if (!mounted) return <>{children}</>;

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 