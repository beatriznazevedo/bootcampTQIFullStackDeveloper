import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

const response = { speaker: 'Speaker', quote: 'test quote' };

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(Response));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a button and quote', () => {
  render(<App />);

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

  const imageEl = screen.getByRole('img');
  expect(imageEl).toBeInTheDocument();

  const textEl = screen.getByText(/Speaker/);
  expect(textEl).toBeInTheDocument();
});

test('calls api on button click and update its text', () => {
  render(<App />);

  const buttonEl = screen.getAllByRole('button');

  fireEvent.click(buttonEl);

  const quoteEl = async () => {
    await screen.findByText(response.quote);
  };

  expect(quoteEl).toBeInTheDocument();
});