import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const { handleSubmit, reset, register } = useForm();
    const navigate = useNavigate();
    const submit = (data) => {
        request.post("/register", data).then((res) => {
            if (res.status == 200 || res.status > 200) {
                navigate("/");
            }
        });
    };
    return (
        <div className="absolute rounded-[20px] w-[400px] p-[20px] bg-cyan-300 top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <form onSubmit={handleSubmit(submit)} className="mt-[20px]">
                <div className="mt-[20px]">
                    <input
                        className="p-[10px] w-full rounded-[20px] bg-cyan-700 text-[20px] font-medium text-white"
                        type="email"
                        {...register("email")}
                        placeholder="email"
                    />
                </div>
                <div className="mt-[20px] mb-[20px]">
                    <input
                        className="p-[10px] w-full rounded-[20px] bg-cyan-700 text-[20px] font-medium text-white"
                        type="password"
                        {...register("password")}
                        placeholder="password"
                    />
                </div>

                <div className="mt-[20px] mb-[20px]">
                    <input
                        className="p-[10px] w-full rounded-[20px] bg-cyan-700 text-[20px] font-medium text-white"
                        type="text"
                        {...register("name")}
                        placeholder="name"
                    />
                </div>

                <button className="p-[10px] bg-red-700 w-full rounded-[10px] text-[20px] font-medium">
                    Send
                </button>
            </form>
        </div>
    );
};
