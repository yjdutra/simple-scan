import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Scan from '../../pages/scan';
import List from '../../pages/list';

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
                <Screen name="Scan" component={Scan} />
                <Screen name="Contact" component={List} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppTab;
