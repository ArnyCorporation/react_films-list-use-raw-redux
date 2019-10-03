import { createStore } from './redux';

const uuidv4 = require('uuid/v4');

const ACTION_TYPES = {
  ADD_NEW_FILM: 'FILM::ADD',
};

export const addNewFilm = film => ({
  type: ACTION_TYPES.ADD_NEW_FILM,
  payload: film,
});

const initialState = {
  films: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_FILM: {
      return {
        ...state,
        films: [...state.films, {
<<<<<<< HEAD
          id: uuidv4(),
||||||| merged common ancestors
          id: state.films.imdbID,
=======
          id: state.films.length + 1,
>>>>>>> bebf682e4b7d0a867a61f24b9a1f24483c3e54d7
          ...action.payload,
        }],
      };
    }

    default:
      return state;
  }
}

export const store = createStore(reducer);

// console.log('STATE', store.getState());
//
// const unsubscribe1 = store.subscribe((state) => {
//   console.log(state.films.map(({ title }) => title));
// });
//
// store.dispatch(addNewFilm({ title: 'Avengers' }));
//
// store.subscribe((state) => {
//   console.log(state.films);
// });
// unsubscribe1();
//
// store.dispatch(addNewFilm({ title: 'Spider-Man' }));
//
// console.log('STATE', store.getState());
