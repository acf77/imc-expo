import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



// or any pure javascript modules available in npm
import { Button } from 'react-native-paper';
import{ TextInput } from 'react-native-paper'

export default class App extends React.Component {
// variaveis globais
state = {
peso: 0,
altura: 0,
imc: 0,
legenda: 'indeterminado',
cor: '#bdc3c7'
};

render() {
  
  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura *    this.state.altura);

this.setState({
  imc: Math.ceil(resultado)
});

if(resultado < 18.5) {
  this.setState({
    legenda: 'Abaixo do Peso',
    cor: '#4bcffa'
  });
} else if (resultado >= 18.5 && resultado < 25) {
  this.setState({
    legenda: 'Normal',
    cor: '#05c46b'
  });
} else if (resultado >= 25 && resultado < 30) {
  this.setState({
    legenda: 'Sobrepeso',
    cor: '#ffa801'
    });
  } else if (resultado >= 30 && resultado < 40) {
  this.setState({
    legenda: 'Obesidade',
    cor: '#ff3f34'
    });
  } else if (resultado >= 40 ) {
  this.setState({
    legenda: 'Obesidade Grave',
    cor: '#575fcf'
  });
  }
  }

  return (
      
      // Cabecalho
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>
      
      <View>
        <TextInput
        style={styles.peso}
        label='Peso (Kg)'
        onChangeText = {valor => {
          this.setState({peso: valor.replace(',','.')});
        }}
        />
        <TextInput
        style={styles.altura}
        label='Altura (m)'
        onChangeText = {valor => {
          this.setState({altura: valor.replace(',','.')});
        }}
        />
        <Button mode = "contained" onPress = {calcularIMC}>Calcular</Button>
      </View>

    </View>  
    );
  }
}

//Estilo e design
const styles = StyleSheet.create({
  app: {
    padding: 20,
  },
  painel:{
    backgroundColor: '#bdc3c7',
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 10,
    width: 150,
    alignSelf: 'center',
  },
  legenda: {
    textAlign:'center',
    fontWeight: 'bold',
  },
    resultado: {
      textAlign: 'center',
      fontSize: 26,
      fontWeight: 'bold',
    },
    diagnostico:{
      textAlign: 'center',
      fontSize: 16,
    },
    peso: {
      marginVertical: 10,
    },
    altura: {
      marginVertical: 10,
    }
});
