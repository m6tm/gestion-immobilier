import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import React from "react";
import { Animated, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ProfilScreen from "../screens/ProfilScreen";



const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
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
                }
            }} drawerContent={props => <CustomDrawerContentComponent {...props} />}>
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

function CustomDrawerContentComponent(props: any) {
    return (
        <Animated.View style={{ flex: 1, backgroundColor: '#eee', }}>
            <Animated.View style={{ height: 180, backgroundColor: 'orange', borderBottomRightRadius: 15, paddingTop: 30 }}>
                <Image source={require('../../assets/icon.png')} style={{ width: 100, height: 100, resizeMode: 'cover', borderRadius: 50 }} />
                <Text style={{ paddingLeft: 15, fontSize: 25 }}>Gestion Immobilisation</Text>
            </Animated.View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <Animated.View>
                <Text>Drawer Content</Text>
            </Animated.View>
        </Animated.View>
    );
}

