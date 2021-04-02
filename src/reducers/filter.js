import {
  CHANGE_NAME_FILTER,
  CHANGE_NAME_TYPE_FILTER,
  CHANGE_TOOL_FILTER,
} from '../types/index';

const filterReducer = (state = {
  nameFilter: '',
  nameTypeFilter: 0,
  toolFilter: 'All',
}, action) => {
  switch (action.type) {
    case CHANGE_NAME_FILTER: return {
      ...state,
      nameFilter: action.nameFilter,
    };
    case CHANGE_NAME_TYPE_FILTER: return {
      ...state,
      nameTypeFilter: action.nameTypeFilter,
    };
    case CHANGE_TOOL_FILTER: return {
      ...state,
      toolFilter: action.toolFilter,
    };
    default: return state;
  }
};

export default filterReducer;
