import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Desenvolvedor</Text>
      <Text style={styles.info}>Nome: Pablo Schmitt</Text>
      <Text style={styles.info}>Curso: Sistemas de Informação</Text>
      <Text style={styles.info}>Semestre: ULTIMO</Text>
      <Text style={styles.bio}>Quero me tornar um otimo profissional e refinar os meus metodos de cozinha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
  },
});