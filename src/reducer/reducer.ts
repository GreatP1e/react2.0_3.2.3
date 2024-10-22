import { ActionType, State } from "../types";

export const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "add_list": {
      return {
        ...state,
        list: action.payload,
      };
    }
    case "add_launch": {
      return {
        ...state,
        launchFull: action.payload,
      };
    }
    case "modal": {
      return {
        ...state,
        modalShow: !state.modalShow,
      };
    }
  }
};
