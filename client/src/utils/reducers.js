import { useReducer } from "react";
import {
  UPDATE_HOUSE,
  UPDATE_SUBJECTS
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SUBJECTS:
      return {
        ...state,
        subjects: [...action.subjects]
      };

    case UPDATE_HOUSE:
      return {
        ...state,
        wand: [...action.wand]
      }

    default:
      return state;
  }
};

export function useWizardReducer(initialState) {
  return useReducer(reducer, initialState);
}