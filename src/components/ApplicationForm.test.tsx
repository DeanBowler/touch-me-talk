import '@testing-library/jest-dom';

import {
  act,
  fireEvent,
  logRoles,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApplicationForm } from './ApplicationForm';

it('should render warning when prince andrew applies', async () => {
  const onSubmit = jest.fn();

  render(<ApplicationForm onSubmit={onSubmit} />);

  fireEvent.click(screen.getByTestId('apply-submitbutton'));

  await waitFor(() =>
    expect(
      screen.getByText("We don't accept Prince Andrews here")
    ).toBeInTheDocument()
  );
});

it('should call onSubmit with form values when not prince andrew', async () => {
  const onSubmit = jest.fn();

  render(<ApplicationForm onSubmit={onSubmit} />);

  fireEvent.change(screen.getByTestId('apply-firstname'), {
    target: { value: 'Nandrew' }
  });

  fireEvent.change(screen.getByTestId('apply-purpose'), {
    target: { value: 'PizzaExpressParty' }
  });

  // screen.logTestingPlaygroundURL();

  fireEvent.click(screen.getByTestId('apply-princeandrewcheck'));

  logRoles(screen.getByTestId('apply-submitbutton'));

  // fireEvent.click(
  //   screen.getByRole('checkbox', {
  //     name: /poo/i
  //   })
  // );

  // fireEvent.submit(screen.getByTestId("apply-submitbutton"));

  fireEvent.submit(screen.getByRole('submit', { name: /apply/i }));

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith(
      {
        firstName: 'Nandrew',
        isNotPrinceAndrew: true,
        purpose: 'PizzaExpressParty'
      },
      expect.anything()
    )
  );
});
