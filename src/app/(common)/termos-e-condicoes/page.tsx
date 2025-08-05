import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";

export default function TermosCondicoes() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black py-20">
        <Container>
          <div className="flex flex-col gap-8 py-20">
            <Text 
              color="white"
              size="text-3xl"
              weight="bold"
            >
              Termos e Condições
            </Text>
            
            <div className="flex flex-col gap-6">
              <Text
                color="light-gray"
                size="text-2xl"
                weight="semibold"
              >
                1. Termos
              </Text>

              <Text color="light-gray" size="text-base">
                Ao acessar ao site Manual do Bruxo, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
              </Text>

              <Text
                color="light-gray"
                size="text-2xl"
                weight="semibold"
              >
                2. Uso de Licença
              </Text>

              <Text color="light-gray" size="text-base">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Manual do Bruxo, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
              </Text>

              <ol className="list-decimal pl-6 flex flex-col gap-2 text-gray-200">
                <li>modificar ou copiar os materiais; </li>
                <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>
                <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Manual do Bruxo; </li>
                <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </li>
                <li>transferir os materiais para outra pessoa ou &apos;espelhe&apos; os materiais em qualquer outro servidor.</li>
              </ol>

              <Text
                color="light-gray"
                size="text-2xl"
                weight="semibold"
              >
                3. Isenção de responsabilidade
              </Text>

              <Text color="light-gray" size="text-base">
                Os materiais no site da Manual do Bruxo são fornecidos &apos;como estão&apos;. Manual do Bruxo não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
              </Text>

              <Text color="light-gray" size="text-base">
                Além disso, o Manual do Bruxo não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
              </Text>

              <Text
                color="light-gray"
                size="text-2xl"
                weight="semibold"
              >
                4. Limitações
              </Text>

              <Text color="light-gray" size="text-base">
                Em nenhum caso o Manual do Bruxo ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Manual do Bruxo, mesmo que Manual do Bruxo ou um representante autorizado da Manual do Bruxo tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
              </Text>

              <Text
                color="light-gray"
                size="text-2xl"
                weight="semibold"
              >
                5. Precisão dos materiais
              </Text>

              <Text color="light-gray" size="text-base">
                Os materiais exibidos no site da Manual do Bruxo podem incluir erros técnicos, tipográficos ou fotográficos. Manual do Bruxo não garante que qualquer material em seu site seja preciso, completo ou atual. Manual do Bruxo pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Manual do Bruxo não se compromete a atualizar os materiais.
              </Text>

              <Text
                color="light-gray"
                size="text-2xl"
                weight="semibold"
              >
                6. Links
              </Text>

              <Text color="light-gray" size="text-base">
                O Manual do Bruxo não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Manual do Bruxo do site. O uso de qualquer site vinculado é por conta e risco do usuário.
              </Text>

              <Text
                color="light-gray"
                size="text-2xl"
                weight="semibold"
              >
                Modificações
              </Text>

              <Text color="light-gray" size="text-base">
                O Manual do Bruxo pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </Text>

              <Text
                color="light-gray"
                size="text-2xl"
                weight="semibold"
              >
                Lei aplicável
              </Text>

              <Text color="light-gray" size="text-base">
                Estes termos e condições são regidos e interpretados de acordo com as leis do Manual do Bruxo e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
              </Text>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
