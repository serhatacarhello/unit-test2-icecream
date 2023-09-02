import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./index";
import userEvent from "@testing-library/user-event";

test("tests if checkbox is unchecked and button is disabled", async () => {
  render(<Form />);

  const orderBtn = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  expect(orderBtn).toBeDisabled();
  expect(checkbox).not.toBeChecked();

  //click for first time
  userEvent.click(checkbox);

  await waitFor(() => {
    expect(orderBtn).toBeEnabled();
  });

  //click for second time
  userEvent.click(checkbox);

  await waitFor(() => {
    expect(orderBtn).toBeDisabled();
  });
  await waitFor(() => {
    expect(checkbox).not.toBeChecked();
  });
});

test("tests if order button hover shows notification", async () => {
  render(<Form />);

  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  await userEvent.hover(button);

  await waitFor(() => {
    const notification = screen.getByText("This is an alert", { exact: false });
    expect(notification).toBeVisible();
  });

  await userEvent.unhover(button);

  await waitFor(() => {
    const notification = screen.getByText("This is an alert", { exact: false });
    expect(notification).not.toBeVisible();
  });
});
