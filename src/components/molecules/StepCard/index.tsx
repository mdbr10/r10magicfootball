"use client";
import Divider from "@/assets/svg/divider";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";

import React from "react";
import { IStepCardProps } from "./types";

function StepCard({ title, text, image: images }: IStepCardProps) {
  return (
    <div className="h-[192px] bg-black border border-primary-green rounded-lg px-4 py-6 relative w-full">
      <div className="flex flex-row justify-between h-max content-center w-full mb-1">
        <Title size={"text-3xl"} color={"text-primary-green"}>
          {title}
        </Title>

        <div className="flex flex-row">
          {images.map((image, key) => (
            <React.Fragment key={key}>{image}</React.Fragment>
          ))}
        </div>
      </div>
      <Divider />
      <Text color="white" size="text-base" customClassName="font-light">
        {text}
      </Text>
    </div>
  );
}

export default StepCard;
