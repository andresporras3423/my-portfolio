import {
  ADD_TOOL,
  ADD_PROJECT,
  CHANGE_NAME_FILTER,
  CHANGE_NAME_TYPE_FILTER,
  CHANGE_TOOL_FILTER,
} from '../types/index';

export const addProject = (nProject) => ({
  type: ADD_PROJECT,
  name: nProject.name,
  description: nProject.description,
  github: nProject.github,
  live: nProject.live,
  url: nProject.url,
  tools: nProject.tools,
});

export const addTool = (nTool) => ({
  type: ADD_TOOL,
  tool: nTool,
});

export const changeNameFilter = (nameFilter) => ({
  type: CHANGE_NAME_FILTER,
  nameFilter,
});

export const changeNameTypeFilter = (nameTypeFilter) => ({
  type: CHANGE_NAME_TYPE_FILTER,
  nameTypeFilter,
});

export const changeToolFilter = (toolFilter) => ({
  type: CHANGE_TOOL_FILTER,
  toolFilter,
});

export default {
  addProject, addTool, changeNameFilter, changeNameTypeFilter, changeToolFilter,
};
