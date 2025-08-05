import { NextRequest, NextResponse } from "next/server";

// Definimos a constante localmente para evitar a importação do módulo i18n
// que contém dependências do React (incompatíveis com o Edge Runtime)
const LANGUAGE_COOKIE_KEY = 'preferred_language';

// Idiomas suportados
const SUPPORTED_LANGUAGES = ['en-US', 'pt-BR'] as const;

// Configurações do cookie
const COOKIE_OPTIONS = {
  path: '/',
  secure: true, // Garante que o cookie só seja enviado via HTTPS
  sameSite: 'lax' as const,
  maxAge: 60 * 60 * 24 * 365, // 1 ano
  domain: '.manualdobruxo.com' // Permite compartilhar o cookie entre subdomínios
};

function isStaticFile(path: string) {
  const staticFileExtensions = [
    '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico',        // Imagens
    '.css', '.scss', '.sass',                                        // Estilos CSS
    '.js', '.jsx', '.ts', '.tsx',                                     // Arquivos JavaScript/TypeScript
    '.json',                                                         // Arquivos JSON
    '.eot', '.woff', '.woff2', '.ttf', '.otf',                        // Fontes
    '.mp4', '.webm', '.ogg', '.avi',                                  // Vídeos
    '.mp3', '.wav', '.flac', '.ogg',                                  // Áudio
    '.pdf',                                                          // PDFs
    '.txt',                                                          // Arquivos de texto
    '.zip', '.tar', '.tar.gz',                                        // Arquivos compactados
    '.xml',                                                          // Arquivos XML
    '.html'                                                          // Arquivos HTML
  ];
  return staticFileExtensions.some((ext) => path.endsWith(ext));
}

// Função para limpar o hostname de www e validar o formato
function cleanHostname(hostname: string): string {
  if (!hostname) return '';
  
  // Remove a porta do hostname (ex: localhost:3000 -> localhost)
  const hostnameWithoutPort = hostname.split(':')[0];
  
  // Remove www
  const cleaned = hostnameWithoutPort.replace(/^www\./, '');
  
  // Se for localhost ou 127.0.0.1, retorna o hostname limpo
  if (cleaned === 'localhost' || cleaned === '127.0.0.1') {
    return cleaned;
  }
  
  // Verifica se é um domínio válido do manualdobruxo.com
  if (!cleaned.endsWith('manualdobruxo.com') && !cleaned.endsWith('manualdobruxo.com.br')) {
    return '';
  }
  
  return cleaned;
}

// Função para validar e definir o cookie de idioma
function setLanguageCookie(response: NextResponse, language: typeof SUPPORTED_LANGUAGES[number]) {
  if (SUPPORTED_LANGUAGES.includes(language)) {
    response.cookies.set(LANGUAGE_COOKIE_KEY, language, COOKIE_OPTIONS);
  }
}

export function middleware(req: NextRequest) {
  try {
    const url = req.nextUrl;
    const hostname = cleanHostname(req.headers.get("host") || "");
    
    // Se o hostname for inválido, retorna erro
    if (!hostname) {
      return new NextResponse('Invalid hostname', { status: 400 });
    }
    
    // Se for arquivo estático, retorna diretamente
    if (isStaticFile(url.pathname)) {
      return NextResponse.next();
    }
    
    // Criar resposta base
    let response: NextResponse;
    let rewritePath = '';
    
    // Se for localhost, retorna diretamente sem rewrite
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return NextResponse.next();
    }
    
    // Lógica para os diferentes subdomínios
    if (hostname.startsWith("training.")) {
      rewritePath = `/curso${url.pathname}`;
      response = NextResponse.rewrite(new URL(rewritePath, req.url));
      const currentLang = req.cookies.get(LANGUAGE_COOKIE_KEY)?.value;
      if (currentLang !== "en-US") {
        setLanguageCookie(response, "en-US");
      }
    } else if (hostname.startsWith("treinamento.")) {
      rewritePath = `/curso${url.pathname}`;
      response = NextResponse.rewrite(new URL(rewritePath, req.url));
      const currentLang = req.cookies.get(LANGUAGE_COOKIE_KEY)?.value;
      if (currentLang !== "pt-BR") {
        setLanguageCookie(response, "pt-BR");
      }
    } else if (hostname.startsWith("curso.")) {
      rewritePath = `/curso${url.pathname}`;
      response = NextResponse.rewrite(new URL(rewritePath, req.url));
    } else if (hostname.startsWith("selecao.")) {
      rewritePath = `/selecao${url.pathname}`;
      response = NextResponse.rewrite(new URL(rewritePath, req.url));
    } else if (
      hostname === "manualdobruxo.com" ||
      hostname === "manualdobruxo.com.br"
    ) {
      rewritePath = `/selecao${url.pathname}`;
      response = NextResponse.rewrite(new URL(rewritePath, req.url));
    } else {
      // Se não for nenhum dos casos acima, retorna erro
      return new NextResponse('Invalid subdomain', { status: 400 });
    }
    
    return response;
  } catch (error) {
    // Em caso de erro, retorna erro 500
    console.error('Middleware error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
