import { render, screen } from "@testing-library/react";
import Layout from "../Layout";
import { MemoryRouter } from "react-router-dom";

test("renders footer", () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/©️ Colin Monaghan 2024/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders navbar", () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  let element = screen.getByText(/Study Hour Tracker/i);
  expect(element).toBeInTheDocument();

  element = screen.getByText(/Home/i);
  expect(element).toBeInTheDocument();

  element = screen.getByText(/Page 1/i);
  expect(element).toBeInTheDocument();
});
