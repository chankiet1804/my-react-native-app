import { Text, View } from "react-native"
import HomeScreen from "./components/review/home";
import DetailScreen from "./components/review/detail";
import AboutScreen from "./components/review/about";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSAN_REGULAR } from "./utils/const";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigation from "./components/navigation/app.navigation";


SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, error] = useFonts({
        [OPENSAN_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
          
          <AppNavigation/>

        </NavigationContainer>
    )
}

export default App;