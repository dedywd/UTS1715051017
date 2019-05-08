import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,Image} from 'react-native';
import Header from './Header';


export default class About extends React.Component {

  render() {
    const { navigation } = this.props;
    const nama = navigation.getParam('nama');

    return (
      <View style={styles.vMain} >

      <View style={styles.containerHeader}>
        <Header title="About This App" />
        <Header nama="Nama : I Putu Dedy Wira Darmawan" />
      </View>

        <View style={styles.vAbout}>
          <View style={styles.vItemAbout}>
            <Image style={styles.gambar} source={require('../images/bio.jpg')}/>
            <View style={styles.vBiodata}>
              <Text style={styles.textBio}><Text>nama: {JSON.stringify(nama)}</Text></Text>
              <Text style={styles.textBio}>Tanggal Lahir: 28 Juni 1999</Text>
              <Text style={styles.textBio}>Alamat: Singaraja</Text>
            </View>
          </View>
        </View>

        <View style={styles.vMotto}>
          <Text style={styles.textMotto}>Hidup seperti Larry</Text>
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

 vAbout: {
 flex:2,
 backgroundColor:'white',

 },

 vItemAbout: {
 flexDirection:'row',
 },

 gambar: {
   flex: 1,
   backgroundColor: 'white',
   margin: 15,
   height: 160,
   width: 160,
   borderRadius: 100
 },

 vBiodata: {
   flex: 1,
   backgroundColor: 'white',
   marginTop: 15
 },

 textBio: {
 marginLeft: 5,
 marginTop: 15,
 marginRight: 5,
 borderColor: 'gray',
 },

 vMotto: {
   backgroundColor:'#c5cae9',
   flex: 2,
   alignItems:'center',
   justifyContent:'center',
   margin: 15,
 },

 textMotto:{
   fontSize: 25,
 }

});
