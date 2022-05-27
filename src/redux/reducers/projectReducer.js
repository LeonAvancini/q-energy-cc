import data from "../../data-mockup.json";

const initialState = data.projects;

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_PROJECTS_INFO":
      const value = action.payload;
      return value;

    default:
      return state;
  }
};

export default projectReducer;
