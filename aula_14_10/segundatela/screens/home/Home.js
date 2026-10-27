import { View, Text, Button, Image } from 'react-native';
import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    // Container principal que centraliza o conteúdo na tela
    <View style={styles.container}>
      {/* Bloco do cartão centralizado */}
      <View style={styles.cardFormulario}>
        
        {/* Exibição de imagem usando link da web */}
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Bem-vindo à Home!</Text>
        <Text style={styles.subtitulo}>Você está logado na aplicação.</Text>

        {/* Botão que navega para a tela de Detalhes (3ª tela) */}
        <View style={styles.botao}>
          <Button
            title="Ir para Detalhes"
            onPress={() => navigation.navigate('Detalhes')}
            color="#007AFF"
          />
        </View>

        {/* Botão que navega para a tela de Perfil (4ª tela) */}
        <View style={[styles.botao, { marginTop: 10 }]}>
          <Button
            title="Ir para Perfil"
            onPress={() => navigation.navigate('Perfil')}
            color="#34C759"
          />
        </View>

        {/* Botão para voltar à tela de Login */}
        <View style={[styles.botao, { marginTop: 10 }]}>
          <Button
            title="Sair (Voltar para Login)"
            onPress={() => navigation.navigate('Login')}
            color="#FF3B30"
          />
        </View>

      </View>
    </View>
  );
}