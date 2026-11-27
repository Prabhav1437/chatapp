import React from 'react';
import { FlatList, Text, View } from 'react-native';

type Person = {
  id: string;
  name: string;
};

const PEOPLE: Person[] = [
  { id: '1', name: 'Alice Johnson' },
  { id: '2', name: 'Bob Smith' },
  { id: '3', name: 'Charlie Brown' },
  { id: '4', name: 'Diana Prince' },
  { id: '5', name: 'Evan Wright' },
  { id: '6', name: 'Fiona Gallagher' },
  { id: '7', name: 'George Clark' },
  { id: '8', name: 'Hannah Abbott' },
];

export function PeopleList() {
  return (
    <FlatList
      data={PEOPLE}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

export default PeopleList;
