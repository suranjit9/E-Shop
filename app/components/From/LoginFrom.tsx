"use client";

import { useState } from "react";
import Heading from "../Heading";
import Input from "../inputes/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../product/Button";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";

const LoginFrom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };
  return (
    <>
      <Heading title="Sign In" />
      <div className="w-[55%] gap-4 items-center justify-center flex">
        <Button
          custom="w-1/2 "
          label="Google"
          onClick={() => {}}
          outline
          icon={AiOutlineGoogle}
        />
        <Button
          custom="w-1/2"
          label=" Github"
          onClick={() => {}}
          outline
          icon={AiOutlineGithub}
        />
      </div>
      <hr className="w-full" />
      <div className="w-full items-center justify-center flex">
        <form className="space-y-2">
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
            onClick={handleSubmit(onSubmit)}
            label={isLoading ? "Loading..." : "Login"}
            disabled={isLoading}
          />
        </form>
      </div>
      <p className="text-center">
        Don&apos;t have an account?{" "}
        <Link className="text-blue-500" href="/signup">
          Sing up
        </Link>
      </p>
    </>
  );
};

export default LoginFrom;
