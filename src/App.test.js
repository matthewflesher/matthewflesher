import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PipeAnimation from './components/PipeAnimation/PipeAnimation';

test('nerd face toggles visible on click (touch device)', async () => {
  // Simulate touch device
  Object.defineProperty(window, 'ontouchstart', {
    value: true,
    configurable: true,
  });

  const { container } = render(<PipeAnimation />);
  const nerdZone = container.querySelector('.nerd-hover-zone');

  expect(nerdZone.classList.contains('active')).toBe(false);

  await userEvent.click(nerdZone);
  expect(nerdZone.classList.contains('active')).toBe(true);

  await userEvent.click(document.body); // Simulate outside click
  expect(nerdZone.classList.contains('active')).toBe(false);
});








