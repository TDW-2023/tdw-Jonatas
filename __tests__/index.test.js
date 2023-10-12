import React from "react";
import { render, screen } from "@testing-library/react";
import Teste2 from "@/app/teste2/page";
import "@testing-library/jest-dom";

test("renders message correctly", () => {
  const messageText = "Hello, World!";
  render(<Teste2 text={messageText} />);

  // Assert that the message text is rendered
  const messageElement = screen.getByText(messageText);
  expect(messageElement).toBeInTheDocument();

  // You can add more assertions as needed
});
