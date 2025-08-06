import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";

export default function page() {
  return (
    <>
      <main className="min-h-screen bg-black py-20">
        <Container>
          <div className="flex flex-col gap-8 py-20">
            <Text color="white" size="text-3xl" weight="bold">
              Terms of Service
            </Text>

            <div className="flex flex-col gap-6">
              <Text color="light-gray" size="text-2xl" weight="semibold">
                1. Terms
              </Text>
              <Text color="light-gray" size="text-base">
                By accessing the website at Magic Football by Ronaldinho you are
                agreeing to be bound by these terms of service, all applicable
                laws and regulations, and agree that you are responsible for
                compliance with any applicable local laws. If you do not agree
                with any of these terms, you are prohibited from using or
                accessing this site. The materials contained in this website are
                protected by applicable copyright and trademark law.
              </Text>

              <Text color="light-gray" size="text-2xl" weight="semibold">
                2. Use License
              </Text>
              <Text color="light-gray" size="text-base">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Magic Football by
                Ronaldinho&apos;s website for personal, non-commercial
                transitory viewing only. This is the grant of a licence, not a
                transfer of title, and under this licence you may not:
              </Text>
              <ol className="list-decimal pl-6 flex flex-col gap-2 text-gray-200">
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on Magic Football by Ronaldinho website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or &apos;mirror&apos;
                  the materials on any other server.
                </li>
              </ol>
              <Text color="light-gray" size="text-base">
                This licence shall automatically terminate if you violate any of
                these restrictions and may be terminated by Magic Football by
                Ronaldinho at any time. Upon terminating your viewing of these
                materials or upon the termination of this licence, you must
                destroy any downloaded materials in your possession whether in
                electronic or printed format.
              </Text>

              <Text color="light-gray" size="text-2xl" weight="semibold">
                3. Disclaimer
              </Text>
              <Text color="light-gray" size="text-base">
                The materials on Magic Football by Ronaldinho&apos;s website are
                provided on an &apos;as is&apos; basis. Magic Football by
                Ronaldinho makes no warranties, expressed or implied, and hereby
                disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </Text>
              <Text color="light-gray" size="text-base">
                Further, Magic Football by Ronaldinho does not warrant or make
                any representations concerning the accuracy, likely results, or
                reliability of the use of the materials on its website or
                otherwise relating to such materials or on any sites linked to
                this site.
              </Text>

              <Text color="light-gray" size="text-2xl" weight="semibold">
                4. Limitations
              </Text>
              <Text color="light-gray" size="text-base">
                In no event shall Magic Football by Ronaldinho or its suppliers
                be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the
                materials on Magic Football by Ronaldinho&apos;s website, even
                if Magic Football by Ronaldinho or a Magic Football by
                Ronaldinho authorised representative has been notified orally or
                in writing of the possibility of such damage. Because some
                jurisdictions do not allow limitations on implied warranties, or
                limitations of liability for consequential or incidental
                damages, these limitations may not apply to you.
              </Text>

              <Text color="light-gray" size="text-2xl" weight="semibold">
                5. Accuracy of materials
              </Text>
              <Text color="light-gray" size="text-base">
                The materials appearing on Magic Football by Ronaldinho&apos;s
                website could include technical, typographical, or photographic
                errors. Magic Football by Ronaldinho does not warrant that any
                of the materials on its website are accurate, complete or
                current. Magic Football by Ronaldinho may make changes to the
                materials contained on its website at any time without notice.
                However Magic Football by Ronaldinho does not make any
                commitment to update the materials.
              </Text>

              <Text color="light-gray" size="text-2xl" weight="semibold">
                6. Links
              </Text>
              <Text color="light-gray" size="text-base">
                Magic Football by Ronaldinho has not reviewed all of the sites
                linked to its website and is not responsible for the contents of
                any such linked site. The inclusion of any link does not imply
                endorsement by Magic Football by Ronaldinho of the site. Use of
                any such linked website is at the user&apos;s own risk.
              </Text>

              <Text color="light-gray" size="text-2xl" weight="semibold">
                7. Modifications
              </Text>
              <Text color="light-gray" size="text-base">
                Magic Football by Ronaldinho may revise these terms of service
                for its website at any time without notice. By using this
                website you are agreeing to be bound by the then current version
                of these terms of service.
              </Text>

              <Text color="light-gray" size="text-2xl" weight="semibold">
                8. Governing Law
              </Text>
              <Text color="light-gray" size="text-base">
                These terms and conditions are governed by and construed in
                accordance with the laws of Magic Football by Ronaldinho and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that State or location.
              </Text>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
