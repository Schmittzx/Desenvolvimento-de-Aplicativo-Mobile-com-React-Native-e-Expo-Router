import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { data } from '../../data'; 

export default function CategoryProductsScreen() {
  const { id } = useLocalSearchParams();
  const categoryId = Number(id);
  const productsInCategory = data.products.filter((product) => product.idCategory === categoryId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos da Categoria {categoryId}</Text>
      <FlatList
        data={productsInCategory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem}>
            <Link href={`/product/${item.id}`}>
              <View style={styles.productInner}>
                {item.image && <Image source={{ uri: item.image }} style={styles.productImage} />}
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>Preço: ${item.price.toFixed(2)}</Text>
              </View>
            </Link>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 16,
    flex: 1,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 10,
  },
});