// src/hooks/useForm.ts
import { handleFetchLogin, handleFetchSignIn } from "@/services/auth";
import React from "react";

function useForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    confirmPassword: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({ message: "", status: "" });
  const [success, setSuccess] = React.useState(false);

  const resetData = () => {
    setFormData({
      name: "",
      email: "",
      confirmPassword: "",
      password: "",
    });
    setErrors({ message: "", status: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    direction: string
  ) => {
    console.log(formData)
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (direction === "login") {
        const loginResponse = await handleFetchLogin(formData);
        if (loginResponse instanceof Error) {
          setErrors({
            message: loginResponse.message,
            status: loginResponse.status.toString(),
          });
        } else {
          setSuccess(true);
        }
      } else if (direction === "signin") {
        const signInResponse = await handleFetchSignIn(formData);
        if (signInResponse instanceof Error) {
          setErrors({
            message: signInResponse.message,
            status: signInResponse.status.toString(),
          });
        } else {
          setSuccess(true);
        }
      }
    } catch (e) {
      if (e instanceof Error) {
        setErrors({ message: e.message, status: "500" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    errors,
    success,
    handleChange,
    handleSubmit,
    resetData,
  };
}

export default useForm;