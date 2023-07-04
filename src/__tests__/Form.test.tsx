import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Form from '../components/Form';

describe('Form', () => {

    beforeEach(() => {
        render(<Form />);
    });

    it('checks if form exists', () => {
        const formElement = screen.getByRole('form');
        expect(formElement).toBeInTheDocument();
    });

    it('checks for existence of first name field', () => {
        const inputElement = screen.getByRole('textbox', { name: /firstName/i });
        expect(inputElement).toBeInTheDocument();
    });

    it('checks for existence of dropdown field where the options are select gender (disabled), male, female, non-binary, and prefer not to say', () => {
        const selectElement = screen.getByRole('combobox', { name: /gender/i });

        const options = selectElement.querySelectorAll('option');
        expect(options[0]).toHaveTextContent(/Select gender/i);
        expect(options[0]).toBeDisabled();
        expect(options[1]).toHaveTextContent(/Male/i);
        expect(options[2]).toHaveTextContent(/Female/i);
        expect(options[3]).toHaveTextContent(/Non-binary/i);
        expect(options[4]).toHaveTextContent(/Prefer not to say/i);
    });

    it('checks for existence of 4 radio inputs where name="purpose" and the options are business, student, hobby, and exploring', () => {
        const radioInput1 = screen.getByLabelText(/business/i);
        const radioInput2 = screen.getByLabelText(/student/i);
        const radioInput3 = screen.getByLabelText(/hobby/i);
        const radioInput4 = screen.getByLabelText(/exploring/i);
        expect(radioInput1).toHaveAttribute('value', 'business');
        expect(radioInput1).toHaveAttribute('type', 'radio');
        expect(radioInput2).toHaveAttribute('value', 'student');
        expect(radioInput2).toHaveAttribute('type', 'radio');
        expect(radioInput3).toHaveAttribute('value', 'hobby');
        expect(radioInput3).toHaveAttribute('type', 'radio');
        expect(radioInput4).toHaveAttribute('value', 'exploring');
        expect(radioInput4).toHaveAttribute('type', 'radio');
    });

    it('checks for existence of 3 checkboxes where the options are development, management, and marketing', () => {
        const checkboxInput1 = screen.getByLabelText(/development/i);
        const checkboxInput2 = screen.getByLabelText(/management/i);
        const checkboxInput3 = screen.getByLabelText(/marketing/i);

        expect(checkboxInput1).toHaveAttribute('value', 'development');
        expect(checkboxInput2).toHaveAttribute('value', 'management');
        expect(checkboxInput3).toHaveAttribute('value', 'marketing');
    });

    it('checks for existence of an About Me text area field', () => {
        const textAreaField = screen.getByLabelText(/about me:/i);
        expect(textAreaField).toBeInTheDocument();
    });

    it('checks for existence of submit button', () => {
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toHaveTextContent(/submit/i);
    });
})