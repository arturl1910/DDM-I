import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container principal ocupa a tela toda e centraliza o formulário
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  // O "retângulo" (cartão) do formulário
  cardFormulario: {
    width: '100%',
    maxWidth: 400,          // Limita a largura máxima em telas maiores
    backgroundColor: '#fff',
    borderRadius: 12,       // Bordas arredondadas
    padding: 25,            // Espaçamento interno
    // Sombra para dar destaque (iOS e Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,           // Sombra para Android
  },
  imagem: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 16,
  },
  botao: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default styles;