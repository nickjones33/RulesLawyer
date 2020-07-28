import { AbilityScoreArray } from "../scenes/Shared/PF2eCoreLib/AbilityScores";
import { Skills } from "../scenes/Shared/PF2eCoreLib/PlayerCharacter";
import { Proficiencies } from "../scenes/Shared/PF2eCoreLib/Proficiencies";
import { Ancestries } from "../scenes/Shared/PF2eCoreLib/Ancestries";
import { Backgrounds } from "../scenes/Shared/PF2eCoreLib/Backgrounds";
import { Classes } from "../scenes/Shared/PF2eCoreLib/Classes";

export type CharacterBuildState = {
    Ancestry: keyof Ancestries;
    Background: keyof Backgrounds;
    Class: keyof Classes;
    SubClass?: string;
    ClassBuild: BuildChoices; // actually selected options
    ChoicesAvailable: BuildChoice[]; // all the various levels and their respective choices
}

type BuildChoices = {
    Level1: BuildChoice[]
    Level2: BuildChoice[]
    Level3: BuildChoice[]
    Level4: BuildChoice[]
    Level5: BuildChoice[]
    Level6: BuildChoice[]
    Level7: BuildChoice[]
    Level8: BuildChoice[]
    Level9: BuildChoice[]
    Level10: BuildChoice[]
    Level11: BuildChoice[]
    Level12: BuildChoice[]
    Level13: BuildChoice[]
    Level14: BuildChoice[]
    Level15: BuildChoice[]
    Level16: BuildChoice[]
    Level17: BuildChoice[]
    Level18: BuildChoice[]
    Level19: BuildChoice[]
    Level20: BuildChoice[]
}

export type BuildChoice = {
    choiceName: string;
    hasExtraChoice: boolean;
    extraChoice?: BuildChoice; // for things that grant another option (i.e. Dedication, etc)
    prerequisites?: ChoicePrerequisite;
    applyChoice: () => void;
}

type ChoicePrerequisite = {
    abilityScore?: keyof AbilityScoreArray;
    choice?: BuildChoice;
    skillProficiency?: SkillProficiencyPreReq;
    meetsPreReqs: () => boolean;
}

type SkillProficiencyPreReq = {
    skill: keyof Skills;
    proficiency: Proficiencies;
}
