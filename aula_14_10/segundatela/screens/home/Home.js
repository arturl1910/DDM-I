import { View, Text, Button, Image } from 'react-native';
import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    // Container principal que centraliza o conteúdo na tela
    <View style={styles.container}>
      {/* Bloco do cartão centralizado */}
      <View style={styles.cardFormulario}>
        
        {/* Exibição de imagem temática de culinária */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Receitas da Vovó</Text>
        <Text style={styles.subtitulo}>Explore os melhores pratos do dia!</Text>

        {/* Botão que navega para a tela de Detalhes (3ª tela) */}
        <View style={styles.botao}>
          <Button
            title="Ver Receita em Destaque"
            onPress={() => navigation.navigate('Detalhes')}
            color="#007AFF"
          />
        </View>

        {/* Botão que navega para a tela de Perfil (4ª tela) */}
        <View style={[styles.botao, { marginTop: 10 }]}>
          <Button
            title="Meu Perfil de Chef"
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