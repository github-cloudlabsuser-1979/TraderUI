import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomePopup from './WelcomePopup';

const WELCOME_TEXT = 'The DevSecOps Day 2 Hackathon';

test('renders WelcomePopup component', () => {
  render(<WelcomePopup />);
  const welcomeElement = screen.getByText(new RegExp(WELCOME_TEXT, 'i'));
  expect(welcomeElement).toBeInTheDocument();
});