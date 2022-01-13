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
    const header = screen.queryByText("Add New Animal");
    console.log(header);

    //Assert: verify that the header exists
});