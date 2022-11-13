import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Singup from './components/Signup';
import Questions from './components/Questions';
import Home from './components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import { COLORS, SIZES } from "./constants";



SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [curUser, setCurUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if (user.email === "owais@admin.com") {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
      setCurUser(uid)
      setAppIsReady(true)
    } else {
      setAppIsReady(true)
      setCurUser(null)
    }
  });



  useEffect(() => {
    async function abc() {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }
    abc()
  }, [appIsReady])

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {curUser == null ? (
          <>
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{
                title: 'Signin',
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Singup}
              options={{
                title: 'Singup',
              }}
              />
          </>
        ) : (
          // User is signed in
          <>
            {isAdmin ?
              <Stack.Screen name="Dashboard" component={Dashboard}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                 color: COLORS.white
              },
              }}
              
              
              />
              :
              <>
                <Stack.Screen name="Home" component={Home} options={{
                headerStyle: {
                  backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                 color: COLORS.white
              },
              }} />
                <Stack.Screen name="Questions" component={Questions} 
                  options={{
                headerStyle: {
                  backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                 color: COLORS.white
              },
              }} />
              </>
            }
          </>
        )}
      </Stack.Navigator>

    </NavigationContainer>

  );
}

