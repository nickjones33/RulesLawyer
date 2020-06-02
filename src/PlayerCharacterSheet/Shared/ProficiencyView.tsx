import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import ProficiencyArrayView from "./ProficiencyArrayView";

interface Props {
    title: string;
    keyAbilityModifier: number;
    proficiency: string;
    level: number;
    itemBonus: number;
    is10base?: boolean;
    isACBase?: boolean;
    dexCap?: number;
    descriptor?: string;
    armorPenalty?: number;
}

interface State {}

export default class ProficiencyView extends Component<Props, State> {
    public static defaultProps = {
        is10base: false,
        isACBase: false,
        itemBonus: 0,
    };

    render() {
        const tenBase = this.props.is10base ? (
            <Text style={styles.tenBase}>Base: 10</Text>
        ) : (
            <Text style={styles.tenBase}></Text>
        );
        const keyModifier = this.props.isACBase ? (
            <Text style={styles.acBase}>
                Dex:{this.props.keyAbilityModifier} Cap:
                {this.props.dexCap !== undefined ? this.props.dexCap : 0}
            </Text>
        ) : (
            <Text style={styles.acBase}>
                Key: {this.props.keyAbilityModifier}
            </Text>
        );
        const proficiencyBonus = (
            <Text style={styles.profBonus}>
                {this.props.proficiency}
                {"\n"}
                Level {this.props.level}
            </Text>
        );
        const itemBonus =
            this.props.itemBonus !== undefined ? (
                <Text style={styles.itemBonus}>
                    Item: {this.props.itemBonus}
                </Text>
            ) : (
                <Text style={styles.itemBonus}> Item: 0</Text>
            );
        const descriptor =
            this.props.descriptor !== undefined ? (
                <Text style={styles.container}>{this.props.descriptor}</Text>
            ) : undefined;
        const total = this.props.is10base ? (
            <Text style={styles.total}>
                {this.props.keyAbilityModifier +
                    10 +
                    this.props.level +
                    this.props.itemBonus! +
                    2}
                {/* 2 will become proficiency bonus */}
            </Text>
        ) : (
            <Text style={styles.total}>
                {this.props.keyAbilityModifier +
                    this.props.level +
                    this.props.itemBonus! +
                    2}
                {/* 2 will become proficiency bonus */}
            </Text>
        );
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}:</Text>
                    {total}
                    <Text style={styles.equalSign}> = </Text>
                    {tenBase}
                    {keyModifier}
                    {proficiencyBonus}
                    <ProficiencyArrayView proficiency="Trained" />
                    {itemBonus}
                </View>
                {descriptor}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
        justifyContent: "space-evenly",
    },
    text: {
        flex: 3,
        width: 100,
    },
    title: {
        flex: 3,
        alignSelf: "center",
    },
    total: {
        flex: 2,
        fontWeight: "bold",
        fontSize: 16,
        alignSelf: "center",
    },
    equals: {
        flex: 2,
        alignSelf: "center",
    },
    tenBase: {
        flex: 3,
        alignSelf: "center",
    },
    acBase: {
        flex: 3,
        alignSelf: "center",
    },
    profBonus: {
        flex: 2,
        alignSelf: "center",
    },
    itemBonus: {
        flex: 3,
        alignSelf: "center",
    },
    equalSign: {
        flex: 1,
        alignSelf: "center",
    },
});
