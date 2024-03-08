import React from "react";
import { SafeAreaView, Text } from "react-native";



export default class ArticleScreen extends React.Component {

    constructor(props: Readonly<any>) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Article Screen</Text>
            </SafeAreaView>
        );
    }
}
