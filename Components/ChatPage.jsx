
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

export default function ChatPage({ route }) {
  const { user } = route.params;
  const [text, setText] = useState('');

  const [messages, setMessages] = useState([
    {
      id: '1',
      text: `Hey! I'm ${user.firstName}.`,
      sent: false,
      time: '10:30 AM',
    },
    {
      id: '2',
      text: `I'm from ${user.address.state} , ${user.address.country}.`,
      sent: false,
      time: '10:30 AM',
    },
    {
      id: '3',
      text: 'Hey! How are you?',
      sent: true,
      time: '10:31 AM',
    },
    {
      id: '4',
      text: 'Doing great! What about you?',
      sent: false,
      time: '10:31 AM',
    },
  ]);

  function sendMessage() {
    const trimmed = text.trim();

    if (!trimmed) return;

    const now = new Date();

    setMessages((previous) => [
      ...previous,
      {
        id: `${Date.now()}-${Math.random()}`,
        text: trimmed,
        sent: true,
        time: now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      },
    ]);

    setText('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      <FlatList
        style={styles.chat}
        contentContainerStyle={styles.messageList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubble,
              item.sent ? styles.sentBubble : styles.receivedBubble,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#888"
          value={text}
          onChangeText={setText}
          multiline
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          activeOpacity={0.8}
        >
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE5DB',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  online: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  chat: {
    flex: 1,
  },
  messageList: {
    padding: 12,
    gap: 10,
  },
  bubble: {
    maxWidth: '82%',
    paddingHorizontal: 12,
    paddingTop: 9,
    paddingBottom: 6,
    borderRadius: 10,
  },
  sentBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#D9FDD3',
    borderTopRightRadius: 2,
  },
  receivedBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderTopLeftRadius: 2,
  },
  messageText: {
    fontSize: 16,
    color: '#222',
  },
  time: {
    fontSize: 10,
    color: '#777',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 8,
    gap: 8,
    backgroundColor: '#F5F5F5',
  },
  input: {
    flex: 1,
    maxHeight: 110,
    backgroundColor: '#fff',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingTop: 11,
    paddingBottom: 11,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#075E54',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    color: '#fff',
    fontSize: 20,
  },
});
