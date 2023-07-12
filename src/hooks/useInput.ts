import { useState } from "react";

interface ErrorType {
    hasError: boolean,
    message?: string
}

const useInput = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<ErrorType>({ hasError: false });

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isRequired = e.target.required;
        const value = e.target.value;
        setValue(value);
        if (isRequired && !value.trim().length) {
            setError({ hasError: true, message: 'Please enter a value' });
        } else {
            setError({ hasError: false });
        }
    }

    return { value, inputHandler, error };
}

export default useInput;