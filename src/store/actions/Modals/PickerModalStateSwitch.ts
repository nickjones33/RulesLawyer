import { PickerModalState } from "../../ModalsState";
import { CharacterSheetState } from "../../Store";
import { Dispatch, ReactText } from "react";
import { AppActions } from "../AllActionTypesAggregated";
import { CHANGE_LEVEL, CHANGE_EXPERIENCE_POINTS, CHANGE_ABILITY_SCORE, CHANGE_CLASS_DC_PROFICIENCY } from "../PlayerCharacter/PlayerCharacterActionTypes";
import { ChangeLevel, ChangeExperiencePoints, ChangeClassDCProficiency } from "../PlayerCharacter/PlayerCharacterActions";
import { ChangePickerSelection } from "./ModalsActions";
import { Proficiencies } from "../../../scenes/Shared/PF2eCoreLib/Proficiencies";

export const PickerModalStateSwitch = (actionType: string, state: CharacterSheetState, dispatch: Dispatch<AppActions>): PickerModalState => {
    console.debug("PickerModalStateSwitch Entered");
    switch(actionType) {
    case CHANGE_LEVEL:
        return {
            title: "Level",
            items: Array.from(new Array(20), (x, i) => i + 1),
            currentSelection: state.modals.pickerModal.currentSelection,
            onSelect: (value: ReactText, index: number) => {
                dispatch(ChangeLevel(value));
                dispatch(ChangePickerSelection(value));
            }
        };
    case CHANGE_EXPERIENCE_POINTS:
        return {
            title: "Experience Points",
            items: Array.from(new Array(100), (x, i) => i * 10),
            currentSelection: state.modals.pickerModal.currentSelection,
            onSelect: (value: ReactText, index: number) => {
                dispatch(ChangeExperiencePoints(value));
                dispatch(ChangePickerSelection(value));
            }
        };
    case CHANGE_CLASS_DC_PROFICIENCY:
        console.debug("PickerModalStateSwitch for CHANGE_CLASS_DC_PROFICIENCY");
        return {
            title: "Class DC",
            items: [
                Proficiencies.Untrained.toString(),
                Proficiencies.Trained.toString(),
                Proficiencies.Expert.toString(),
                Proficiencies.Master.toString(),
                Proficiencies.Legendary.toString()
            ],
            currentSelection: state.modals.pickerModal.currentSelection,
            onSelect: (value: ReactText, index: number) => {
                console.debug("onSelect in PickerModalStateSwitch");
                dispatch(ChangeClassDCProficiency(<Proficiencies>value));
                dispatch(ChangePickerSelection(value));
            }
        };
    default: 
        return state.modals.pickerModal;
    }
};