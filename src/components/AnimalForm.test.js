import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test("renders without errors", ()=> {
    render(<AnimalForm/>);
});

test("when user fills out all animal form inputs and submits, displays species", async () => {
    //Arrange: render AnimalForm
    render(<AnimalForm/>);

    const input = "feline";

    //Act: Do a complete submission.
    //  1. Select the species input.
    //  2. Type in our species.
    const species = screen.getByLabelText(/species:/i);
    userEvent.type(species, input);

    //  3. Select the age input.
    //  4. Type in our age.
    const age = screen.getByLabelText(/age:/i);
    userEvent.type(age, "3");

    //  5. Select our notes.
    //  6. Type in our notes.
    const notes = screen.getByLabelText(/notes:/i);
    userEvent.type(notes, "this is a good note.");

    //  7. click our submit button.
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert: 
    //Shows our species name in current animals list.

    // Sync solution
    // const output = screen.queryByText(input);

    // expect(output).toBeInTheDocument();
    // expect(output).toBeTruthy();
    // expect(output).not.toBeNull();

    // Find with Promise
    // const outputPromise = screen.findByText(input);
    // outputPromise.then(output=> {
    //     expect(output).toBeInTheDocument();
    //     expect(output).toBeTruthy();
    //     expect(output).not.toBeNull();
    // });

    // Find with async / await way
    // const output = await screen.findByText(input);
    // expect(output).toBeInTheDocument();
    // expect(output).toBeTruthy();
    // expect(output).not.toBeNull();

});