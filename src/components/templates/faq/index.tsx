"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Disclosure from "@/components/molecules/Disclosure";
import { useTranslation } from "react-i18next";

function Faq() {
  const { t } = useTranslation();
  const questions = [
    {
      question: t("faq.questions.0.question"),
      answer: t("faq.questions.0.answer"),
    },
    {
      question: t("faq.questions.1.question"),
      answer: t("faq.questions.1.answer"),
    },
    {
      question: t("faq.questions.2.question"),
      answer: t("faq.questions.2.answer"),
    },
    {
      question: t("faq.questions.3.question"),
      answer: t("faq.questions.3.answer"),
    },
    {
      question: t("faq.questions.4.question"),
      answer: t("faq.questions.4.answer"),
    },
    {
      question: t("faq.questions.5.question"),
      answer: t("faq.questions.5.answer"),
    },
    {
      question: t("faq.questions.6.question"),
      answer: t("faq.questions.6.answer"),
    },
    {
      question: t("faq.questions.7.question"),
      answer: t("faq.questions.7.answer"),
    },
    {
      question: t("faq.questions.8.question"),
      answer: t("faq.questions.8.answer"),
    },
    {
      question: t("faq.questions.9.question"),
      answer: t("faq.questions.9.answer"),
    },
  ];

  return (
    <section className="bg-light-gray/20 w-full py-12 lg:py-20">
      <Container>
        <div className="flex flex-col gap-4 px-5">
          <Title size={"text-6xl"} customClassName="font-extrabold">
            {t("faq.title")}
          </Title>
          <Text customClassName="font-normal">{t("faq.subtitle")}</Text>
          <div className="flex flex-col w-full gap-4">
            {questions.map((question, index) => (
              <Disclosure
                title={question.question}
                key={index}
                defaultOpen={index === 0}
              >
                <Text customClassName="font-normal">{question.answer}</Text>
              </Disclosure>
            ))}
          </div>
          <div className="flex flex-col gap-2 p-4 px-6 bg-dark-gray/20 rounded-lg">
            <Text size={"text-2xl"} weight="bold" color="dark-gray">
              {t("faq.more_questions.title")}
            </Text>
            <Text color="dark-gray">{t("faq.more_questions.content")}</Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Faq;
