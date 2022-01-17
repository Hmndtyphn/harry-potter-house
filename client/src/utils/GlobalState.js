import React, { createContext, useContext } from 'react';
import { useWizardReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useWizardReducer({
    houses: [],
    currentHouse: '',
    subjects: [],
    currentSubject: '',
    wand: {}
  });
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };