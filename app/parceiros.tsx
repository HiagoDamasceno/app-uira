import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Parceiros = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nossos Parceiros</Text>
      <Text style={styles.subtitle}>
        Temos orgulho de contar com o apoio de empresas que acreditam na transformação social.
      </Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/parceiros.png')} // Atualize o caminho conforme onde salvar a imagem
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.thanks}>
        Agradecemos a todos os parceiros por apoiarem essa jornada de oportunidades para jovens!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2f80ed',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  thanks: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777',
    marginTop: 10,
  },
});

export default Parceiros;
