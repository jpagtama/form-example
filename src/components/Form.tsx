import useInput from '../hooks/useInput';
import useSelect from '../hooks/useSelect';
import useCheckbox from '../hooks/useCheckbox';
import useTextarea from '../hooks/useTextarea';
import styles from '../styles/Form.module.css';

const Form = () => {
    const { value: firstNameVal, inputHandler: firstNameHandler, error: firstNameError } = useInput();
    const { value: lastNameVal, inputHandler: lastNameHandler, error: lastNameError } = useInput();
    const { value: genderVal, selectHandler: genderHandler, blurHandler, error: genderError } = useSelect();
    const { values: interestsVals, changeHandler: interestsHandler, error: interestsError } = useCheckbox()
    const { value: aboutMeVal, changeHandler: aboutMeHandler, error: aboutMeError } = useTextarea();

    const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];
    const purposeOptions = ["Business", "Student", "Hobby", "Exploring"];
    const interestsOptions = ["Development", "Management", "Marketing"];

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted');
    }

    return (
        <form aria-label="form" onSubmit={submitHandler} className={styles.container} >
            <div className={styles.topContainer}>
                <div className={styles.textFieldContainer} >
                    <label htmlFor="firstName"> First Name: <span className={`errorMessage`}>{firstNameError.hasError && firstNameError.message}</span> </label>
                    <input id="firstName" aria-label="firstName" name="firstName" type="text" value={firstNameVal} onChange={firstNameHandler} required />
                </div>

                <div className={styles.textFieldContainer} >
                    <label htmlFor="lastName"> Last Name: {<span className={`errorMessage`} >{lastNameError.hasError && lastNameError.message}</span>} </label>
                    <input id="lastName" aria-label="lastName" name="lastName" type="text" value={lastNameVal} onChange={lastNameHandler} required />
                </div>

                <div className={styles.dropDownContainer}>
                    <label htmlFor="gender">Gender: {genderError.hasError && <span className={`errorMessage`} >{genderError.message}</span>} </label>
                    <select name="gender" id="gender" value={genderVal} onChange={genderHandler} onBlur={blurHandler} required >
                        <option value="" disabled >Select gender</option>
                        {genderOptions.map(opt => <option key={opt} value={opt} >{opt}</option>)}
                    </select>
                </div>
            </div>

            <div className={styles.radioContainer}>
                <span className={styles.label} >Purpose: </span>
                {purposeOptions.map(opt => <label htmlFor={opt} key={opt} ><input type="radio" name="purpose" id={opt} value={opt} />{opt}</label>)}
            </div>

            <div className={styles.checkboxesContainer}>
                <span className={styles.label} >Interests: {interestsError.hasError && <span className={`errorMessage`} >{interestsError.message}</span>} </span>
                {interestsOptions.map(opt => {
                    return (
                        <label htmlFor={opt} key={opt} >
                            <input
                                type="checkbox" id={opt} name={opt} value={opt}
                                checked={interestsVals.includes(opt) ? true : false}
                                onChange={interestsHandler}
                                required
                            />{opt}
                        </label>
                    )
                })}
            </div>

            <div className={styles.textAreaContainer}>
                <label htmlFor="about" className={styles.aboutLabel}> About Me: {aboutMeError.hasError && <span className={`errorMessage`}>{aboutMeError.message}</span>} </label>
                <textarea className={styles.aboutTextArea} name="about" id="about" value={aboutMeVal} onChange={aboutMeHandler} required />
            </div>

            <div className={styles.submitContainer}>
                <button type="submit" >Submit</button>
            </div>

        </form>
    )
};

export default Form;