import { createReducer } from '../../app/common/util/reducerUtil';
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS
} from './eventConstants';

const initialState = [];

// return our 2 events, add to this array, take a copy of our state
// add event that were creating, Object.assign()  payload.event
export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

// event that matches our current ID
// use Object.assign to replace the one were updating
export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};

// doesnt match our ID
export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export const fetchEvents = (state, payload) => {
  return payload.events
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
});
