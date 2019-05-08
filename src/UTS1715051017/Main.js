import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,TouchableHighlight,Image} from 'react-native';
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
          <Header title="UTS Aplikasi Mobile" />
        </View>


        <Image source={{uri: 'http://mhs.rey1024.com/uts/react.png'}}
        style={{width: 150, height: 150, marginLeft: 100}}/>


        <View style={styles.containerForm}>
          <View style={styles.txtForm}>
            <Text style={styles.txtHead}>Nama : </Text>
          </View>
          <View style={styles.itemForm}>
          <TextInput style={styles.txtInput} keyboardType = 'default'
          placeholder ='Masukkan Nama'
          onChangeText = {
            (txtNama) => this.setState({nama:txtNama})
          }/>
          </View>
        </View>

        <View style={styles.containerButton}>
          <View style={styles.vButton}>
          <View style={styles.itemButton}>
            <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Layar1',{ nama: this.state.nama })}
                accessibilityLabel="Kesehatan"
                style={styles.vItemMenu}>
                <Text style={styles.text}>Kesehatan</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.itemButton}>
          <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Layar3')}
              accessibilityLabel="Cek Nilai Tukar Rp"
              style={styles.vItemMenu}>
              <Text style={styles.text}>Cek Nilai Tukar Rp</Text>
          </TouchableHighlight>
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

 containerForm: {
 flex:1,
 flexDirection: 'row',
 },

 itemForm:{
   flex:3,
   backgroundColor: 'white',
   margin:20
 },

 txtForm:{
   flex:1,
   backgroundColor: 'white',
   margin:20,
   justifyContent: 'center'
 },

containerButton:{
  flex:3,
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

 vItemMenu:{
        backgroundColor:'#8bc34a',
        margin:2,
        alignItems:'center',
        justifyContent:'center',
        height: 80,
        width: 300,
        borderRadius: 10
},

text:{
      fontSize:20,
      color:'white',
}

});
