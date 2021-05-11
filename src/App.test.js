import { render,cleanup, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders Simple Counter', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple Counter/i);
  expect(linkElement).toBeInTheDocument();
});

afterEach(cleanup);
  
it('increments counter', () => {
  const { getByTestId } = render(<App />); 
  
  fireEvent.click(getByTestId('button-inc'))

  expect(getByTestId('counter')).toHaveTextContent('1')
});
