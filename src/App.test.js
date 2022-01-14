import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without errors', () => {
    render(<App />);
});

test('When component mounts, ADD NEW ANIMAL exists.', () => {
    // ARRANGE: Display App Component
    render(<App />);

    // ACT: Find the element with ADD NEW ANIMAL as text

    // getBy - finds one item. Test automatically fails if item is not found.
    // const header = screen.getByText(/add new animal/i);

    // findBy - finds one item. Returns a promise if an async call was made. Test automatically fails if item is not found.
    // const header = screen.findByText(/add new animal/i);

    // queryAllBy - finds multiple items. Returns null if items are not found.
    // const header = screen.queryByText(/add new animal/i);

    // queryBy - finds one item. Returns null if item is not found.
    // const header = screen.queryByText(/add new animal/i);

    const header = screen.queryByTestId(/header/i);

    // ASSERT: Verify that element exists on the page.
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/add new animal/i);
    expect(header).toBeTruthy();
});

