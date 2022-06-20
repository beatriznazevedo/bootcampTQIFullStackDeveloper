import { fireEvent, render, screen } from '@testing-library/react';
import { Quotes } from './quotes';
import React from 'react';

let quote = 'test quote';
let speaker = 'radom speaker';

test('render received quote, speaker and a button', () => {
  render(<Quotes quote={quote} speaker={speaker} />);

  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(`- ${speaker}`);
  const buttonEl = screen.getByText('button');

  expect(quoteEl).toBeInTheDocument();
  expect(speakerEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});

test('calls a callback when button is pressed', () => {
  const cb = jest.fn();

  render(<Quotes quote={quote} speaker={speaker} onUpdate={cb} />);
  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);
  expect(cb).toHaveBeenCalledTimes(1);
});