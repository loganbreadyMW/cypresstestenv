import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const fetchTodoList = selector({
  key: "fetchTodoList",
  get: async ({ get }) => {
    const response = await fetch("http://localhost:3001/todos");
    const data = await response.json();
    return data;
  },
});

export const setFetchedTodoList = selector({
  key: "setFetchedTodoList",
  get: ({ get }) => {
    //set fetched todo list to todoListState
    const fetchedTodoList = get(fetchTodoList);
    return fetchedTodoList;
  },
});

export const todoListSelectors = {
  fetchTodoList,
  setFetchedTodoList,
};
