// src/components/shared/Inputs/InputList.tsx
import React from "react";
import Input from "./Input";
import { InputData } from "./Input";

type InputListProps = {
  data: InputData[];
  formData: { [key: string]: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputList({ data, formData, handleChange }: InputListProps) {
  return (
    <>
      {data.map((dataInput) => (
        <Input
          key={dataInput.id}
          id={dataInput.id}
          label={dataInput.label}
          type={dataInput.type}
          classes={dataInput.classes}
          img={dataInput.img}
          altImg={dataInput.altImg}
          value={formData[dataInput.id]}
          onChange={handleChange}
        />
      ))}
    </>
  );
}

export default InputList;