'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import { useRouter } from "next/navigation";

import useLoginModal from "../hooks/useLoginModal";
import Modal from "../Modal";
import Input from "../Input";
import Heading from "../Heading";

const LoginModal = () => {
    const router = useRouter();

    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
    
        // Sign in via NextAuth with credentials
        const callback = await signIn('credentials', {
          username: data.username,
          password: data.password,
          redirect: false
        });
    
        setIsLoading(false);
    
        if (callback?.ok) {
          router.refresh();
          loginModal.onClose();
        } else if (callback?.error) {
          alert('Invalid credentials. Please try again.');
        }
      };

    const bodyContent = (
        <div className="flex flex-col p-4">
            <Heading 
                title="Welcome"
                subtitle="Login to your account."
            />
            <div className="pt-5">
                <Input 
                    id='username'
                    label='Username'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div className="pt-5">
                <Input 
                    id='password'
                    type='password'
                    label='Password'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            actionLabel="Login"
        />
    );
}

export default LoginModal;