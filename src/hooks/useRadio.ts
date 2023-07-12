import { useState } from "react";
import Error from "../types/Error";

const useRadio = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<Error>({ hasError: false });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isRequired = e.target.required;
        const val = e.target.value;
        setValue(val);
        if (isRequired) errorHandler(val);
    }

    const errorHandler = (value: string) => {
        if (!value.trim().length) {
            setError({ hasError: true, message: 'Please make a selection' });
            return true;
        } else {
            setError({ hasError: false });
            return false;
        }
    }

    return { value, changeHandler, errorHandler, error };
}

export default useRadio;