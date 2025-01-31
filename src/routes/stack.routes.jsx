import { createStackNavigator } from "@react-navigation/stack";

const {Screen, Navigator} = createStackNavigator();

import HomeScreen from "../screens/HomeScreen";
import FormScreen from "../screens/FormScreen";

export function StackRoutes() {
    return(
        <Navigator>
            <Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'Main Menu',
                    headerTintColor: 'blue',
                    headerShown: false
                }}
            />
            <Screen
                name="form"
                component={FormScreen}
                options={{ headerShown: false}}
            />
        </Navigator>
    )
}