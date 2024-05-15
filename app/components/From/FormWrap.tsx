import React from "react";


const FormWrap = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="min-h-fit h-full flex items-center justify-center pb-12 pt-24">
            <div className="w-full max-w-[650px] flex flex-col gap-4 items-center shadow-xl shadow-slate-300 p-4 md:p-8"> 
            {children}
            </div>
        </div>
    );
};

export default FormWrap;