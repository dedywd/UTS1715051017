import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,Image, TouchableHighlight} from 'react-native';
import Header from './Header';


export default class Kesehatan extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tahunlahir:0,
      berat:0,
      tinggi:0,
      umur:0,
      bmi:0,
      ket:''
    }
  }
  render() {
    const { navigation } = this.props;
    const nama = navigation.getParam('nama');

    return (
      <View style={styles.vMain} >

        <View style={styles.containerHeader}>
          <Header title="UTS Aplikasi Mobile" />
        </View>

        <View style={styles.vInput}>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Tahun Lahir</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = {
              (txtTahunLahir) => this.setState({tahunlahir:txtTahunLahir})
            }/>
          </View>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Berat Bdn</Text>
            <TextInput style={styles.txtInput}
            placeholder ='Masukkan Dalam Satuan kg'
            keyboardType = 'numeric'
            onChangeText = {
              (txtBeratBdn) => this.setState({berat:txtBeratBdn})
            }/>
          </View>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Tinggi Bdn</Text>
            <TextInput style={styles.txtInput}
            placeholder ='Masukkan Dalam Satuan m'
            keyboardType = 'numeric'
            onChangeText = {
              (txtTinggiBdn) => this.setState({tinggi:txtTinggiBdn})
            }/>
          </View>

        </View>

        <View style={styles.vItemButton}>
          <Button
          onPress={() => {
            let umur = 2019 - this.state.tahunlahir;
            this.setState({umur:umur});

            let bmi = this.state.berat/(this.state.tinggi*this.state.tinggi);
            this.setState({bmi:bmi})

            if(this.state.bmi>30.0)
            {
                this.setState({ket:'Kegemukan'});
            }
            else if(this.state.bmi <=29.9 && this.state.bmi >=25.0)
            {
                this.setState({ket:'Kelebihan'});
            }
            else if(this.state.bmi <= 24.9 && this.state.bmi >=18.5)
            {
                this.setState({ket:'Normal'});
            }
            else if(this.state.bmi < 18.4)
            {
                this.setState({ket:'Kurus'});
            }
            ;
          }}

          color="#8bc34a"
          title="Hitung Ideal"
          accessibilityLabel="Hitung Ideal"/>
        </View>

        <View style={styles.vHasil}>
          <Text style={styles.txtDataHasil}>Halo {JSON.stringify(nama)},
          umur Anda adalah {this.state.umur}
          , BMI {this.state.bmi}, {this.state.ket}</Text>
        </View>

        <View style={styles.containerButton}>
          <View style={styles.Button}>
            <View style={styles.itemButton2}>
            <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Layar2')}
                accessibilityLabel="Profil Saya"
                style={styles.vItemMenu}>
                <Text style={styles.text}>Profil Saya</Text>
            </TouchableHighlight>
            </View>
            <View style={styles.itemButton2}>
            <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Main')}
                accessibilityLabel="Back"
                style={styles.vItemMenu}>
                <Text style={styles.text}>Back</Text>
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

 containerButton:{
   flex:1,
   backgroundColor:'white'
 },

 Button:{
   flexDirection: 'row'
 },

 itemButton2:{
   flex:1
 },

 vItemMenu:{
        backgroundColor:'#8bc34a',
        margin:15,
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        width: 150,
 },

 text:{
      fontSize:20,
      color:'white',
 },

 vInput: {
 flex:2,
 backgroundColor:'white',
 justifyContent:'center',
 alignItems:'center',
 margin: 10
 },

 vItemInput: {
 flexDirection:'row',
 margin:10,
 },

 txtLabelInput: {
 flex:2,
 height:40,
 marginLeft:10
 },

 txtInput: {
 flex:4,
 height:40,
 backgroundColor:'#fff',
 borderColor: 'gray',
 borderWidth: 1
 },

 vItemButton: {
 flex:1,
 margin: 10,
 justifyContent:'center'
 },

 vHasil: {
 flex:2,
 backgroundColor:'#64b5f6',
 margin: 10
 },

 vItemHasil: {
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
 margin:10,
 },

 txtLabelHasil: {
 flex:2,
 height:40,
 marginLeft:10
 },

 txtDataHasil: {
   margin: 10
 },

 txtHasil: {
 flex:4,
 height:40,
 backgroundColor:'#fff',
 borderColor: 'gray',
 borderWidth: 1,
 marginLeft:15
 },

});
