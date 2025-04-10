import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logoJPG from '../assets/images/uirapuru_logo.jpg';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Saiba Mais!" onPress={() => router.push('/saiba_mais')} />
        <Button title="Cadastrar" onPress={() => router.push('/cadastro')} />
      </View>

      <Image source={logoJPG} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Bem-vindo ao Uirapuru</Text>
      <Text style={styles.description}>
        Junte-se a nós na construção de um futuro melhor. Descubra como você pode fazer a diferença!
      </Text>

      <Button title="Quem somos" onPress={() => router.push('/quem_somos')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
});

export default Home;
