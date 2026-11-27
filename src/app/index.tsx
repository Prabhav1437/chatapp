import { SafeAreaView } from 'react-native-safe-area-context';
import { PeopleList } from '@/components/people-list';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <PeopleList />
    </SafeAreaView>
  );
}
