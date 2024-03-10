import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import React from "react";
import { Animated, Image, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ProfilScreen from "../screens/ProfilScreen";
import { Button } from "@rneui/themed";
import { theme } from "../App";
import { DrawerProps } from "../types/drawer";



const Drawer = createDrawerNavigator();

export default class DrawerNavigation extends React.Component {

    constructor(public props: Readonly<DrawerProps>) {
        super(props);
    }

    render(): React.ReactNode {
        const prop: any = this.props
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    screenOptions={{
                        headerShown: false,
                        drawerActiveBackgroundColor: 'orange',
                        drawerActiveTintColor: 'black',
                        drawerAllowFontScaling: true,
                        drawerItemStyle: {
                            borderRadius: 15,
                            width: '100%',
                        },
                        drawerLabelStyle: {
                            marginLeft: -20,
                            fontSize: 17,
                            fontWeight: 'bold',
                        },
                    }}
                    drawerContent={props => <CustomDrawerContentComponent {...props} setLoginState={this.props.setLoginState} />}>
                    <Drawer.Screen
                        name="Page Principale"
                        component={HomeScreen}
                        options={{
                            drawerIcon: prop => (<Icon name="home-outline" size={25} color="black" />)
                        }} />
                    <Drawer.Screen
                        name="Articles"
                        component={ArticleScreen}
                        options={{
                            drawerIcon: prop => (<Icon name="image-outline" size={25} color="black" />)
                        }} />
                    <Drawer.Screen
                        name="Profil"
                        component={ProfilScreen}
                        options={{
                            drawerIcon: prop => (<Icon name="person-outline" size={25} color="black" />)
                        }} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

class CustomDrawerContentComponent extends React.Component {

    constructor(public props: any) {
        super(props);
    }

    disconnect = () => {
        this.props.setLoginState(false);
    }

    render(): React.ReactNode {
        return (
            <Animated.View style={{ flex: 1, backgroundColor: '#eee', }}>
                <Animated.View style={{ height: 180, backgroundColor: 'orange', borderBottomRightRadius: 15, paddingTop: 30 }}>
                    <Image source={require('../../assets/icon.png')} style={{ width: 100, height: 100, resizeMode: 'cover', borderRadius: 50 }} />
                    <Text style={{ paddingLeft: 15, fontSize: 25 }}>Gestion Immobilisation</Text>
                </Animated.View>
                <DrawerContentScrollView {...this.props}>
                    <DrawerItemList {...this.props} />
                </DrawerContentScrollView>
                <Animated.View>
                    <Button
                        title="Déconnextion"
                        color="secondary"
                        buttonStyle={[styles.logout]}
                        type="clear"
                        iconRight
                        icon={
                            <Icon name="exit-outline" style={{ marginLeft: 20 }} size={25} color="grey" />
                        }
                        onPress={this.disconnect} />
                </Animated.View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    logout: {
        height: 50,
        color: '#000',
    }
})
