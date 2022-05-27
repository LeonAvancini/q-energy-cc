//Change saveUserInfo name
export const saveProjectInfo = (body) => {
  return {
    type: "SAVE_PROJECTS_INFO",
    payload: body,
  };
};
