import { UPDATE_HOUSE,
UPDATE_SUBJECTS} from '../utils/actions';

const initialState = {
  wand: {},
  house: 'Gryffindor',
};

test('UPDATE_HOUSE', () => {
  let newState = reducer(initialState, {
    type: UPDATE_HOUSE,
  })
})