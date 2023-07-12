import { useState } from "react";

interface ErrorType {
    hasError: boolean,
    message?: string
}

const useSelect = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<ErrorType>({ hasError: false });

    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const isRequired = e.target.required;
        const val = e.target.value;
        setValue(val);

        if (isRequired && !val.length) {
            setError({ hasError: true, message: 'Please make a selection' });
        } else {
            setError({ hasError: false });
        }
    }

    const blurHandler = (e: React.FocusEvent<HTMLSelectElement>) => {
        const isRequired = e.target.required;
        if (isRequired && !value.length) {
            setError({ hasError: true, message: 'Please make a selection' });
        } else {
            setError({ hasError: false });
        }
    }

    return { value, selectHandler, blurHandler, error };
}

export default useSelect;