import { StyleSheet } from 'react-native';

// React Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Context
import { AuthContextProvider } from './context/AuthContext';

// Import de páginas
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

// Método para criar o stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name='Register'
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name='Home'
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
