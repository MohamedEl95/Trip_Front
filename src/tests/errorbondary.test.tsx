import {  render } from '@testing-library/react';
import ErrorBoundary from '../components/atoms/errorBoundary';
import '@testing-library/jest-dom';

// Mock component that throws an error
const MockErrorComponent = () => {
  throw new Error('Test error');
};

test('ErrorBoundary renders error message', () => {
  const { getByTestId } = render(
    <ErrorBoundary>
      <MockErrorComponent />
    </ErrorBoundary>
  );
  const errortext = getByTestId('texterror') as HTMLInputElement;

  // Check if the error message is rendered
  expect(errortext).toBeInTheDocument();
});
