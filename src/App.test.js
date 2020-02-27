import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Profile from "./components/profile";
import Search from "./components/search";

jest.useFakeTimers();

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Rendering Profile", async () => {
  const fakeUser = {
    name: "Joni Baez",
    title: "32",
    image: "ea",
    quote: "123, Charming Avenue"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  await act(async () => {
    render(<Profile client={fakeUser} />, container);
  });

  expect(container.querySelector(".Profile__name").textContent).toBe(
    fakeUser.name
  );
  expect(container.querySelector(".Profile__title").textContent).toBe(
    fakeUser.title
  );

  global.fetch.mockRestore();
});

it("Search when asked, checks for debounce", () => {
  const handleFilter = jest.fn();
  act(() => {
    render(<Search callback={handleFilter} />, container);
  });

  const SearchBar = document.querySelector(".Search__input");
  act(() => {
    fireEvent.keyDown(SearchBar, { key: "A", code: 65, charCode: 65 });
    fireEvent.keyDown(SearchBar, { key: "A", code: 65, charCode: 65 });
    fireEvent.keyDown(SearchBar, { key: "A", code: 65, charCode: 65 });
    fireEvent.keyDown(SearchBar, { key: "A", code: 65, charCode: 65 });
  });

  //expected twice, once for render, and once for the start of the debounce
  expect(setTimeout).toHaveBeenCalledTimes(2);
  expect(handleFilter).toHaveBeenCalledTimes(1);
});
