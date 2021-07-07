import { render, RenderResult } from "@testing-library/react";
import DeckBar from "./DeckBar";

describe("<DeckBar /> | Tests", () => {
    const exec = (): RenderResult => {
        return render(<DeckBar  />);
    }
  it(`renders to the screen`, () => {
      const wrapper = exec();
    expect(wrapper).toBeTruthy();
  });
  it(`renders a title to the screen`, async () => {
    const wrapper = exec();
    const title = await wrapper.container.querySelector('h4');
    expect(title!.innerHTML).toBe('Current Decks');
  });
});