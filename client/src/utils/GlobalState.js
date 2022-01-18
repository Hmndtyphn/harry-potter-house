import React, { createContext, useContext } from 'react';
import { useWizardReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useWizardReducer({
    wizard: '',
    houses: [],
    currentHouse: '',
    subjects: [],
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