import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  Linking,
  Alert,
  Switch
} from 'react-native';

const Cadastro = () => {
  const [isMenor, setIsMenor] = useState(false);

  const handleEnviar = () => {
    Alert.alert('Sucesso', 'As informações foram enviadas para a instituição!');
  };

  const handleWhatsApp = () => {
    const mensagem = encodeURIComponent('Olá, gostaria de me cadastrar, como faço?');
    const telefone = '5511994262805'; // Substitua pelo número oficial da instituição
    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro para Jovem Aprendiz</Text>

      <TextInput style={styles.input} placeholder="Nome completo" />
      <TextInput style={styles.input} placeholder="Idade" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Endereço" />
      <TextInput style={styles.input} placeholder="Escola (se estiver estudando)" />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Por que deseja participar?"
        multiline
        numberOfLines={4}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Você é menor de idade?</Text>
        <Switch
          value={isMenor}
          onValueChange={setIsMenor}
          thumbColor={isMenor ? '#007BFF' : '#ccc'}
        />
      </View>

      {isMenor && (
        <Text style={styles.responsavel}>
          * Por ser menor de idade, é necessário informar os dados do seu responsável.
        </Text>
      )}

      <View style={styles.button}>
        <Button title="Enviar para Instituição" onPress={handleEnviar} color="#007BFF" />
      </View>

      <View style={styles.button}>
        <Button title="Enviar pelo WhatsApp" onPress={handleWhatsApp} color="#25D366" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  responsavel: {
    fontSize: 14,
    color: '#d9534f',
    marginBottom: 15,
  },
  button: {
    marginBottom: 15,
  },
});

export default Cadastro;
