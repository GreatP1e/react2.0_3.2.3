import { screen, cleanup, fireEvent } from "@testing-library/react";
import { render } from "./test/utils";
import App from "./App";
// @ts-ignore
import { server } from "./test/moks/server.js";
import { it, describe, beforeEach, afterAll, afterEach, expect } from "vitest";

describe("should render App", () => {
  beforeEach(() => {
    server.listen();
  });
  afterEach(() => {
    server.listen();
  });
  afterAll(() => {
    cleanup();
  });
  it("should render App", async () => {
    render(<App />);
    const launchCards = await screen.findAllByTestId("launch-card");
    expect(launchCards.length).toBe(3);
  });

  it("should open modal", async () => {
    render(<App />);
    const [cardButton] = await screen.findAllByText(/See more/i);
    fireEvent.click(cardButton);
    await screen.findByText(/Details/i);
  });

  it("should close modal on click to overlay", async () => {
    render(<App />);
    const [cardButton] = await screen.findAllByText(/See more/i);
    fireEvent.click(cardButton);
    const overlay = await screen.findByTestId("modal");
    fireEvent.click(overlay);
    expect(overlay).toHaveProperty("style.display", "none");
  });
});
