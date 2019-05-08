import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,Image} from 'react-native';
import Header from './Header';


export default class About extends React.Component {

render(){

    return (
      <View style={styles.vMain} >

      <View style={styles.containerHeader}>
        <Header title="About Me" />
      </View>

        <View style={styles.vAbout}>
          <View style={styles.vItemAbout}>
            <Image style={styles.gambar} source={require('../images/bio.jpg')}/>
            <View style={styles.vBiodata}>
              <Text style={styles.textBio}><Text>Nama: I Putu Dedy Wira Darmawan</Text></Text>
              <Text style={styles.textBio}>NIM: 1715051017</Text>
            </View>
          </View>
        <Image style={styles.gambar2} source={require('../images/programming.png')}/>
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
 flex:4,
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

 gambar2: {
   flex: 2,
   backgroundColor: 'white',
   margin: 15,
   height: 160,
   width: 330,
 },

 vBiodata: {
   flex: 1,
   backgroundColor: 'white',
   marginTop: 25
 },

 textBio: {
 marginLeft: 5,
 marginTop: 15,
 marginRight: 5,
 fontWeight: 'bold'
 },

});
