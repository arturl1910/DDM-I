import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Estilo';

export default function Detalhes({ navigation }) {
  return (
    // Container principal da tela de detalhes
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        
        <Text style={styles.titulo}>Tela de Detalhes</Text>
        <Text style={styles.subtitulo}>Esta é a terceira tela do aplicativo.</Text>

        {/* Botão para avançar para a tela de Perfil */}
        <View style={styles.botao}>
          <Button 
            title="Ir para Perfil" 
            onPress={() => navigation.navigate('Perfil')} 
            color="#007AFF"
          />
        </View>

        {/* navigation.goBack() serve para voltar para a tela anterior (Home) */}
        <View style={[styles.botao, { marginTop: 10 }]}>
          <Button 
            title="Voltar para Home" 
            onPress={() => navigation.goBack()} 
            color="#6c757d"
          />
        </View>

      </View>
    </View>
  );
}