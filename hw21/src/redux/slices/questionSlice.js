import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    questions: [
      {
        id: 1,
        text: "Любите ли вы React?",
        answers: ["Да", "Нет"],
        selected: null,
      },
      {
        id: 2,
        text: "Использовали ли вы Redux?",
        answers: ["Да", "Нет"],
        selected: null,
      },
    ],
    submitted: false,
  },
  reducers: {
    answerQuestion: (state, action) => {
      const { id, answer } = action.payload;
      const question = state.questions.find((q) => q.id === id);
      if (question) {
        question.selected = answer;
      }
    },
    submitQuestion: (state) => {
      state.submitted = true;
    },
  },
});

export const { answerQuestion, submitQuestion } = questionSlice.actions;
export default questionSlice.reducer;
