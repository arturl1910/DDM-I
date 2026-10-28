import { View, Text, Button, Image } from 'react-native';
import styles from './Estilo';

export default function Detalhes({ navigation }) {
  return (
    // Container principal que centraliza o conteúdo na tela
    <View style={styles.container}>
      {/* Bloco do cartão centralizado */}
      <View style={styles.cardFormulario}>
        
        {/* Imagem representativa da receita */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Lasanha à Bolonhesa</Text>
        <Text style={styles.subtitulo}>Tempo: 45 min | Rendimento: 6 porções</Text>

        <Text style={styles.label}>Ingredientes:</Text>
        <Text style={{ textAlign: 'center', marginBottom: 10, color: '#555' }}>
          • Massa para lasanha{"\n"}
          • 500g de carne moída{"\n"}
          • Molho de tomate e Queijo Muçarela
        </Text>

        {/* Botão para voltar à tela Home */}
        <View style={styles.botao}>
          <Button
            title="Voltar para Home"
            onPress={() => navigation.navigate('Home')}
            color="#007AFF"
          />
        </View>

        {/* Botão para ver o perfil do Chef */}
        <View style={[styles.botao, { marginTop: 10 }]}>
          <Button
            title="Ver Perfil do Chef"
            onPress={() => navigation.navigate('Perfil')}
            color="#34C759"
          />
        </View>

      </View>
    </View>
  );
}