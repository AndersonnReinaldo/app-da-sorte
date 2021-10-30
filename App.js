// @Autor:  Anderson Reinaldo
import React,{ useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function meuApp() {

  const [image, setImage] = useState(require('./src/assets/image/biscoito.png'));
  const [texto, setTexto] = useState('');
  
  let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

    function quebrarBiscoito(){
        setImage(require('./src/assets/image/biscoitoAberto.png'));
        const msgSort = Math.floor(Math.random() * frases.length);
        setTexto(`" ${frases[msgSort]} "`);
    }


  return (
    <View style={styles.container}>

        <Image style={styles.imgBiscoito} source={image}/> 
       
            <Text style={styles.msg}>{texto}</Text>
            
        <View>
         <TouchableOpacity style={[styles.buttonBiscoito, styles.borderColorBiscoito]} onPress={() => quebrarBiscoito()}>
           <Text style={styles.textBiscoito}>Quebrar Biscoito</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={[styles.buttonBiscoito, styles.borderColorBiscoitoQuebrado]} onPress={() => {setImage(require('./src/assets/image/biscoito.png')) , setTexto('')}}>
           <Text style={styles.textBiscoitoQuebrado}>Reiniciar Biscoito</Text>
         </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center' 
    },
    imgBiscoito:{
      width: 230,
      height: 230,
    },
    containerTexto:{
      flex:1,
      alignItems: 'center',
      fontStyle:'italic',
      marginTop:50,
    },
    msg:{
      fontSize: 20,
      color: '#dd7b22',
      margin: 30,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    buttonBiscoito:{
      width: 250,
      height: 50,
      borderColor: '#dd7b22',
      borderWidth: 2,
      borderRadius: 25
    },
    borderColorBiscoito:{
      borderColor: '#dd7b22'
    },
    borderColorBiscoitoQuebrado:{
      marginTop:15,
      borderColor: '#121212'
    },
    textBiscoito:{
      marginTop:10,
      textAlign:'center',
      fontSize: 17,
      fontWeight: 'bold',

    },
    textBiscoitoQuebrado:{
      marginTop:10,
      color:'#121212',
      fontSize:17,
      textAlign: 'center'
    }
})