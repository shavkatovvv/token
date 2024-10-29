import React from "react";
import { request } from "../config/request";
import { useForm } from "react-hook-form";

export const Messages = () => {
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        request.get("/messages").then((res) => {
            setData(res.data);
        });
    };

    const submit = (formData) => {
        request.post("/messages", formData).then(() => {
            fetchData();
        });
        reset();
    };

    return (
        <div>
            <div className="container">
                {data?.map((item) => (
                    <h1 key={item.id}>{item.name}</h1>
                ))}
                <form
                    className="flex items-center justify-center pb-[80px] pt-[80px]"
                    onSubmit={handleSubmit(submit)}
                >
                    <input
                        className="w-[400px] rounded-[20px] text-blue-600 bg-black p-[20px]"
                        {...register("name")}
                        type="text"
                        placeholder="type title"
                    />
                    <button
                        type="submit"
                        className="py-[20px] px-[40px] rounded-[20px] bg-blue-500 text-white ml-[10px]"
                    >
                        send
                    </button>
                </form>
            </div>
        </div>
    );
};
