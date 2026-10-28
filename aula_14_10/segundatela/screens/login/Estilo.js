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
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 16,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '600',
    color: '#3A3A3C',
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  botao: {
    width: '100%',
    marginTop: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
});