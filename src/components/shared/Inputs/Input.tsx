// src/components/shared/Inputs/Input.tsx
import React from "react";
import Image from "next/image";

export type InputData = {
  label: string;
  type: "text" | "email" | "password" | "number" | "search";
  id: string;
  classes?: string;
  img?: string;
  altImg?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, type, id, classes, img, altImg, value, onChange }: InputData) {
  return (
    <div className="px-5 mb-5 font-poppins">
      {img && altImg && <Image src={img} alt={altImg} width={24} height={24} />}
      <input
        onChange={onChange}
        value={value}
        className={`${classes} w-full h-[50px] placeholder:text-principal ease-in-out duration-300 transition-all text-subtitle-sm hover:text-branco-acinzentado text-principal  hover:bg-principal  hover:placeholder:text-branco-acinzentado hover:scale-105  focus:text-branco-acinzentado  focus:bg-principal  focus:placeholder:text-branco-acinzentado focus:scale-105   shadow-ui   px-5 outline-none border-1  border-stroke bg-background rounded-sm`}
        type={type}
        id={id}
        name={id}
        placeholder={label}
      />
    </div>
  );
}

export default Input;