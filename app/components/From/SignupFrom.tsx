"use client";

import { useState } from "react";
import Heading from "../Heading";
import Input from "../inputes/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";

const SignupFrom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
}
  return (
    <>
      <Heading title="Sign Up" />
      <hr className="w-full" />
      <div className="w-full items-center justify-center flex">
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="text"
          />
          <Input
            id="email"
            label="E-mail"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="email"
          />
          <Input
            id="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="password"
          />
          <Button
            className="w-2/4 mx-auto"
            variant="contained"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignupFrom;
