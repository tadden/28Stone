import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../SearchBar';

describe('Test the button component', () => {
  test('button  should be rendered', () => {
    render(<SearchBar />);
    const TitleEl = screen.getByTestId('title-1');
    expect(TitleEl).toBeInTheDocument();
    expect(TitleEl).toHaveTextContent('Search a currency');
  });
});
