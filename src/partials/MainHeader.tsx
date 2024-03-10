import { Text } from "@rneui/themed";
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Icon from "react-native-vector-icons/Ionicons";


export default class MainHeader extends React.Component {

    constructor(props: Readonly<any>) {
        super(props);
    }

    render(): React.ReactNode {
        const props = this.props as any;
        const title: string = props.route.name
        return (
            <SafeAreaView style={[styles.header]}>
                <TouchableOpacity
                    style={[styles.menuBtn]}
                    activeOpacity={.7}
                    onPress={() => props.navigation.openDrawer()}>
                    <Icon name="grid-outline" size={25} color="#fff" onPress={() => false} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle]}>{title}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: getStatusBarHeight() + 5,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuBtn: {
        backgroundColor: 'orange',
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    headerTitle: {
        color: '#000',
        fontSize: 20,
        textTransform: 'capitalize',
    }
});