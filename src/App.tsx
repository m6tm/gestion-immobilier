
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import DrawerNavigation from './navigations/DrawerNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';
import { AppState } from './types/app';
import { ThemeProvider, createTheme } from '@rneui/themed';

export const theme = createTheme({
  lightColors: {
    primary: 'orange',
    secondary: 'black',
    background: '#fff',
    success: 'green',
    error:'red',
    warning: 'orange',
  },
  darkColors: {
    primary: 'paleturquoise',
    secondary: 'black',
    background: '#fff',
    success: 'green',
    error:'red',
    warning: 'orange',
  },
  mode: 'light',
});

export default class App extends React.Component {

  state: Readonly<AppState>;

  constructor(props: Readonly<any>) {
    super(props);
    this.state = {
      is_loading: false,
      is_logged_in: false,
    }
  }

  setLoginState = (new_state: boolean) => this.setState({...this.state,...{ is_logged_in: new_state } })

  render(): React.ReactNode {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          {
            this.state.is_logged_in ? 
              <DrawerNavigation {...{ setLoginState: this.setLoginState }} /> : 
              <LoginScreen {...{ setLoginState: this.setLoginState }} />
          }
          <StatusBar style="dark" />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
