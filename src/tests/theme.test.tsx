import '@testing-library/jest-dom'

import { render, fireEvent,screen } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../context/theme';
import BoxAtom from '../components/atoms/box';

describe('ThemeProvider', () => {
  it('should provide theme context to components', () => {
    const TestComponent = () => {
      const { isDarkMode } = useTheme();
      return <div>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</div>;
    };

    const { getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByText('Light Mode')).toBeInTheDocument();
  });

  it('should toggle theme mode', () => {
    const TestComponent = () => {
      const { isDarkMode, toggleTheme } = useTheme();
      return (
        <button onClick={toggleTheme}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</button>
      );
    };

    const { getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(getByText('Light Mode'));
    expect(getByText('Dark Mode')).toBeInTheDocument();

    fireEvent.click(getByText('Dark Mode'));
    expect(getByText('Light Mode')).toBeInTheDocument();
  });
  it('should update theme based on isDarkMode', () => {
    const TestComponent = () => {
        const { toggleTheme } = useTheme();

      return <BoxAtom data-testid="theme-color" sx={{color:"info.100"}}>
                        <button onClick={toggleTheme}>{'Toggle Theme'}</button>

      </BoxAtom>;
    };

    const { getByTestId } = render(
      <ThemeProvider>

        <TestComponent />
      </ThemeProvider>
    );

    const themeColorDiv = getByTestId('theme-color');
    expect(themeColorDiv).toHaveStyle('color: #000000');

    fireEvent.click(screen.getByText('Toggle Theme'));

    expect(themeColorDiv).toHaveStyle('color: #ffffff');
  });

});
