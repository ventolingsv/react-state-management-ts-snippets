import { render, screen } from "@testing-library/react";
import { FunctionalState } from "./ComponentWithState";
import userEvent from '@testing-library/user-event'

describe('ComponentWithState', () => {
    test('has zero as default value', () => {
        render(<FunctionalState/>);
        const element = screen.getByText(/Functional/);

        expect(element).toHaveTextContent('Functional: count is 0');
    });

    test('changes value on click', () => {
        render(<FunctionalState/>);

        const element = screen.getByText(/Functional/);
        expect(element).toHaveTextContent('Functional: count is 0');

        userEvent.click(element);
        expect(element).toHaveTextContent('Functional: count is 1');
    });
});