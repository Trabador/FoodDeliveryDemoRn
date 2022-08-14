import create from 'zustand';

const useTestStore = create(set => ({
  objectTest: [],
  addNewObject: () =>
    set(state => ({
      objectTest: [
        ...state.objectTest,
        {content: Math.floor(Math.random() * 100)},
      ],
    })),
  removeObject: () =>
    set(state => ({objectTest: state.objectTest.slice(0, -1)})),
}));

export const selectTotal = state =>
  state.objectTest.reduce((total, item) => (total += item.content), 0);

export const selectSize = state => state.objectTest.length;

export default useTestStore;
