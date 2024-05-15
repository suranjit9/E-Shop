"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface PropsInput {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<PropsInput> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        // autoComplete="off"
        className={`
            w-full
            p-2
            pt-4
            peer
            items-center
            outline-none
            bg-white
            font-light
            text-slate-700
            border-[1px]
            rounded-md
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            
            ${errors[id] ? "border-red-500" : "border-slate-300"}
            ${errors[id] ? "focus:border-red-500" : "focus:border-slate-500"}
            `}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm cursor-text duration-150 transform -translate-y-3 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-200 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-slate-700 peer-focus:text-sm ${
          errors[id] ? "text-red-500" : "text-slate-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
