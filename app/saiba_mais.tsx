import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Informacoes = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Como Participar</Text>

      <Text style={styles.text}>
        Para participar do projeto Uirapuru, o jovem precisa atender aos seguintes critérios:
      </Text>

      <Text style={styles.item}>• Ter entre 14 e 24 anos</Text>
      <Text style={styles.item}>• Estar cursando ou ter concluído o ensino médio</Text>
      <Text style={styles.item}>• Ter vontade de aprender e se desenvolver profissionalmente</Text>

      <Text style={styles.text}>
        Não é necessário pagar nada. Todos os cursos e mentorias são oferecidos de forma gratuita.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  item: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default Informacoes;
