import { render, RenderResult } from "@testing-library/react";
import React, { ReactNode } from "react";
import Modal from "./Model";

describe("<Modal /> | Tests", () => {
  const exec = ({
    onClose,
    actions,
    children,
  }: {
    children: ReactNode;
    onClose?: () => void;
    actions?: React.ReactNodeArray;
  }): RenderResult => {
    return render(
      <Modal onClose={onClose} actions={actions}>
        {children}
      </Modal>
    );
  };
  it(`renders to the screen`, () => {
    const wrapper = exec({ children: <p>hello</p> });
    expect(wrapper).toBeTruthy();
  });
  it(`renders a title to the screen`, async () => {
    const testInput = "Test";
    const wrapper = exec({ children: <h4>{testInput}</h4> });
    const title = await wrapper.container.querySelector("h4");
    expect(title!.innerHTML).toBe(testInput);
  });
  it(`fires close method on close button pressed`, async () => {
    const closeMethodMock = jest.fn();
    const wrapper = exec({
      children: <h4>toots</h4>,
      onClose: closeMethodMock,
    });
    const closeBtn = await wrapper.findByTitle("close button");
    await closeBtn.click();
    expect(closeMethodMock).toHaveBeenCalled();
  });
  it(`displays action buttons`, async () => {
    const actions = [<button title="hello test">hello</button>];
    const wrapper = exec({
      actions,
      children: <h4>toots</h4>,
    });
    const actionBtn = await wrapper.findByTitle("hello test");
    expect(actionBtn).toBeDefined();
    expect(actionBtn.innerHTML).toBe("hello");
  });
  it(`displays action buttons fire events`, async () => {
    const mockEvent = jest.fn();
    const actions = [
      <button title="hello test" onClick={mockEvent}>
        hello
      </button>,
    ];
    const wrapper = exec({
      actions,
      children: <h4>toots</h4>,
    });
    const actionBtn = await wrapper.findByTitle("hello test");
    expect(actionBtn).toBeDefined();
    await actionBtn.click();

    expect(mockEvent).toHaveBeenCalled();
  });
});
