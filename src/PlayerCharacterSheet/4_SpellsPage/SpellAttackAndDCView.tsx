import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProficiencyView from "../Shared/ProficiencyView";

interface Props {
    proficiency: string;
    keySpellcastingAbilityModifier: number;
    level: number;
    spellAttackItemBonus: number;
    spellDCItemBonus: number;
}

interface State {}

export default class SpellAttackDCView extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Spell Attack </Text>
                <ProficiencyView
                    title={"Spell Attack"}
                    proficiency={this.props.proficiency}
                    keyAbilityModifier={
                        this.props.keySpellcastingAbilityModifier
                    }
                    level={this.props.level}
                    itemBonus={this.props.spellAttackItemBonus}
                />
                <ProficiencyView
                    title={"Spell DC"}
                    proficiency={this.props.proficiency}
                    keyAbilityModifier={
                        this.props.keySpellcastingAbilityModifier
                    }
                    level={this.props.level}
                    itemBonus={this.props.spellDCItemBonus}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        width: 100,
        backgroundColor: "green",
    },
    header: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});