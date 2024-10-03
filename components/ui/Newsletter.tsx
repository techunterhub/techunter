"use client";
import { useForm } from 'react-hook-form';

interface FormData {
    email: string;
}

export default function Newsletter() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data:FormData) => {
        console.log('Subscribed Email:', data.email);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="font-montserrat w-full text-right">
            <div className="flex items-center bg-transparent gap-4 p-2 ">
                <input
                    type="email"
                    placeholder="Email Address"
                    {...register('email', { required: true })}
                    className="w-44 px-2 py-2 bg-transparent text-gray-900 text-sm border-b border-gray-500 font-medium  outline-none"
                    required
                />
                <button
                    type="submit"
                    className="ml-1 px-2 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg transform hover:bg-gray-700 transition duration-300"
                >
                    Subscribe
                </button>
            </div>
        </form>
    );
}