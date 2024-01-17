import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Root } from "../Root";
import { act } from "react-dom/test-utils";

test("redirects when navbar item clicked", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Root />
    </MemoryRouter>
  );

  const home = screen.getByText(/learn react/i);
  expect(home).toBeInTheDocument();

  const redirect = screen.getByText(/Page 1/i);
  expect(redirect).toBeInTheDocument();
  await act(async () => {
    redirect.click();
  });

  const page1 = screen.getByTestId(/page1/i);
  expect(page1).toBeInTheDocument();
});

test("redirects when landing on a bad page", () => {
  const badRoute = "/some/bad/route";

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <Root />
    </MemoryRouter>
  );

  // verify navigation to home page
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
