import { create } from 'zustand';

export const useBmiStore = create((set) => ({
  currentResult: null,
  history: [],

  addResult: (newResult) => set((state) => {
    const timestamp = new Date().toLocaleString();
    const item = { ...newResult, timestamp };
    const updatedHistory = [...state.history, item];
    localStorage.setItem('bmiHistory', JSON.stringify(updatedHistory)); // JSON. stringify() is used to convert a JavaScript object into a JSON 
    return { currentResult: newResult, history: updatedHistory };   //you return an object with the new state you want the store to have.
    //In Zustand, whatever object you return from set becomes the new state (or partial state).
  }),

  clearHistory: () => {
    localStorage.removeItem('bmiHistory');
    set({ history: [] });    // Pass it an object directly:
  },

  loadHistory: () => {
    const saved = localStorage.getItem('bmiHistory');
    if (saved) {
      set({ history: JSON.parse(saved) }); //JSON. parse() is used to convert JSON data into a JavaScript object
    }
  }
}));

/* set can be used in two ways in Zustand:
1️⃣ Pass it an object directly:
set({ history: [] });
This directly updates the state with { history: [] }.

2️⃣ Pass it a function that receives the current state and returns an object:

set((state) => {
  // do something
  return { history: [] };
})
When you use the function form, you must return the new (or updated) part of the state.
*/
