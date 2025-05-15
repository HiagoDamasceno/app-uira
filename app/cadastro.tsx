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
  Switch,
} from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [escola, setEscola] = useState('');
  const [motivo, setMotivo] = useState('');
  const [isMenor, setIsMenor] = useState(false);

  // Campos do responsável
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [telefoneResponsavel, setTelefoneResponsavel] = useState('');

  const handleEnviar = () => {
    Alert.alert('Sucesso', 'As informações foram enviadas para a instituição!');
  };

  const handleWhatsApp = () => {
    let mensagem = `📋 *Cadastro para Jovem Aprendiz*\n\n`;
    mensagem += `🧑 Nome: ${nome}\n`;
    mensagem += `📅 Idade: ${idade}\n`;
    mensagem += `✉️ Email: ${email}\n`;
    mensagem += `📞 Telefone: ${telefone}\n`;
    mensagem += `🏠 Endereço: ${endereco}\n`;
    mensagem += `🏫 Escola: ${escola || 'Não informado'}\n`;
    mensagem += `📝 Motivo: ${motivo}\n`;

    if (isMenor) {
      mensagem += `\n👨‍👩‍👧 *Responsável:*\n`;
      mensagem += `• Nome: ${nomeResponsavel}\n`;
      mensagem += `• Telefone: ${telefoneResponsavel}\n`;
    }

    const url = `https://wa.me/5511994262805?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro para Jovem Aprendiz</Text>

      <TextInput style={styles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Idade" keyboardType="numeric" value={idade} onChangeText={setIdade} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder="Escola (se estiver estudando)" value={escola} onChangeText={setEscola} />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Por que deseja participar?"
        multiline
        numberOfLines={4}
        value={motivo}
        onChangeText={setMotivo}
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
        <>
          <Text style={styles.responsavel}>
            * Por ser menor de idade, é necessário informar os dados do seu responsável.
          </Text>
          <TextInput style={styles.input} placeholder="Nome do responsável" value={nomeResponsavel} onChangeText={setNomeResponsavel} />
          <TextInput style={styles.input} placeholder="Telefone do responsável" keyboardType="phone-pad" value={telefoneResponsavel} onChangeText={setTelefoneResponsavel} />
        </>
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
    marginBottom: 10,
  },
  button: {
    marginBottom: 15,
  },
});

export default Cadastro;
