import { router } from 'expo-router';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen</Text>
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/screens/MiniAppScreen")}
      >
        <Text style={styles.cardTitle}>Mini App</Text>
        <Text style={styles.cardDesc}>Click to open the Mini App</Text>
      </TouchableOpacity>
      <Button title="Go to Login" onPress={() => router.push("/screens/LoginScreen")} />
      <Button title="Go to Mini App" onPress={() => router.push("/screens/MiniAppScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});
