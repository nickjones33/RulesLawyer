import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import SpellAttackAndDCView from "./SpellAttackAndDCView";
import MagicTraditions, { MagicTraditionProps } from "./MagicTraditions";
import SpellSlots from "./SpellSlots";
import { SpellSlotProps } from "./SpellSlotView";
import { Spell, SpellListEntry } from "./Spell";
import Spells from "./Spells";
import { Proficiencies } from "../Shared/PF2eCoreLib/Proficiencies";
import { GetBonusFor, Bonus } from "../Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../Shared/PF2eCoreLib/BonusTypes";

interface Props {
    spellAttackProficiency: Proficiencies;
    spellcastingAbilityModifier: number;
    currentLevel: number;
    bonuses: Bonus[];
    magicTraditions: MagicTraditionProps;
    spellSlots: SpellSlotProps[];
    spells: SpellListEntry[];
}

interface State {}

export default class SpellsPage extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text h4> Spells Page </Text>
                <SpellAttackAndDCView
                    proficiency={this.props.spellAttackProficiency}
                    keySpellcastingAbilityModifier={
                        this.props.spellcastingAbilityModifier
                    }
                    level={this.props.currentLevel}
                    spellAttackItemBonus={GetBonusFor(
                        "SpellAttack",
                        BonusType.Item,
                        this.props.bonuses
                    )}
                    spellDCItemBonus={DetermineBonusTotal(
                        this.props.bonuses.filter
                    )}
                />
                <MagicTraditions
                    prepared={this.props.magicTraditions.prepared}
                    spontaneous={this.props.magicTraditions.spontaneous}
                    arcane={this.props.magicTraditions.arcane}
                    primal={this.props.magicTraditions.primal}
                    divine={this.props.magicTraditions.divine}
                    occult={this.props.magicTraditions.occult}
                />
                <SpellSlots spellSlots={this.props.spellSlots} />
                <Spells spells={this.props.spells} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        backgroundColor: "yellow",
    },
});
