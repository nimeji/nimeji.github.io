import { render, screen } from "@testing-library/react"
import Feature from "./Feature";

it('renders the correct titel', () => {
  render(<Feature title="Test 123"></Feature>);

  expect(screen.getByRole('heading')).toHaveTextContent('Test 123');
});

it('renders its children', () => {
  render(<Feature>test 123</Feature>);

  expect(screen.getByText('test 123')).toBeInTheDocument();
});

it('renders the correct image', () => {
  render(<Feature img="test/123.jpg" />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'test/123.jpg');
});