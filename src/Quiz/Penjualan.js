import React from 'react';
import { View, Text, Button, StyleSheet, TextInput,} from 'react-native';
import Header from './Header';


export default class Penjualan extends React.Component {
  constructor(props){
    super(props);
    this.state={
      jumlah:0,
      harga:0,
      jenis:0,
      total:0,
      diskon:'',
      bayar:''
    }
  }

  render() {
    return (
      <View style={styles.vMain} >

      <View style={styles.containerHeader}>
        <Header title="App Kasir Mobile" />
        <Header nama="Nama : I Putu Dedy Wira Darmawan" />
      </View>

        <View style={styles.vInput}>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Jumlah Belanja</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = {
              (txtJumlah) => this.setState({jumlah:txtJumlah})
            }
            />
          </View>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Harga Barang</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = {
              (txtHarga) => this.setState({harga:txtHarga})
            }
            />
          </View>
          <View style={styles.vItemInput}>
            <Text style={styles.txtLabelInput}>Jenis Barang</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = {
              (txtJenis) => this.setState({jenis:txtJenis})
            }
            />
          </View>

        </View>

        <View style={styles.vItemButton}>
          <Button
          onPress={() => {
            this.setState({
                total: this.state.jumlah * this.state.harga,
            });

            if(this.state.jenis==1)
            {
                this.setState({
                  diskon: (5/100) * this.state.total,
                  bayar: this.state.total - this.state.diskon
                });

            }
            else if(this.state.jenis==2)
            {
                this.setState({
                  diskon: (7/100) * this.state.total,
                  bayar: this.state.total - this.state.diskon
                });
            }

          }}
          color="#0D47A1"
          title="Hitung Total Belanja"
          accessibilityLabel="Hitung"/>
        </View>

        <View style={styles.vHasil}>
          <Text style={styles.txtDataHasil}>Total Belanja Adalah </Text>
          <Text style={styles.txtDataHasil}>Diskon : {this.state.diskon}</Text>
          <Text style={styles.txtDataHasil}>Bayar : {this.state.bayar}</Text>
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
 backgroundColor:'white',
 margin: 10
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
