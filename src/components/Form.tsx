import styles from '../styles/Form.module.css';


const Form = () => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted');
    }

    return (
        <form aria-label="form" onSubmit={submitHandler} className={styles.container} >
            <div className={styles.topContainer}>
                <div className={styles.textFieldContainer} >
                    <label htmlFor="firstName"> First Name:</label>
                    <input id="firstName" aria-label="firstName" name="firstName" type="text" />
                </div>

                <div className={styles.textFieldContainer} >
                    <label htmlFor="lastName"> Last Name:</label>
                    <input id="lastName" aria-label="lastName" name="lastName" type="text" />
                </div>

                <div className={styles.dropDownContainer}>
                    <label htmlFor="gender">Gender: </label>
                    <select name="gender" id="gender" value="">
                        <option value="" disabled >Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nonbinary">Non-binary</option>
                        <option value="nosay">Prefer not to say</option>
                    </select>
                </div>
            </div>

            <div className={styles.radioContainer}>
                <span className={styles.label} >Purpose: </span>
                <label htmlFor="business"><input type="radio" name="purpose" id="business" value="business" />Business</label>
                <label htmlFor="student"><input type="radio" name="purpose" id="student" value="student" />Student</label>
                <label htmlFor="hobby"><input type="radio" name="purpose" id="hobby" value="hobby" />Hobby</label>
                <label htmlFor="exploring"><input type="radio" name="purpose" id="exploring" value="exploring" />Exploring</label>
            </div>

            <div className={styles.checkboxesContainer}>
                <span className={styles.label} >Interests: </span>
                <label htmlFor="development"><input type="checkbox" id="development" name="development" value="development" />Development</label>
                <label htmlFor="management"><input type="checkbox" id="management" name="management" value="management" />Management</label>
                <label htmlFor="marketing"><input type="checkbox" id="marketing" name="marketing" value="marketing" />Marketing</label>
            </div>

            <div className={styles.textAreaContainer}>
                <label htmlFor="about" className={styles.aboutLabel}> About Me:</label>
                <textarea className={styles.aboutTextArea} name="about" id="about" ></textarea>
            </div>

            <div className={styles.submitContainer}>
                <button type="submit" >Submit</button>
            </div>


        </form>
    )
};

export default Form;