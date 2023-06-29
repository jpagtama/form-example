import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
    it('checks if text exists', () => {
        render(<App />);
        const text = screen.getByText(/Form Example/i);
        expect(text).toBeDefined();
    });
});