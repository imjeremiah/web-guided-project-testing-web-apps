import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders without error", ()=> {
    render(<App/>);
});

test("loads header on mount", ()=> {
    //Arrange: render App to the screen
    render(<App/>);

    //Act: find the header if it exists

    //Query: finds one element and returns null if not found
    const header = screen.queryByText(/add new animal/i);

    //Get: finds one element and fails the test if not found
    // const header = screen.getByText("Add New Animal");


    //Find: finds one element but returns a promise. Fail the test if not found
    // const header = screen.findByText("Add New Animal");
    
    //Assert: verify that the header exists
    // expect(header).toBeInTheDocument();
});