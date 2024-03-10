import React from "react";
import { SafeAreaView, Text } from "react-native";
import MainHeader from "../partials/MainHeader";



export default class ArticleScreen extends React.Component {

    constructor(props: Readonly<any>) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <MainHeader {...this.props} />
                <Text>Article Screen</Text>
            </SafeAreaView>
        );
    }
}
