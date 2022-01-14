import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test('Renders without error', () => {
    render(<AnimalForm />);
})

test('Displays species if all inputs are filled an submitted', async () => {

    // ARRANGE: Render our component
    render(<AnimalForm />);

    // ACT: Fill out and submit our form
    //   1. Focus on species input.
    const speciesInput = screen.getByPlaceholderText(/species/i);

    //   2. Type in a species.
    userEvent.type(speciesInput, 'feline');

    //   3. Focus on are input.
    const ageInput = screen.getByPlaceholderText(/age/i);

    //   4. Type in age.
    userEvent.type(ageInput, '33');

    //   5. Focus on notes input.
    const notesInput = screen.getByPlaceholderText(/notes/i); 

    //   6. Type in notes
    userEvent.type(notesInput, 'nice coat.');

    //   7. Select the button.
    const button = screen.getByRole("button");

    //   8. Click on the button.
    userEvent.click(button);

    // ASSERT
    // Find species text on page and verify that it exists

    // SYNC:
    // const speciesFeedback = screen.queryByText(/feline/i);
    // expect(speciesFeedback).toBeInTheDocument();

    // PROMISE:
    // const speciesFeedbackPromise = screen.findByText(/feline/i);
    // speciesFeedbackPromise.then(speciesFeedback => {
    //     expect(speciesFeedback).toBeInTheDocument();
    // })

    // WAITFOR: (If async/await not available)
    // await waitFor(() => {
    //     const speciesFeedback = screen.queryByText(/feline/i);
    //     expect(speciesFeedback).toBeInTheDocument();
    // })

    // ASYNC / AWAIT:
    const speciesFeedback = await screen.queryByText(/feline/i);
    expect(speciesFeedback).toBeInTheDocument();


})
