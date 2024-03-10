import { Button, Divider, Input } from "@rneui/themed";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LoginProps, LoginState } from "../types/login";



export default class LoginScreen extends React.Component {

    state: Readonly<LoginState>;
    email: string = '';
    password: string = '';

    constructor(public props: Readonly<LoginProps>) {
        super(props);
        this.state = {
            password_visible: false,
            error: '',
            is_loading: false,
        }
    }

    login = () => {
        this.setState({...this.state,...{ is_loading: true } })
        setTimeout(() => {
            this.props.setLoginState(true)
        }, 2000);
    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={[styles.container]}>
                <Text style={[styles.loginText]}>Connexion</Text>

                <Input
                    placeholder="Adresse Email"
                    keyboardType="email-address"
                    rightIcon={{
                        type: 'ionicon',
                        name: 'mail-outline',
                        color: 'gray',
                    }}
                    errorStyle={{ color: 'red', fontSize: 15 }}
                    errorMessage={this.state.error}
                    style={[styles.emailInput]} />

                <Divider style={[styles.divider]} />

                <Input
                    placeholder="Mot de passe"
                    // keyboardType="visible-password"
                    secureTextEntry={!this.state.password_visible}
                    rightIcon={
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name={`eye${this.state.password_visible ? '' : '-off'}-outline`}
                                color="gray"
                                size={25}
                                onPress={() => this.setState({ ...this.state, ...{ password_visible: !this.state.password_visible } })} />
                        </View>
                    }
                    errorStyle={{ color: 'red', fontSize: 15 }}
                    errorMessage={this.state.error} />


                <Divider style={[styles.divider]} />

                <Button
                    type="outline"
                    title="Se connecter"
                    color="error"
                    style={[styles.submitBtn]}
                    loading={this.state.is_loading}
                    onPress={this.login} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingStart: 30,
        paddingEnd: 30,
    },
    loginText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        width: '100%',
        textAlign: 'center',
        marginTop: 200,
        marginBottom: 30,
    },
    emailInput: {
        marginTop: 10,
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'transparent',
        opacity: 0
    },
    submitBtn: {
        marginTop: 10,
        marginBottom: 10,
    }
})
