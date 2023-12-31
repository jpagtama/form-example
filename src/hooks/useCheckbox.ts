import { useState } from 'react';

interface ErrorType {
    hasError: boolean,
    message?: string
}

const useCheckbox = () => {
    const [values, setValues] = useState<string[]>([]);
    const [error, setError] = useState<ErrorType>({ hasError: false });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isRequired = e.target.required;
        const val = e.target.value;
        const updatedValues = values.includes(val) ? [...values].filter(option => option !== val) : [...values, val];

        if (!values.includes(val)) {
            setValues(prevState => {
                return [...prevState, val];
            });
        } else {
            setValues(prevState => {
                return [...prevState].filter(option => option !== val);
            });
        }

        if (isRequired) errorHandler(updatedValues);
    }

    const errorHandler = (values: string[]) => {
        if (!values.length) {
            setError({ hasError: true, message: 'Please make a selection' });
            return true;
        }
        else {
            setError({ hasError: false });
            return false;
        }
    }

    return { values, changeHandler, errorHandler, error }
}

export default useCheckbox;