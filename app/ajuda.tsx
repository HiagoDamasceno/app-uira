import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Ajuda = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Central de Ajuda</Text>

      {/* 1 */}
      <View style={styles.card}>
        <View style={styles.questionBlock}>
          <Icon name="help-circle" size={20} color="#2f80ed" style={styles.icon} />
          <Text style={styles.question}>1. Como me inscrever?</Text>
        </View>
        <Text style={styles.answer}>
          → Acesse a aba <Text style={styles.bold}>“Cadastrar”</Text> no app e preencha o formulário com seus dados.
        </Text>
      </View>

      {/* 2 */}
      <View style={styles.card}>
        <View style={styles.questionBlock}>
          <Icon name="users" size={20} color="#2f80ed" style={styles.icon} />
          <Text style={styles.question}>2. Quem pode participar?</Text>
        </View>
        <Text style={styles.answer}>
          → Jovens entre <Text style={styles.bold}>14 e 24 anos</Text> interessados em crescer profissionalmente.
        </Text>
      </View>

      {/* 3 */}
      <View style={styles.card}>
        <View style={styles.questionBlock}>
          <Icon name="edit-3" size={20} color="#2f80ed" style={styles.icon} />
          <Text style={styles.question}>1. Como posso me inscrever no projeto?</Text>
        </View>
        <Text style={styles.answer}>
          → Você pode se cadastrar diretamente pelo app preenchendo o formulário na aba <Text style={styles.bold}>“Cadastro”</Text>. 
          Também é possível entrar em contato conosco pelo <Text style={styles.bold}>WhatsApp</Text> e enviar suas informações por lá.
        </Text>
      </View>


      {/* 4 - Alterada: certificado físico */}
      <View style={styles.card}>
        <View style={styles.questionBlock}>
          <Icon name="award" size={20} color="#2f80ed" style={styles.icon} />
          <Text style={styles.question}>4. Os cursos emitem certificado?</Text>
        </View>
        <Text style={styles.answer}>
          → Sim! Ao concluir o curso presencial, você receberá um <Text style={styles.bold}>certificado impresso</Text> entregue pessoalmente.
        </Text>
      </View>

      {/* 5 */}
      <View style={styles.card}>
        <View style={styles.questionBlock}>
          <Icon name="briefcase" size={20} color="#2f80ed" style={styles.icon} />
          <Text style={styles.question}>5. Preciso ter experiência anterior?</Text>
        </View>
        <Text style={styles.answer}>
          → Não. Os cursos são pensados para iniciantes. Basta ter <Text style={styles.bold}>vontade de aprender</Text>.
        </Text>
      </View>

      {/* 6 - Alterada: mentorias presenciais */}
      <View style={styles.card}>
        <View style={styles.questionBlock}>
          <Icon name="user-check" size={20} color="#2f80ed" style={styles.icon} />
          <Text style={styles.question}>6. Como funcionam as mentorias?</Text>
        </View>
        <Text style={styles.answer}>
          → As mentorias são <Text style={styles.bold}>presenciais</Text> e acontecem nos espaços do projeto. Você será avisado pelo app e também via e-mail.
        </Text>
      </View>

      {/* 7 */}
      <View style={styles.card}>
        <View style={styles.questionBlock}>
          <Icon name="rss" size={20} color="#2f80ed" style={styles.icon} />
          <Text style={styles.question}>7. Onde acompanho as novidades?</Text>
        </View>
        <Text style={styles.answer}>
          → Fique atento ao nosso <Text style={styles.bold}>painel inicial</Text> no app ou siga a gente nas redes sociais.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f7',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  answer: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Ajuda;
