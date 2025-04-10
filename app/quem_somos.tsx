  import { TestContext } from 'node:test';
  import React from 'react';
  import { View, Text, StyleSheet, ScrollView, Button, Linking, Image} from 'react-native';
  import { WebView } from 'react-native-webview';
  import logoFundacaoJPG from '../assets/images/dtq_fundacao.jpg';


  const SaibaMais = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.textTitle}>
          CONHEÇA O PROJETO
        </Text>

        <WebView 
          style={{ height: 200, width: '100%', marginBottom: 30, }}
          javaScriptEnabled
          domStorageEnabled
          source={{ uri: 'https://www.youtube.com/embed/EELh_ZMiZIA' }}
          />




          <View style={styles.container2}>
              <Text style={styles.textTitle}>
              Apoiar, educar e incluir
              </Text>
              <Text style={styles.text}>Imagine um ninho. Um lugar de acolhimento, cuidado e apoio. É isso que nós somos. Aqui no Projeto Uirapuru nos dedicamos a preparar jovens da rede pública para alcançar novos voos, sabendo que voar é um desafio que exige resiliência, comprometimento e a melhor versão de cada um. Como uma mãe que quer o melhor para seus filhos, somos exigentes e ao mesmo tempo amorosos.</Text>
              <Text style={styles.text}>Neste ninho cada jovem encontra espaço para expressar suas vozes e aspirações, desenvolver seus talentos e habilidades e alcançar seu pleno potencial para dar os primeiros “voos” de sua jornada profissional.</Text>
              <Text style={styles.text}>Assim como o canto do Uirapuru ressoa pela floresta, o aprendizado adquirido em nosso programa ecoa nas vidas dos jovens, preparando-os para os desafios futuros da vida adulta e do mercado de trabalho.</Text>
          </View>

          <View style={styles.imageBox}>
              <Image source={logoFundacaoJPG} style={styles.imageHeiden} resizeMode="cover" />
                  <View style={styles.overlay}>
                      <Text style={styles.overlayTitle}>FUNDAÇÃO HEYDENREICH</Text>
                      <Text style={styles.overlayText}>
                      Conheça mais de perto a Fundação mantenedora do Projeto Uirapuru desde o início de sua jornada.
                      </Text>
                      <View style={styles.overlayButton}>
                      <Button title="Sobre a Fundação" onPress={() => {Linking.openURL('https://www.projetouirapuru.org.br/transparencia/') }} color="#002a98" />
                      </View>
                  </View>
          </View>

          <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                  <Text style={styles.statNumber}>17</Text>
                  <Text style={styles.statLabel}>anos de atuação</Text>
              </View>

              <View style={styles.statItem}>
                  <Text style={styles.statNumber}>2.167</Text>
                  <Text style={styles.statLabel}>Formados em nosso curso</Text>
              </View>

              <View style={styles.statItem}>
                  <Text style={styles.statNumber}>80 %</Text>
                  <Text style={styles.statLabel}>dos formados em 2023/24 encaminhados como aprendizes</Text>
              </View>

              <View style={styles.statItem}>
                  <Text style={styles.statNumber}>34</Text>
                  <Text style={styles.statLabel}>Empresas parceiras</Text>
              </View>
          </View>


        <View style={styles.containerFooter}>
          <Text style={styles.subtitle}>Como entrar em contato:</Text>
          <Text style={styles.text}>📧 Email: uirapuru@projetouirapuru.org.br</Text>
          <Text style={styles.text}>📞 Telefone: (11) 99426-2805</Text>
          <Text style={styles.text}>🌐 Site: www.projetouirapuru.org.br</Text>
        
          <View style={styles.overlayButtonFooter}>
          <Button
            title="Visitar o site"
            onPress={() =>
              Linking.openURL(
                'https://www.projetouirapuru.org.br/?gad_source=1&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkW4sAoO1f5mg4BO6cQKluJaAvvj2pdtAFzSDI89wKUbPRFcDlYJzvAaAu3SEALw_wcB'
              )
            }color="#002a98"
          />
</View>

        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {    
      flexGrow: 1,
      marginVertical: 20,
      padding: 20,
      backgroundColor: '#fff',
      },

    container2: {
      backgroundColor: '#b3dfe7',
      padding: 10,
    },

    containerFooter:{
      display:'flex',
      justifyContent: 'center',
      alignContent: 'center',
      margin: 20
    },

    textTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#002a98',
      marginBottom: 20,
      textAlign: 'center',
    },
    video: {
      width: '100%',
      height: 200,
      marginBottom: 20,
      borderRadius: 10,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#002a98',
      marginBottom: 10,
      textAlign: 'center',
    },
    text: {
      fontSize: 13,
      marginBottom: 10,
      lineHeight: 22,
    },

    imageBox: {
      position: 'relative',
      width: '100%',
      height: 300,
      marginVertical: 20,
      borderRadius: 10,
      overflow: 'hidden',
    },
    
    imageHeiden: {
      width: '100%',
      height: '100%',
    },
    
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 20,
      justifyContent: 'flex-end',
    },
    
    overlayTitle: {
      fontSize: 22,
      color: '#002a98',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    
    overlayText: {
      fontSize: 16,
      color: 'white',
      marginBottom: 15,
    },
    
    overlayButton: {
      backgroundColor: '#b3dfe7',
      borderRadius: 10,
      overflow: 'hidden',
      alignSelf: 'flex-start',
    },
    overlayButton2: {
      backgroundColor: '#b3dfe7',
      borderRadius: 20,
      alignSelf: 'flex-start',

    },
    statsContainer: {
      backgroundColor: '#ffbd59',
      paddingVertical: 40,
      paddingHorizontal: 20,
      alignItems: 'center',
      borderRadius: 10
    },
    
    statItem: {
      marginBottom: 30,
      alignItems: 'center',
    },
    
    statNumber: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#002a98',
    },
    
    statLabel: {
      fontSize: 14,
      color: '#002a98',
      textAlign: 'center',
      marginTop: 5,
      lineHeight: 20,
    }
    
    
  });

  export default SaibaMais;
