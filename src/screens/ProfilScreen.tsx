import React from "react";
import { SafeAreaView, Text } from "react-native";



export default class ProfilScreen extends React.Component {

    constructor(props: Readonly<any>) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Profil Screen</Text>
            </SafeAreaView>
        );
    }
}
