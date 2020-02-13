import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('firstName inputs are rendered', () => {
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/First Name*/i);
    // getByLabelText(/age/i);
    // getByLabelText(/notes/i);
  });