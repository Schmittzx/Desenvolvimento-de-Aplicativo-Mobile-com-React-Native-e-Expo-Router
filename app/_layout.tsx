import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="category/[id]" options={{ title: 'Produtos da Categoria' }} />
      <Stack.Screen name="product/[id]" options={{ title: 'Detalhes do Produto' }} />
    </Stack>
  );
}