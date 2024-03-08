
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import DrawerNavigation from './navigations/DrawerNavigation';

export default function App() {
  return (
    <>
      <DrawerNavigation />
      <StatusBar style="dark" />
    </>
  );
}
