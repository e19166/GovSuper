import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen</Text>
      <Button title="Go to Login" onPress={() => router.push("/screens/LoginScreen")} />
      <Button title="Go to Mini App" onPress={() => router.push("/screens/MiniAppScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
