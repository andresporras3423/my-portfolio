import { ADD_PROJECT, ADD_TOOL } from '../types/index';

const projectReducer = (state = {
  projects: [],
  tools: new Set(['All']),
}, action) => {
  switch (action.type) {
    case ADD_PROJECT: return {
      ...state,
      projects: (() => {
        const nProjects = [...state.projects];
        nProjects.push({
          name: action.name,
          description: action.description,
          github: action.github,
          live: action.live,
          url: action.url,
          tools: [...action.tools],
        });
        return nProjects;
      })(),
    };
    case ADD_TOOL: return {
      ...state,
      tools: (() => {
        const nTools = new Set(state.tools);
        nTools.add(action.tool);
        return nTools;
      })(),
    };
    default: return state;
  }
};

export default projectReducer;
