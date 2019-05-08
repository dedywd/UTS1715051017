import React from 'react';
import { StyleSheet, Text,TextInput, View, Button} from 'react-native';


export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.vHeader}>
             <Text style={styles.txtHeader}>{this.props.title}</Text>
             <Text style={styles.txtHead}>I Putu Dedy Wira Darmawan - 1715051017</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 vHeader: {
 flex:1,
 backgroundColor:'#3f51b5',
 alignItems:'center',
 justifyContent:'center',
 },

 txtHeader: {
 color:'#fff',
 fontSize:25,
 margin:-15,
 fontWeight: 'bold'
 },

 txtHead:{
   marginTop: 20,
   color: 'white',
   fontSize: 15
 }

});
