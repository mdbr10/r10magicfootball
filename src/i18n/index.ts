import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importando os arquivos de tradução
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import esES from './locales/es-ES.json';
import frFR from './locales/fr-FR.json';
import itIT from './locales/it-IT.json';
import zhCN from './locales/zh-CN.json';

// Mapeamento de idiomas para lidar com exceções
const languageMapping: Record<string, string> = {
  // Variantes do português
  'pt-PT': 'pt-BR',
  'pt': 'pt-BR',

  // Variantes do inglês
  'en-GB': 'en-US',
  'en-CA': 'en-US',
  'en-AU': 'en-US',
  'en': 'en-US',

  // Variantes do espanhol
  'es-MX': 'es-ES',
  'es-AR': 'es-ES',
  'es-CO': 'es-ES',
  'es': 'es-ES',

  // Variantes do francês
  'fr-CA': 'fr-FR',
  'fr-BE': 'fr-FR',
  'fr-CH': 'fr-FR',
  'fr': 'fr-FR',

  // Variantes do italiano
  'it': 'it-IT',

  // Variantes do chinês
  'zh-TW': 'zh-CN',
  'zh-HK': 'zh-CN',
  'zh': 'zh-CN'
};

export const LANGUAGE_STORAGE_KEY = 'preferred_language';

// Função para mapear o idioma detectado para o idioma suportado
const mapLanguage = (detectedLang: string): string => {
  // Verifica se o idioma detectado está no mapeamento
  if (languageMapping[detectedLang]) {
    return languageMapping[detectedLang];
  }

  // Verifica se apenas a parte principal do idioma está no mapeamento
  const mainLang = detectedLang.split('-')[0];
  if (languageMapping[mainLang]) {
    return languageMapping[mainLang];
  }

  // Se não encontrar no mapeamento, retorna o idioma detectado
  return detectedLang;
};

// Configuração do detector de idioma
const languageDetectorOptions = {
  // Ordem de detecção
  order: ['cookie', 'navigator'],
  
  // Função para buscar o idioma nos cookies
  lookupCookie: LANGUAGE_STORAGE_KEY,
  
  // Função para mapear o idioma detectado
  lookupFromPathIndex: 0,
  
  // Função para converter o idioma detectado
  convertDetectedLanguage: mapLanguage
};

// Inicialização do i18next
i18n
  // Detector de idioma do navegador
  .use(LanguageDetector)
  // Integração com React
  .use(initReactI18next)
  // Inicialização
  .init({
    // Recursos de tradução
    resources: {
      'pt-BR': ptBR,
      'en-US': enUS,
      'es-ES': esES,
      'fr-FR': frFR,
      'it-IT': itIT,
      'zh-CN': zhCN
    },
    lng: 'pt-BR',
    // Idioma de fallback
    fallbackLng: 'pt-BR',
    // Namespace padrão
    defaultNS: 'translation',
    // Detecção de idioma
    detection: languageDetectorOptions,
    // Interpolação
    interpolation: {
      // Não é necessário escapar valores no React
      escapeValue: false
    }
  });

export default i18n; 