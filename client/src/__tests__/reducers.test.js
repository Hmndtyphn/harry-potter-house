import { UPDATE_HOUSE,
UPDATE_SUBJECTS,
UPDATE_WIZARD} from '../utils/actions';
import { reducer } from '../utils/reducers';

const initialState = {
  me: {},
  houses: [], 
  currentHouse: 'Hufflepuff'
};

test('UPDATE_WIZARD', () => {
  let newState = reducer(initialState, {
    type: UPDATE_WIZARD,
    me: {
      username: 'Sally Potter',
      house: []
    }
  });

  expect(newState.me.username).toBe("Sally Potter");
  expect(initialState.me.username).toBe('');

})