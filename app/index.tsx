import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import logoJPG from '../assets/images/uirapuru_logo.jpg';

const Home = () => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIcon} onPress={() => setMenuVisible(true)}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      <Image source={logoJPG} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Bem-vindo ao Uirapuru</Text>
      <Text style={styles.description}>
        Junte-se a nós na construção de um futuro melhor. Descubra como você pode fazer a diferença!
      </Text>

      <Modal animationType="slide" transparent={true} visible={menuVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalMenu}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Menu</Text>
              <TouchableOpacity onPress={() => setMenuVisible(false)}>
                <Ionicons name="close" size={28} color="#333" />
              </TouchableOpacity>
            </View>

            {[
              { label: 'Saiba Mais', path: '/saiba_mais' },
              { label: 'Cadastrar', path: '/cadastro' },
              { label: 'Quem somos', path: '/quem_somos' },
              { label: 'Localização', path: '/localizacao' },
              { label: 'Contato', path: '/contato' },
              { label: 'Parceiros', path: '/parceiros' },
              { label: 'Ajuda', path: '/ajuda' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  router.push(item.path);
                  setMenuVisible(false);
                }}
              >
                <Text style={styles.menuItemText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
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
  menuIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMenu: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItem: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Home;
