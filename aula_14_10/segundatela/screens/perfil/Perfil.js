import { View, Text, Button, Image } from 'react-native';
import styles from './Estilo';

export default function Perfil({ navigation }) {
  return (
    // Container principal que centraliza o conteúdo na tela
    <View style={styles.container}>
      {/* Bloco do cartão centralizado */}
      <View style={styles.cardFormulario}>
        
        {/* Foto de perfil do usuário/chef */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Chef Alex Silva</Text>
        <Text style={styles.subtitulo}>Membro desde Outubro / 2024</Text>

        <Text style={styles.label}>Minha Cozinha:</Text>
        <Text style={{ textAlign: 'center', marginBottom: 15, color: '#555' }}>
          • 12 Receitas Publicadas{"\n"}
          • 45 Receitas Favoritadas{"\n"}
          • Nível: Master Chef
        </Text>

        {/* Botão para retornar à Home */}
        <View style={styles.botao}>
          <Button
            title="Ir para Home"
            onPress={() => navigation.navigate('Home')}
            color="#007AFF"
          />
        </View>

        {/* Botão para deslogar */}
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