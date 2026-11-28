import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://dummyjson.com/users');

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#075E54" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.contact} activeOpacity={0.7}>
              <Image source={{ uri: item.image }} style={styles.avatar} />

              <View style={styles.details}>
                <Text style={styles.name}>
                  {item.firstName} {item.lastName}
                </Text>
                <Text style={styles.preview} numberOfLines={1}>
                  {item.phone}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#075E54" />

      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#075E54' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'WhatsApp' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
  },
  preview: {
    color: '#777',
    marginTop: 5,
    fontSize: 14,
  },
});
