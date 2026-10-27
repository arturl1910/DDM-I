import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Estilo';

export default function Perfil({ navigation }) {
  return (
    // Container principal da tela de perfil
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        
        <Text style={styles.titulo}>Tela de Perfil</Text>
        <Text style={styles.subtitulo}>Esta é a quarta tela do aplicativo.</Text>

        {/* Botão para retornar à tela Home */}
        <View style={styles.botao}>
          <Button 
            title="Voltar para Home" 
            onPress={() => navigation.navigate('Home')} 
            color="#007AFF"
          />
        </View>

        {/* Botão que força a volta para o Login (simulando um logout) */}
        <View style={[styles.botao, { marginTop: 10 }]}>
          <Button 
            title="Sair (Ir para Login)" 
            onPress={() => navigation.navigate('Login')} 
            color="#FF3B30"
          />
        </View>

      </View>
    </View>
  );
}