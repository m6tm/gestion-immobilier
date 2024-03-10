import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainHeader from "../partials/MainHeader";



export default class HomeScreen extends React.Component {

    constructor(props: Readonly<any>) {
        super(props);
    }

    componentDidMount(): void {
    }

    render() {
        return (
            <SafeAreaView style={[styles.main]}>
                <MainHeader {...this.props} />
                <View style={[styles.container]}>
                    <Text>Home Screen</Text>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }
})