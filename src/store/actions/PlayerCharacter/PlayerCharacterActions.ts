import { AppActions } from "../AllActionTypesAggregated";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME, PlayerCharacterActionTypes } from "./PlayerCharacterActionTypes";
import { ActionCreator, Dispatch } from "redux";

export const ChangeCharacterName: ActionCreator<PlayerCharacterActionTypes> = (name: string): PlayerCharacterActionTypes => ({  
    type: CHANGE_CHARACTER_NAME, 
    name 
});

export const ChangePlayerName: ActionCreator<PlayerCharacterActionTypes> = (name: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_PLAYER_NAME, 
    name 
});

export const startChangeCharacterName = (name: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeCharacterName(name));
    };
};

export const startChangePlayerName = (name: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangePlayerName(name));
    };
};