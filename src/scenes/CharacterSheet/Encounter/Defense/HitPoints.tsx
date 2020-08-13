import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button, ButtonGroup } from "@ui-kitten/components";
import { floor } from "react-native-reanimated";
import { bindActionCreators } from "redux";
import { startChangeHitPoints } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import TemporaryHitPoints from "./TemporaryHitPoints";

export interface HitPointProps {
    max: number;
    current: number;
    temporary: number;
    dying: number;
    wounded: number;
}

const HitPoints: React.FC<Props> = (props) => {
    const PlusHPButton = (amount: number) => (<Button onPress={() => {props.AdjustHitPoints(amount, false);}} style={styles.plus}>+{amount.toString()}</Button>);
    const MinusHPButton = (amount: number) => (<Button onPress={() => {props.AdjustHitPoints(-amount, false);}} style={styles.minus}>-{amount.toString()}</Button>);

    return (
        <Layout>
            <Layout style={styles.rowContainer}>
                <ButtonGroup style={styles.container} size="tiny" status='danger'>
                    {MinusHPButton(1)}
                    {MinusHPButton(5)}
                    {MinusHPButton(10)}
                </ButtonGroup>
                <Layout>
                    <Text style={styles.subHeader} category='p1'> HP: </Text>
                    <Text category='h4' style={styles.text}> {props.current}/{props.max} </Text>
                </Layout>
                <ButtonGroup style={styles.container} size="tiny" status='info'>
                    {PlusHPButton(10)}
                    {PlusHPButton(5)}
                    {PlusHPButton(1)}
                </ButtonGroup>
            </Layout>
            <Layout style={{ padding: 10, flex: 0.65 }}>
                <Layout style={styles.rowContainer}>
                    <TemporaryHitPoints />
                    <Layout style={styles.container}>
                        <Text style={styles.subHeader} category='p1'>Dying:</Text>
                        <Text category='h4' style={styles.text}>{props.dying}</Text>
                    </Layout>
                    <Layout style={styles.container}>
                        <Text style={styles.subHeader} category='p1'>Wounded:</Text>
                        <Text category='h4' style={styles.text}>{props.wounded}</Text>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    );
};

type Props = HitPointProps & LinkDispatchProps;
    

// base state
//all actions to be dispatched
interface LinkDispatchProps {
    AdjustHitPoints: (delta: number, removesWounded: boolean) => void;
}


const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    AdjustHitPoints: bindActionCreators(startChangeHitPoints, dispatch)
});

export default connect(null, mapDispatchToProps)(HitPoints);


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flex: 0.5,
        flexDirection: "row",
    },
    text: {
        flex: 1,
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "flex-start",
    },
    subHeader: {
        flex: 2,
        justifyContent: "flex-end",
        textAlign: "center",
        alignSelf: "center"
    },
    plus: {
        flex: 1,
        justifyContent: "center"
    },
    minus: {
        flex: 1
    }
});
