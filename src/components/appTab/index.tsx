import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppList from '../../pages/list/index';
import AppForm from '../../pages/form/index';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTab(): JSX.Element {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#32264d",
                    tabBarInactiveTintColor: "#c1bccc",
                    tabBarActiveBackgroundColor: "#ebebf5",
                    tabBarInactiveBackgroundColor: "#fafafc",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    tabBarIconStyle: { display: "none" }
                }}
            >
                <Screen name="AppList" component={AppList} />
                <Screen name="AppForm" component={AppForm} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppTab;
