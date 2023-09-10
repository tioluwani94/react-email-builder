export interface CompType {
  [key: string]: { comp: any; props: any; children: any };
}

export enum ReducerKind {
  SET_COMPONENT_TO_EDIT = "SET_COMPONENT_TO_EDIT",
  UNSET_COMPONENT_TO_EDIT = "UNSET_COMPONENT_TO_EDIT",
  ADD_COMPONENT = "ADD_COMPONENT",
  REMOVE_COMPONENT = "REMOVE_COMPONENT",
  UPDATE_COMPONENT = "UPDATE_COMPONENT",
}

export interface ReducerAction {
  type: ReducerKind;
  payload: any;
}

export interface ReducerState {
  tree?: any[];
  componentToEdit?: { type: string; component: CompType };
}
