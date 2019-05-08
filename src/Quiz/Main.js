import React from 'react';
import { StyleSheet, Text,TextInput, View, Button} from 'react-native';
import Header from './Header';

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      nama:''
    }
  }

  render() {
    return (
      <View style={styles.vMain} >

        <View style={styles.containerHeader}>
          <Header title="Quiz Aplikasi Mobile" />
          <Header nama="Nama : I Putu Dedy Wira Darmawan" />
        </View>

        <View style={styles.containerButton}>
          <View style={styles.vButton}>
          <View style={styles.itemButton}>
          <Button
              onPress={() => this.props.navigation.navigate('Layar1')}
              title="       Aplikasi Kasir       "
              color="#f44336"
              accessibilityLabel="Aplikasi Kasir"/>
          </View>

          <View style={styles.itemButton}>
          <TextInput style={styles.txtInput} keyboardType = 'default'
          placeholder ='Masukkan Nama'
          onChangeText = {
            (txtNama) => this.setState({nama:txtNama})
          }/>
          </View>

          <View style={styles.itemButton}>
          <Button
              onPress={() => this.props.navigation.navigate('Layar2',{
                nama: this.state.nama
              }
            )}
              title="       Tentang Saya       "
              color="#f44336"
              accessibilityLabel="Tentang Saya"/>
          </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 vMain: {
 flex:1,
 backgroundColor:'white',
 },

 containerHeader: {
 flex:1,
 },

containerButton:{
  flex:4,
  alignItems:'center',
  marginTop:20,
},

vButton:{
  flex:1,
  alignItems:'center',
 },

 itemButton:{
   flexDirection:'row',
   padding:20,
 },

 txtInput: {
 flex:4,
 height:40,
 backgroundColor:'#fff',
 borderColor: 'gray',
 borderWidth: 1
 },

});
