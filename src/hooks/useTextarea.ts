import { useState } from 'react';
import Error from '../types/Error';

const useTextarea = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<Error>({ hasError: false });

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const isRequired = e.target.required;
        const val = e.target.value;

        setValue(val);

        if (isRequired && !val.trim().length) {
            setError({ hasError: true, message: 'Please fill this out' });
        } else {
            setError({ hasError: false });
        }
    }

    return { value, changeHandler, error };
}

export default useTextarea;