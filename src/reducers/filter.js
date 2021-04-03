import {
  CHANGE_TOOL_FILTER,
} from '../types/index';

const filterReducer = (state = {
  toolFilter: 'All',
}, action) => {
  switch (action.type) {
    case CHANGE_TOOL_FILTER: return {
      ...state,
      toolFilter: action.toolFilter,
    };
    default: return state;
  }
};

export default filterReducer;
