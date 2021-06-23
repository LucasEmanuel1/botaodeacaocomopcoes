import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const App = () => {
  const clickHandler = () => {
    alert('O campus Palmeira dos Índios foi inaugurado em 2 de agosto de 1993 e é um centro de referência de ensino técnico profissionalizante na região do agreste, atuando junto aos sistemas estaduais, municipais e outras agências de formação profissional.');
    <Image
      source={{
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
      }}
      />
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Clique no Botão azul e saiba mais informações sobre o IFAL Campus Palmeira dos Índios
        </Text>
        <Text style={styles.textStyle}>
          Clique no botão de ação para executar
        </Text>
        <Image
            source={{
              uri:
                'https://www2.ifal.edu.br/campus/palmeira/comunicacao/arquivos/logos-do-ifal-vertical.png/@@images/ac3e97aa-6806-4523-bc47-7bf3c0950b0f.png',
            }}
            style={styles.logoifal}
          />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://play-lh.googleusercontent.com/TI8o079rVoxaQ5ZeDcLfQRlS7MQrwNbpGh4-WdOYC2lYIZk1jAhABtABLU_kl2aReCSl=s180-rw',
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  logoifal: {
    resizeMode: 'full',
    width: 200,
    height: 200,
    left: 50,
  },
});