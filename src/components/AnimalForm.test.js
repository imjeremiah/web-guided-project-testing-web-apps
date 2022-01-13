import React from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';

test("renders without errors", ()=> {
    render(<AnimalForm/>);
});