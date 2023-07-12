import { useState } from "react";
import Error from "../types/Error";

const useSelect = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<Error>({ hasError: false });

    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const isRequired = e.target.required;
        const val = e.target.value;
        setValue(val);

        if (isRequired) errorHandler(val);
    }

    const blurHandler = (e: React.FocusEvent<HTMLSelectElement>) => {
        const isRequired = e.target.required;
        if (isRequired) errorHandler(value);
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

    return { value, selectHandler, blurHandler, errorHandler, error };
}

export default useSelect;