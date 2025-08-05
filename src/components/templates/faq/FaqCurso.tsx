"use client";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Disclosure from "@/components/molecules/Disclosure";
import { useTranslation } from "react-i18next";

function FaqCurso() {
  const { t } = useTranslation();

  const questions = [
    {
      question: t("faq.questions.0.question"),
      answer: (
        <Text customClassName="font-normal">{t("faq.questions.0.answer")}</Text>
      ),
    },
    {
      question: t("faq.questions.1.question"),
      answer: (
        <Text customClassName="font-normal">{t("faq.questions.1.answer")}</Text>
      ),
    },
    {
      question: t("faq.questions.6.question"),
      answer: (
        <Text customClassName="font-normal">{t("faq.questions.6.answer")}</Text>
      ),
    },

    {
      question: t("faq.questions.10.question"),
      answer: (
        <Text customClassName="font-normal">
          {t("faq.questions.10.answer")}
        </Text>
      ),
    },
    {
      question: t("faq.questions.11.question"),
      answer: (
        <Text customClassName="font-normal">
          {t("faq.questions.11.answer")}
        </Text>
      ),
    },
    {
      question: t("faq.questions.12.question"),
      answer: (
        <Text customClassName="font-normal">
          {t("faq.questions.12.answer")}
        </Text>
      ),
    },
    {
      question: t("faq.questions.13.question"),
      answer: (
        <Text customClassName="font-normal">
          {t("faq.questions.13.answer")}
        </Text>
      ),
    },
    {
      question: t("faq.questions.14.question"),
      answer: (
        <Text customClassName="font-normal">
          {t("faq.questions.14.answer")}
        </Text>
      ),
    },
    {
      question: t("faq.questions.15.question"),
      answer: (
        <Text customClassName="font-normal">
          {t("faq.questions.15.answer")}
        </Text>
      ),
    },
    {
      question: t("faq.questions.16.question"),
      answer: (
        <Text customClassName="font-normal">
          {t("faq.questions.16.answer")}
        </Text>
      ),
    },
    {
      question: t("faq.questions.17.question"),
      answer: (
        <Text customClassName="font-normal">
          {t("faq.questions.17.answer")}
        </Text>
      ),
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
                {question.answer}
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

export default FaqCurso;
