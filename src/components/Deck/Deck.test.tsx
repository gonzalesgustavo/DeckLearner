import { render, RenderResult } from "@testing-library/react";
import handleDotText from "../../utils/TextMutator";
import Deck from "./Deck";

describe("<Deck /> | Tests", () => {
    const exec = (title: string): RenderResult => {
        return render(<Deck title={title} />);
    }
  it(`renders to the screen`, () => {
      const wrapper = exec('german');
    expect(wrapper).toBeTruthy();
  });
  it(`renders a title to the screen`, async () => {
    const testTitle = 'German';
    const wrapper = exec(testTitle);
    const title = wrapper.queryAllByTestId('label');
    expect(title[0].innerHTML).toBe(testTitle);
  });
  it(`cuts the title off with ... if over 10 chars`, () => {
    const testTitle = 'German learning cards';  
    const wrapper = exec(testTitle);
    const title = wrapper.queryAllByTestId('label');
    expect(title[0].innerHTML).toBe(handleDotText(testTitle, 15));
  });
});
