import React from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test("renders without errors", ()=> {
    render(<AnimalForm/>);
});

test("when user fills out all animal form inputs and submits, displays species", () => {
    //Arrange: render AnimalForm
    render(<AnimalForm/>);

    //Act: Do a complete submission.
    //  1. Select the species input.
    const species = screen.getByLabelText(/species:/i);
    console.log(species);

    //  2. Type in our species.
    //  3. Select the age input.
    //  4. Type in our age.
    //  5. Select our notes.
    //  6. Type in our notes.
    //  7. click our submit button.

    //Assert: 
    //Shows our species name in current animals list.
});