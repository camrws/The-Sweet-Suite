import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'
import Login from './pages/Login'

afterEach(cleanup)
 
it('should take a snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()
});

// it('should be enabled', () => {
//   const { getByTestId } = render(<Login />);
//   expect(getByTestId('login-button')).not.toHaveAttribute('disabled');
// });