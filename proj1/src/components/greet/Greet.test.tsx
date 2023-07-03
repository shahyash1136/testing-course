import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
*/
describe('Greet', () => {
    it('should render correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument();
    });

    describe('Nexted', () => {
        it('should render with a name', () => {
            render(<Greet name="Yash" />)
            const textElement = screen.getByText('Hello Yash');
            expect(textElement).toBeInTheDocument();
        })
    })

})



