import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import { data } from '../../data';

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Link href={`/category/${item.id}`}>
              <View style={styles.categoryInner}>
                {item.cover && <Image source={{ uri: item.cover }} style={styles.categoryCover} />}
                <Text style={styles.categoryTitle}>{item.title}</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryCover: {
    width: 50,
    height: 30,
    marginRight: 10,
    resizeMode: 'cover',
  },
  categoryTitle: {
    fontSize: 18,
  },
});