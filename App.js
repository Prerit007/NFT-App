import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme.colors,
  backgroundColor: "transparent",
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Details} name="Details" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
