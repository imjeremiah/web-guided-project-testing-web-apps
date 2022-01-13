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
    
    //Act:
    //Assert:
});