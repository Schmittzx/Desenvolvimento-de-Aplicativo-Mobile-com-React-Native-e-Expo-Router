import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { data } from '../../data'; 

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const productId = Number(id);
  const product = data.products.find((p) => p.id === productId);

  if (!product) {
    return <Text>Produto não encontrado!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.title}</Text>
      {product.image && <Image source={{ uri: product.image }} style={styles.image} />}
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Preço: ${product.price.toFixed(2)}</Text>
      {/* Adicione mais detalhes do produto aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});