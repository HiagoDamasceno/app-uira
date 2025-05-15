import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Informacoes = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Como Participar</Text>

      <View style={styles.card}>
        <Text style={styles.sectionText}>
          Para participar do projeto <Text style={styles.bold}>Uirapuru</Text>, o jovem precisa atender aos seguintes critérios:
        </Text>

        <View style={styles.item}>
          <Icon name="user" size={20} color="#4a4a4a" style={styles.icon} />
          <Text style={styles.itemText}>Ter entre 14 e 24 anos</Text>
        </View>
        <View style={styles.item}>
          <Icon name="book" size={20} color="#4a4a4a" style={styles.icon} />
          <Text style={styles.itemText}>Estar cursando ou ter concluído o ensino médio</Text>
        </View>
        <View style={styles.item}>
          <Icon name="zap" size={20} color="#4a4a4a" style={styles.icon} />
          <Text style={styles.itemText}>Ter vontade de aprender e se desenvolver profissionalmente</Text>
        </View>
      </View>

      <View style={styles.cardInfo}>
        <Icon name="check-circle" size={24} color="#2ecc71" />
        <Text style={styles.freeText}>
          Não é necessário pagar nada. Todos os cursos e mentorias são oferecidos de forma <Text style={styles.bold}>gratuita</Text>.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f2f2f7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardInfo: {
    backgroundColor: '#e9fbee',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#444',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  freeText: {
    fontSize: 16,
    color: '#2d6a4f',
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Informacoes;
