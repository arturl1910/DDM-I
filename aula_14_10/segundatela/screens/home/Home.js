import { View, Text, Button, Image } from 'react-native';
import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardFormulario}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>Bem-vindo à Home!</Text>
        <Text style={styles.subtitulo}>Você está logado na aplicação.</Text>

        <View style={styles.botao}>
          <Button
            title="Voltar para Login"
            onPress={() => navigation.navigate('Login')}
            color="#007AFF"
          />
        </View>
      </View>
    </View>
  );
}