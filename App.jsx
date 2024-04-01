import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProductScreen from './src/screens/ProductScreen';



export default function App() {
    const Stack=createNativeStackNavigator()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{title:'LIST'}} name='ProductScreen' component={ProductScreen}/>
                    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                    
                    <Stack.Screen options={{headerBackTitleVisible:false, title:'PRODUCT'}} name='DetailScreen' component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>

    );
}