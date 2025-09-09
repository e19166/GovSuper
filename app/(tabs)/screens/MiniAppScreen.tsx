import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Home: { authToken: string };
  MiniApp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'MiniApp'>;

export default function MiniAppScreen({}: Props) {
  const [payslip, setPayslip] = useState<any>(null);

  useEffect(() => {
    const data = { month: 'September', earnings: 50000, deductions: 5000, netPay: 45000 };
    setPayslip(data);
  }, []);

  if (!payslip) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World Mini App</Text>
      <Text>Month: {payslip.month}</Text>
      <Text>Earnings: {payslip.earnings}</Text>
      <Text>Deductions: {payslip.deductions}</Text>
      <Text>Net Pay: {payslip.netPay}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' }
});
