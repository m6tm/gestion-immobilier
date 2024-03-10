import React from "react";
import { SafeAreaView, Text } from "react-native";
import MainHeader from "../partials/MainHeader";



export default class ProfilScreen extends React.Component {

    constructor(props: Readonly<any>) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <MainHeader {...this.props} />
                <Text>Profil Screen</Text>
            </SafeAreaView>
        );
    }
}
