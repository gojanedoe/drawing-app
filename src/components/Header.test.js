import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  test('renders "Draw This!" text', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const titleElement = screen.getByText('Draw This!');
    expect(titleElement).toBeInTheDocument();
  });
});
