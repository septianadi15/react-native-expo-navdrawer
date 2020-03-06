import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    AppRegistry
} from 'react-native';

// IMPORT LIBRARY KEGUNAAN NAVIGASI
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// IMPORT SCREEN
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import App from './App';

class NavDrawer extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    }

    render(){
        return(
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image source={require('./assets/drawer2.png')}
                        style={{width: 32, height: 32, marginLeft: 20}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const Screen1_stackNavigator = createStackNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: ({ navigation }) => ({
            title: 'Menu Screen 1',
            headerLeft: <NavDrawer navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#ff9800'
            },
            headerTintColor: '#ffffff'
        }),
    }
});

const Screen2_stackNavigator = createStackNavigator({
    Screen2: {
        screen: Screen2,
        navigationOptions: ({ navigation }) => ({
            title: 'Menu Screen 2',
            headerLeft: <NavDrawer navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#ff9800'
            },
            headerTintColor: '#ffffff'
        }),
    }
});

const Screen3_stackNavigator = createStackNavigator({
    Screen1: {
        screen: Screen3,
        navigationOptions: ({ navigation }) => ({
            title: 'Menu Screen 3',
            headerLeft: <NavDrawer navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#ff9800'
            },
            headerTintColor: '#ffffff'
        }),
    }
});

const App_stackNavigator = createStackNavigator({
    App: {
        screen: App,
        navigationOptions: ({ navigation }) => ({
            title: 'Image Picker',
            headerLeft: <NavDrawer navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#ff9800'
            },
            headerTintColor: '#ffffff'
        }),
    }
});

const DrawerNavigation = createDrawerNavigator({
    Screen1: {
        screen: Screen1_stackNavigator,
        navigationOptions: {
            drawerLabel: 'Menu Screen 1'
        },
    },
    Screen2: {
        screen: Screen2_stackNavigator,
        navigationOptions: {
            drawerLabel: 'Menu Screen 2'
        },
    },
    Screen3: {
        screen: Screen3_stackNavigator,
        navigationOptions: {
            drawerLabel: 'Menu Screen 3'
        },
    },
    App: {
        screen: App_stackNavigator,
        navigationOptions: {
            drawerLabel: 'Image Picker'
        },
    }
})

export default createAppContainer(DrawerNavigation);

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    teks: {
        fontSize: 24,
        fontStyle: 'italic',
        color: 'black'
    }
})