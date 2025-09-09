import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MiniAppScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Mini App Screen</Text>
      <Button title="Go to Login" onPress={() => router.push("/screens/LoginScreen")} />
      <Button title="Go to Home" onPress={() => router.push("/screens/HomeScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
