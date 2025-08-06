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
              Privacy Policy
            </Text>

            <div className="flex flex-col gap-6">
              <Text color="mid-gray" size="text-base">
                <strong>
                  Magic of Football by Ronaldinho - Manual do Bruxo
                </strong>
                <br />
                <strong>Last updated:</strong> [fill with release date]
              </Text>

              <Text color="mid-gray" size="text-base">
                Welcome! Your privacy and data security are a top priority for
                us Magic of Football by Ronaldinho. This policy details how we
                collect, use, store, transfer, and protect your personal data in
                accordance with the General Data Protection Regulation (GDPR),
                national and local regulations across Europe (including the UK,
                Spain, and Italy), and other data protection laws.
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                1. Who We Are
              </Text>
              <Text color="mid-gray" size="text-base">
                We are ESTEVAM PARTICIPACOES LTDA, responsible for launching and
                managing Magic of Football by Ronaldinho.
                <br />
                <strong>Contact Details:</strong>
                <br />
                Email: ronaldinhogauchoeuropa@gmail.com
                <br />
                Address: Av. Des. Dermeval Lyrio, 121 - sala 01 - Mata da Praia,
                Vitória - ES 29065-340 - Brazil
                <br />
                Data Protection Officer: Sergio Estevam da Costa Junior
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                2. What Data We Collect
              </Text>
              <Text color="mid-gray" size="text-base">
                We may collect the following categories of data:
                <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                  <li>
                    <strong>Identification:</strong> name, gender, date of
                    birth, and preferred football category.
                  </li>
                  <li>
                    <strong>Contact:</strong> email, telephone, WhatsApp, postal
                    address.
                  </li>
                  <li>
                    <strong>Registration/account details:</strong> username,
                    password (hashed/encrypted), login credentials, guardian
                    information for minors.
                  </li>
                  <li>
                    <strong>Payment/billing:</strong> payment method,
                    transaction ID, purchase details. (All card data is
                    processed securely by third-party payment processors; we do
                    not store card numbers.)
                  </li>
                  <li>
                    <strong>Course usage:</strong> accessed modules, progress,
                    performance, activity logs, certificates earned.
                  </li>
                  <li>
                    <strong>Communication:</strong> interactions via email,
                    support, and WhatsApp.
                  </li>
                  <li>
                    <strong>Media:</strong> uploaded photos, videos (for talent
                    selection, certificates, or portfolio).
                  </li>
                  <li>
                    <strong>Technical:</strong> device information, IP address,
                    location, browser and OS data, cookies, and analytics
                    identifiers.
                  </li>
                </ul>
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                3. How We Collect Your Data
              </Text>
              <Text color="mid-gray" size="text-base">
                <strong>Directly:</strong> registration forms, course access,
                event applications, support requests, communications.
                <br />
                <strong>Automatically:</strong> via cookies and analytics tools
                (Google Tag Manager, Google Analytics, Hotmart, Meta, etc.).
                <br />
                <strong>From third parties:</strong> payment services,
                authentication providers.
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                4. Purposes and Legal Bases for Processing
              </Text>
              <Text color="mid-gray" size="text-base">
                We process your data only when lawful and necessary, including:
                <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                  <li>
                    To provide and manage course access (performance of a
                    contract).
                  </li>
                  <li>To process payments (performance of a contract).</li>
                  <li>To communicate (contract and legitimate interest).</li>
                  <li>
                    For talent selection and events (legitimate interest, and
                    where needed, consent).
                  </li>
                  <li>For marketing if you opt in (consent).</li>
                  <li>
                    For analytics and system security (legitimate interest, or
                    consent for cookies).
                  </li>
                  <li>To comply with legal and tax obligations.</li>
                </ul>
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                5. Cookies, Tracking, and Consent
              </Text>
              <Text color="mid-gray" size="text-base">
                Our website uses cookies and similar technologies to:
                <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                  <li>
                    Ensure technical functioning of the site (strictly
                    necessary).
                  </li>
                  <li>
                    Analyze usage and improve user experience (analytics).
                  </li>
                  <li>
                    Personalize marketing (advertising cookies – with consent
                    only).
                  </li>
                </ul>
                Manage preferences via our cookie management portal:{" "}
                <a
                  href="https://www.cookiebot.com/"
                  className="text-inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Usercentrics (Cookiebot)
                </a>
                .
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                6. Children’s Data
              </Text>
              <Text color="mid-gray" size="text-base">
                For minors (&lt;18), registration must be completed by a legal
                guardian. Parental consent is required.
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                7. Data Sharing and Transfers
              </Text>
              <Text color="mid-gray" size="text-base">
                We may share data with:
                <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                  <li>
                    Authorized personnel and service providers (Hotmart,
                    WhatsApp, payment systems, etc.).
                  </li>
                  <li>
                    Ronaldinho Gaúcho’s team and club scouts (during Talent
                    Selection).
                  </li>
                  <li>Authorities (when legally required).</li>
                  <li>
                    With your explicit consent (testimonials, marketing, etc.).
                  </li>
                </ul>
                Some data may be transferred outside the EEA (e.g., Brazil,
                USA). Safeguards such as Standard Contractual Clauses apply.
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                8. Data Retention
              </Text>
              <Text color="mid-gray" size="text-base">
                We retain personal data only as long as needed (typically while
                you’re a student and for legal obligations). Analytics is
                anonymized wherever possible.
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                9. Your Rights
              </Text>
              <Text color="mid-gray" size="text-base">
                You may:
                <ul className="list-disc pl-6 flex flex-col gap-2 mt-2">
                  <li>Access, correct, or delete your data.</li>
                  <li>Restrict or object to processing (where applicable).</li>
                  <li>Withdraw consent (e.g., marketing).</li>
                  <li>Request data portability.</li>
                  <li>Complain to your local Data Protection Authority.</li>
                </ul>
                Contact us to exercise these rights.
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                10. Data Security
              </Text>
              <Text color="mid-gray" size="text-base">
                We use TLS/SSL, access controls, hashed passwords, activity
                logs, and audits. Partners are bound by confidentiality. We
                notify users and authorities in case of data breaches.
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                11. Policy Changes
              </Text>
              <Text color="mid-gray" size="text-base">
                We will notify you of material changes via email and display
                updates on our website. Check regularly for revisions.
              </Text>

              <Text color="mid-gray" size="text-2xl" weight="semibold">
                13. Contact and Complaints
              </Text>
              <Text color="mid-gray" size="text-base">
                Questions or complaints? Contact us at:
                <br />
                Email: ronaldinhogauchoeuropa@gmail.com
                <br />
                WhatsApp:{" "}
                <a
                  href="https://wa.me/5511942499988?TheMagicFootballbyRonaldinho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit"
                >
                  https://wa.me/5511942499988?TheMagicFootballbyRonaldinho
                </a>
                <br />
                You may also contact your local Data Protection Authority (e.g.,
                ICO in the UK, AEPD in Spain, Garante in Italy).
              </Text>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
