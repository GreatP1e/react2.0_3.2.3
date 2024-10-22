export interface LaunchType {
  launch_year: string;
  mission_name: string;
  flight_number: number;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch_small: string;
  };
}

export interface LaunchFullType extends LaunchType {
  links: {
    mission_patch_small: string;
    mission_patch: string;
  };
  details: string;
}
export interface State {
  list: LaunchType[] | [];
  launchFull: LaunchFullType | null;
  modalShow: boolean;
}

interface AddListAction {
  type: "add_list";
  payload: LaunchType[];
}

interface AddLaunch {
  type: "add_launch";
  payload: LaunchFullType;
}

interface ToggleModal {
  type: "modal";
}

export type ActionType = AddListAction | AddLaunch | ToggleModal;
