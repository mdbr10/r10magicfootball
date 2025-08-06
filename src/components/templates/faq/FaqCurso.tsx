"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Disclosure from "@/components/molecules/Disclosure";
import { useTranslation } from "react-i18next";

function FaqCurso() {
  const { t } = useTranslation();

  const questions = Array.from({ length: 9 }, (_, index) => ({
    question: t(`course.faq.questions.${index}.question`),
    answer:
      index === 3 ? (
        <div
          className="font-normal"
          dangerouslySetInnerHTML={{
            __html: t(`course.faq.questions.${index}.answer`),
          }}
        />
      ) : (
        <Text customClassName="font-normal">
          {t(`course.faq.questions.${index}.answer`)}
        </Text>
      ),
  }));

  return (
    <section className="bg-light-gray/20 w-full py-12 lg:py-20">
      <Container>
        <div className="flex flex-col gap-4 px-5">
          <Title size={"text-6xl"} customClassName="font-extrabold">
            {t("course.faq.title")}
          </Title>
          <Text customClassName="font-normal">{t("course.faq.subtitle")}</Text>
          <div className="flex flex-col w-full gap-4">
            {questions.map((question, index) => (
              <Disclosure
                title={question.question}
                key={index}
                defaultOpen={index === 0}
              >
                {question.answer}
              </Disclosure>
            ))}
          </div>
          <div className="flex flex-col gap-2 p-4 px-6 bg-dark-gray/20 rounded-lg">
            <Text size={"text-2xl"} weight="bold" color="dark-gray">
              {t("course.faq.more_questions.title")}
            </Text>
            <Text color="dark-gray">
              {t("course.faq.more_questions.content")}
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FaqCurso;
