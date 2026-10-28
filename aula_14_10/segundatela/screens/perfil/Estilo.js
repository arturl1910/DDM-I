import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardFormulario: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 12,
    textAlign: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginTop: 8,
    marginBottom: 4,
  },
  botao: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});