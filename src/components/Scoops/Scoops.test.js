import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import Scoops from ".";

/*
!matchers
? command[All]ByMatchers

command> get | find | query

get standby

find async await

query async or update

*/

test("Tests if API data is retrieved and displayed in the document.", async () => {
  render(<Scoops />);

  const imgElements = await screen.findAllByRole("img", { name: /scoop/ });

  expect(imgElements).toHaveLength(4);
});

describe("Adds and removes scoops and checks total", () => {
  test("if add scoop and if total increase", async () => {
    render(<Scoops />);

    const total = screen.getByText("Total", { exact: false });

    const addBtns = await screen.findAllByRole("button", { name: /add/i });

    //add scoop and check total
    fireEvent.click(addBtns[1]);
    await waitFor(() => {
      expect(total).toHaveTextContent("2");
    });

    // fireEvent.dblClick(addBtns[2]);
    // await waitFor(() => {
    //   expect(total).toHaveTextContent("6");
    // });
  });
});

test("resets button and checks total", async () => {
  render(<Scoops />);

  const total = screen.getByText(/Total/i);
  const resetBtns = await screen.findAllByRole("button", { name: /reset/i });
  const addBtns = await screen.findAllByRole("button", { name: /add/i });

  //add 2 scoops
  fireEvent.click(addBtns[2]);
  expect(total).toHaveTextContent("2");
  fireEvent.click(addBtns[3]);
  fireEvent.click(addBtns[3]);

  expect(screen.getByText(/Total/i)).toHaveTextContent("6");

  fireEvent.click(resetBtns[2]);
  expect(total).toHaveTextContent("4");

  fireEvent.click(resetBtns[3]);
  expect(total).toHaveTextContent("0");
});
