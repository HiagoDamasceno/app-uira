import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Contato = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fale Conosco</Text>

      <View style={styles.card}>
        <View style={styles.item}>
          <Icon name="mail" size={20} color="#555" style={styles.icon} />
          <Text style={styles.text}>uirapuru@projetouirapuru.org.br</Text>
        </View>

        <View style={styles.item}>
          <Icon name="phone" size={20} color="#555" style={styles.icon} />
          <Text style={styles.text}>(11) 99426-2805</Text>
        </View>

        <View style={styles.item}>
          <Icon name="map-pin" size={20} color="#555" style={styles.icon} />
          <Text style={styles.text}>R. João Píres de Camargo, 207 - Jardim Mirna, Taboão da Serra - SP, 06790-240</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#002a98',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: '#002a98',
  },
});

export default Contato;
