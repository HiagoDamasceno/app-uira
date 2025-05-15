import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { WebView } from 'react-native-webview';

const latitude = -23.609764;
const longitude = -46.782044;


export default function Localizacao() {
  if (Platform.OS === 'web') {
    // Exibe mapa como iframe na Web
    const googleMapsUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

    return (
      <View style={styles.container}>
        <iframe
          src={googleMapsUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </View>
    );
  }

  // Exibe mapa nativo no Android
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} title="Uirapuru" />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
