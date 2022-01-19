import React, { createContext, useContext } from 'react';
import { useWizardReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useWizardReducer({
    // Add to state: questions answered, user answers
    // after login, wizard changes to name of logged in user
    me: {
      house: "Hufflepuff"
    },

    houses: [],
    // currentHouse attached to QUERY_ME
    currentHouse: '',

    subjects: [],
    // When click on great hall door, get currentSubject from params
    currentSubject: '',
    questions: []
  });
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };