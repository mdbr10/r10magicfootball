import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";

export default function TermosPrivacidade() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black py-20">
        <Container>
          <div className="flex flex-col gap-8 py-20">
            <Text color="white" size="text-3xl" weight="bold">
              Política de Privacidade
            </Text>

            <div className="flex flex-col gap-6">
              <Text color="mid-gray" size="text-2xl" weight="semibold">
                Política Privacidade
              </Text>

              <Text color="mid-gray" size="text-base">
                A sua privacidade é importante para nós. É política do Manual do
                Bruxo respeitar a sua privacidade em relação a qualquer
                informação sua que possamos coletar no site{" "}
                <a
                  href="https://www.manualdobruxo.com.br/"
                  className="text-inherit"
                >
                  Manual do Bruxo
                </a>
                , e outros sites que possuímos e operamos.
              </Text>

              <Text color="mid-gray" size="text-base">
                Solicitamos informações pessoais apenas quando realmente
                precisamos delas para lhe fornecer um serviço. Fazemo-lo por
                meios justos e legais, com o seu conhecimento e consentimento.
                Também informamos por que estamos coletando e como será usado.
              </Text>

              <Text color="mid-gray" size="text-base">
                Apenas retemos as informações coletadas pelo tempo necessário
                para fornecer o serviço solicitado. Quando armazenamos dados,
                protegemos dentro de meios comercialmente aceitáveis para evitar
                perdas e roubos, bem como acesso, divulgação, cópia, uso ou
                modificação não autorizados.
              </Text>

              <Text color="mid-gray" size="text-base">
                Não compartilhamos informações de identificação pessoal
                publicamente ou com terceiros, exceto quando exigido por lei.
              </Text>

              <Text color="mid-gray" size="text-base">
                O nosso site pode ter links para sites externos que não são
                operados por nós. Esteja ciente de que não temos controle sobre
                o conteúdo e práticas desses sites e não podemos aceitar
                responsabilidade por suas respectivas{" "}
                <a
                  href="https://politicaprivacidade.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-inherit"
                >
                  políticas de privacidade
                </a>
                .
              </Text>

              <Text color="mid-gray" size="text-base">
                Você é livre para recusar a nossa solicitação de informações
                pessoais, entendendo que talvez não possamos fornecer alguns dos
                serviços desejados.
              </Text>

              <Text color="mid-gray" size="text-base">
                O uso continuado de nosso site será considerado como aceitação
                de nossas práticas em torno de privacidade e informações
                pessoais. Se você tiver alguma dúvida sobre como lidamos com
                dados do usuário e informações pessoais, entre em contacto
                connosco.
              </Text>

              <Text color="mid-gray" size="text-base">
                O serviço Google AdSense que usamos para veicular publicidade
                usa um cookie DoubleClick para veicular anúncios mais relevantes
                em toda a Web e limitar o número de vezes que um determinado
                anúncio é exibido para você.
              </Text>

              <Text color="mid-gray" size="text-base">
                Para mais informações sobre o Google AdSense, consulte as FAQs
                oficiais sobre privacidade do Google AdSense.
              </Text>

              <Text color="mid-gray" size="text-base">
                Utilizamos anúncios para compensar os custos de funcionamento
                deste site e fornecer financiamento para futuros
                desenvolvimentos. Os cookies de publicidade comportamental
                usados por este site foram projetados para garantir que você
                forneça os anúncios mais relevantes sempre que possível,
                rastreando anonimamente seus interesses e apresentando coisas
                semelhantes que possam ser do seu interesse.
              </Text>

              <Text color="mid-gray" size="text-base">
                Vários parceiros anunciam em nosso nome e os cookies de
                rastreamento de afiliados simplesmente nos permitem ver se
                nossos clientes acessaram o site através de um dos sites de
                nossos parceiros, para que possamos creditá-los adequadamente e,
                quando aplicável, permitir que nossos parceiros afiliados
                ofereçam qualquer promoção que pode fornecê-lo para fazer uma
                compra.
              </Text>

              <Text
                color="mid-gray"
                size="text-2xl"
                weight="semibold"
                customClassName="mt-8"
              >
                Compromisso do Usuário
              </Text>

              <Text color="mid-gray" size="text-base">
                O usuário se compromete a fazer uso adequado dos conteúdos e da
                informação que o Manual do Bruxo oferece no site e com caráter
                enunciativo, mas não limitativo:
              </Text>

              <ul className="list-disc pl-6 flex flex-col gap-2 text-mid-gray">
                <li>
                  A) Não se envolver em atividades que sejam ilegais ou
                  contrárias à boa fé a à ordem pública;
                </li>
                <li>
                  B) Não difundir propaganda ou conteúdo de natureza racista,
                  xenofóbica,{" "}
                  <a
                    href="https://pixbetoficial.br.com"
                    className="text-inherit"
                  >
                    pixbet
                  </a>{" "}
                  ou azar, qualquer tipo de pornografia ilegal, de apologia ao
                  terrorismo ou contra os direitos humanos;
                </li>
                <li>
                  C) Não causar danos aos sistemas físicos (hardwares) e lógicos
                  (softwares) do Manual do Bruxo, de seus fornecedores ou
                  terceiros, para introduzir ou disseminar vírus informáticos ou
                  quaisquer outros sistemas de hardware ou software que sejam
                  capazes de causar danos anteriormente mencionados.
                </li>
              </ul>

              <Text
                color="mid-gray"
                size="text-2xl"
                weight="semibold"
                customClassName="mt-8"
              >
                Mais informações
              </Text>

              <Text color="mid-gray" size="text-base">
                Esperemos que esteja esclarecido e, como mencionado
                anteriormente, se houver algo que você não tem certeza se
                precisa ou não, geralmente é mais seguro deixar os cookies
                ativados, caso interaja com um dos recursos que você usa em
                nosso site.
              </Text>

              <Text color="mid-gray" size="text-base" customClassName="mt-4">
                Esta política é efetiva a partir de 24 Fevereiro 2025 19:51
              </Text>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
