import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Form from '../components/Form';

describe('Form', () => {

    let container: HTMLElement;
    const submitHandler = jest.fn(); // create a mock function for the submit event

    beforeAll(() => {
        container = render(<Form onSubmit={submitHandler} />).container;
    })

    it('checks if form exists and that it has an onSubmit attribute', () => {
        const formElement = container.querySelector('form');
        expect(formElement).toBeInTheDocument();
        expect(formElement).toHaveAttribute('onSubmit');
    });

    it('checks for existence of first name field', () => {
        const inputElement = container.querySelector('input[name="firstName"]');
        expect(inputElement).toBeInTheDocument();
    });

    it('checks for existence of dropdown field where the options are select gender (disabled), male, female, non-binary, and prefer not to say', () => {
        const selectElement = container.querySelector('select[name="gender"]')!;

        const options = selectElement.querySelectorAll('option');
        expect(options[0]).toHaveTextContent(/Select gender/i);
        expect(options[0]).toBeDisabled();
        expect(options[1]).toHaveTextContent(/Male/i);
        expect(options[2]).toHaveTextContent(/Female/i);
        expect(options[3]).toHaveTextContent(/Non-binary/i);
        expect(options[4]).toHaveTextContent(/Prefer not to say/i);
    });

    it('checks for existence of 4 radio inputs where name="purpose" and the options are business, student, hobby, and exploring', () => {
        const radioInputs = container.querySelectorAll('input[type="radio"][name="purpose"]');
        expect(radioInputs).toHaveLength(4);

        expect(radioInputs[0]).toHaveAttribute('value', 'business');
        expect(radioInputs[1]).toHaveAttribute('value', 'student');
        expect(radioInputs[2]).toHaveAttribute('value', 'hobby');
        expect(radioInputs[3]).toHaveAttribute('value', 'exploring');
    });

    it('checks for existence of 3 checkboxes where the options are development, management, and marketing', () => {
        const checkboxInputs = container.querySelectorAll('input[type="checkbox"]');
        expect(checkboxInputs).tohaveLength(3);

        expect(checkboxInputs[0]).toHaveAttribute('value', /development/i);
        expect(checkboxInputs[1]).toHaveAttribute('value', /management/i);
        expect(checkboxInputs[2]).toHaveAttribute('value', /marketing/i);
    });

    it('checks for existence of an About Me text area field', () => {
        const textAreaField = container.querySelector('textarea[name="about"]');
        expect(textAreaField).toBeInTheDocument();
    });

    it('checks for existence of submit button', () => {
        const submitButton = container.querySelector('button[type="submit"]');
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveTextContent(/submit/i);
    });
})