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
    //Assert: verify that the header exists
});