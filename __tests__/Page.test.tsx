import Page from "@/app/home/page";

import { render, screen } from "@testing-library/react";

it("should have Rating test", () => {
  render(<Page />);
  const myElement = screen.getByText("Page");

  expect(myElement).toBeInTheDocument();
});
