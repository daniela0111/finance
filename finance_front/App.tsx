import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryListScreen from './screens/EntryListScreen';
import EntryEditScreen from './screens/EntryEditScreen';
import EntryDeleteScreen from './screens/EntryDeleteScreen';

export type RootStackParamList = {
  EntryList: undefined;
  EntryEdit: { entryId: number };
  EntryDelete: { entryId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const EntryStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="EntryList" component={EntryListScreen} />
        <Stack.Screen name="EntryEdit" component={EntryEditScreen} />
        <Stack.Screen name="EntryDelete" component={EntryDeleteScreen} />
      </Stack.Navigator>
  )
}


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    //conection between screens
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
