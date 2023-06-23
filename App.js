import { SafeAreaView,StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// App Imports

import Login from "./Pages/Authentication/login";
import Forgot from "./Pages/Authentication/forgot";
import Otp from "./Pages/Authentication/otp";
import ChangePass from "./Pages/Authentication/changepass";
import Register from "./Pages/Authentication/register";
import Postpage from "./Pages/Home/postpage";
import CareerPage from "./Pages/Home/career";
import DepartmentPage from "./Pages/Home/department";
import BranchPage from "./Pages/Home/branch";
import CurrentUpdatePage from "./Pages/Home/currentupdate";
import AlumniPage from "./Pages/Home/alumni";
import SportsPage from './Pages/Home/sports';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
      <Stack.Screen name="Forgot" options={{headerShown:false}} component={Forgot} />
      <Stack.Screen name="Otp" options={{headerShown:false}} component={Otp} />
      <Stack.Screen name="ChangePass" options={{headerShown:false}} component={ChangePass} />
      <Stack.Screen name="Register" options={{headerShown:false}} component={Register} />
      <Stack.Screen name="Postpage" options={{headerShown:false}} component={Postpage} />
      <Stack.Screen name="CareerPage" options={{headerShown:false}} component={CareerPage} />
      <Stack.Screen name="DepartmentPage" options={{headerShown:false}} component={DepartmentPage} />
      <Stack.Screen name="BranchPage" options={{headerShown:false}} component={BranchPage} />
      <Stack.Screen name="CurrentUpdatePage" options={{headerShown:false}} component={CurrentUpdatePage} />
      <Stack.Screen name="AlumniPage" options={{headerShown:false}} component={AlumniPage} />
      <Stack.Screen name="SportsPage" options={{headerShown:false}} component={SportsPage} />
    </Stack.Navigator>
   </NavigationContainer>
    
  );
}