import { render, RenderResult } from "@testing-library/react";
import React from "react";
import SwipeActionButton from "./SwipeActionButton";

describe("<SwipeActionButton /> | Tests", () => {
  const exec = ({
    onClick,
    children,
    title
  }: {
    children: string;
    title?: string;
    onClick?: () => void;
  }): RenderResult => {
    return render(
      <SwipeActionButton onClick={onClick} title={title}>
        {children}
      </SwipeActionButton>
    );
  };
  it(`renders to the screen`, () => {
    const wrapper = exec({ children: 'button' });
    expect(wrapper).toBeTruthy();
  });
  it(`calles the onClick event when clicked or pressed`, async () => {
    const mockMethod = jest.fn();
    const wrapper = exec({ children: 'button', onClick: mockMethod, title: 'test' });
    const button = await wrapper.findByTitle('test');
    await button.click();
    expect(mockMethod).toHaveBeenCalled();
  });
  
});
