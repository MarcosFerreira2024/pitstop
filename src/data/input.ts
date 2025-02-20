import { InputData } from "@/components/shared/Inputs/Input";

export const dataLogin: InputData[] = [
    {
      label: "Email",
      type: "email", 
      id: "email",
      classes: "",
      onChange: () => {},
      value: "",

    },
    {
      label: "Senha",
      type: "password", 
      id: "password",
      classes: "",
      onChange: () => {},
      value: "",
    },
  ]

export const dataSignIn: InputData[] = [
    {
      label: "Nome",
      type: "text",  
      id: "name",
      classes: "",
      onChange: () => {},
      value: "",
    },
    {
      label: "Email",
      type: "email",  
      id: "email",
      classes: "",
      onChange: () => {},
      value: "",

    },
    {
      label: "Senha",
      type: "password",  
      id: "password",
      classes: "",
      onChange: () => {},
      value: "",
    },
    {
      label: "Confirmar Senha",
      type: "password",  
      id: "confirmPassword",
      classes: "",
      onChange: () => {},
      value: "",
    }
  ]
