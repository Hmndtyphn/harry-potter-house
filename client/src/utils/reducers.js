import { useReducer } from "react";
import {
  UPDATE_HOUSES,
  UPDATE_CURRENT_HOUSE,
  UPDATE_SUBJECTS,
  UPDATE_WIZARD
} from './actions';

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_WIZARD:
      return {
        ...state,
        me: {...action.me}
      };

    case UPDATE_SUBJECTS:
      return {
        ...state,
        subjects: [...action.subjects]
      };

    // case UPDATE_CURRENT_HOUSE:
    //   return {
    //     ...state,
    //     currentHouse: {...action.currentHouse}
    //   };

    case UPDATE_HOUSES:
      return {
        ...state
      }

    default:
      return state;
  }
};

export function useWizardReducer(initialState) {
  return useReducer(reducer, initialState);
}