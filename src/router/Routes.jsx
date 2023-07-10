import Home from "../view/home/Home";
import Login from "../view/login/Login";
import Search from "../view/search/Search";
import Details from "../view/details/Details";
import Register from "../view/register/Register";
import TrailerWar from "../view/videos/TrailerWar";
import TrailerFamily from "../view/videos/TrailerFamily";
import MoviesWar from "../view/moviesCategorys/MoviesWar";
import TrailerPopular from "../view/videos/TrailerPopular";
import TrailerWestern from "../view/videos/TrailerWestern";
import { NavigationContainer } from "@react-navigation/native";
import MoviesFamily from "../view/moviesCategorys/MoviesFamily";
import MoviesPopular from "../view/moviesCategorys/MoviesPopular";
import MoviesWestern from "../view/moviesCategorys/MoviesWestern";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Popular"
          component={MoviesPopular}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Family"
          component={MoviesFamily}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="War"
          component={MoviesWar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Western"
          component={MoviesWestern}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TrailerPopular"
          component={TrailerPopular}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrailerFamily"
          component={TrailerFamily}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrailerWar"
          component={TrailerWar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrailerWestern"
          component={TrailerWestern}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
