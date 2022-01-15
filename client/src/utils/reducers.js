import { useReducer } from "react";
import {
  UPDATE_SUBJECTS
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SUBJECTS:
      return {
        ...state,
        subjects: [...action.subjects]
      };
  }
};

export function useWizardReducer(initialState) {
  return useReducer(reducer, initialState);
}