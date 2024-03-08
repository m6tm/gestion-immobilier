import React from "react";
import { SafeAreaView, Text } from "react-native";



export default class HomeScreen extends React.Component {

    constructor(props: Readonly<any>) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Home Screen</Text>
            </SafeAreaView>
        );
    }
}
