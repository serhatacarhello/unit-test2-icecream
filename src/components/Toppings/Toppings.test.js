import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("displays toppings from API", async () => {
  render(<Toppings />);
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping/i,
  });
  expect(toppingImages).toHaveLength(6);
});

test("updates total when topping is checked and updates total when topping is unchecked", async () => {
  render(<Toppings />);

  const user = userEvent.setup();
  const total = screen.getByText(/Total for toppings/i, { exact: false });
  const cherryCheckBox = await screen.findByRole("checkbox", {
    name: /cherries/i,
  });

  const mochiCheckBox = await screen.findByRole("checkbox", {
    name: /mochi/i,
  });

  //add topping
  await user.click(cherryCheckBox);
  expect(cherryCheckBox).toBeChecked();
  expect(total).toHaveTextContent("1");

  //add topping
  await user.click(mochiCheckBox);
  expect(mochiCheckBox).toBeChecked();
  expect(total).toHaveTextContent("2");

  //remove topping
  await user.click(cherryCheckBox);
  expect(cherryCheckBox).not.toBeChecked();
  expect(total).toHaveTextContent("1");

  //remove topping
  await user.click(mochiCheckBox);
  expect(mochiCheckBox).not.toBeChecked();
  expect(total).toHaveTextContent("0");
});

/*
describe("Toppings", () => {
  it("displays toppings from API", async () => {
    render(<Toppings />);

    const toppingImages = await screen.findAllByRole("img", {
      name: /topping/i,
    });
    expect(toppingImages).toHaveLength(6);
  });

  it("updates total when topping is checked", async () => {
    render(<Toppings />);

    const user = userEvent.setup();
    const totalElement = screen.getByText(/total/i);

    const cherryCheckbox = await screen.findByRole("checkbox", {
      name: /cherries/i,
    });

    await user.click(cherryCheckbox);
    expect(cherryCheckbox).toBeChecked();
    expect(totalElement).toHaveTextContent("1");
  });

  it("updates total when topping is unchecked", async () => {
    const user = userEvent.setup();
    const total = screen.getByText(/total/i);

    const cherryCheckBox = await screen.findByRole("checkbox", {
      name: /cherries/i,
    });
    const mochiCheckBox = await screen.findByRole("checkbox", {
      name: /mochi/i,
    });
    //remove topping
    await user.click(cherryCheckBox);
    expect(cherryCheckBox).not.toBeChecked();
    expect(total).toHaveTextContent("1");
    //remove topping
    await user.click(mochiCheckBox);
    expect(mochiCheckBox).not.toBeChecked();
    expect(total).toHaveTextContent("0");
  });
});
*/
