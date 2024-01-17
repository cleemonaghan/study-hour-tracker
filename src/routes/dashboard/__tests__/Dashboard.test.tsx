import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

test("renders page", () => {
  render(<Dashboard />);
  const element = screen.getByText(/Dashboard/i);
  expect(element).toBeInTheDocument();
});

test("renders data grid", () => {
  render(<Dashboard />);
  expect(screen.getByText(/Current Chapter/i)).toBeInTheDocument();
  expect(screen.getByText(/Hours This Week/i)).toBeInTheDocument();
  expect(screen.getByText(/Total Hours/i)).toBeInTheDocument();
  expect(screen.getByText(/Days Until Exam/i)).toBeInTheDocument();
  expect(screen.getByTestId("study-hours-data-grid")).toBeInTheDocument();
  expect(screen.getByTestId("study-hours-graph")).toBeInTheDocument();
});
