import React from 'react';
import { StyleSheet, Text,TextInput, View, Button,Image, TouchableHighlight} from 'react-native';
import Header from './Header';

export default class Kurs extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            kode: '',
            rupiah: '',
            hasil: 0,
        }
    }
    getKurs= () => {
                let url = 'http://mhs.rey1024.com/uts/kurs2.php?kode='
                +this.state.kode+'&rupiah='+this.state.rupiah;
                return fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                hasil: responseJson.nilai,
            });
        });
    }
    render() {
        return (
        <View style={styles.vMain}>

        <View style={styles.containerHeader}>
          <Header title="UTS Aplikasi Mobile" />
        </View>

            <View style={styles.vInput}>
                <Text style={styles.text2}>    Kurs rupiah ke mata uang </Text>
                <View style={styles.vItemInput}>
                    <Text style={styles.text2}>Nilai Rupiah               : </Text>
                    <TextInput style={styles.txtInput} keyboardType = 'numeric'
                    onChangeText = { (txtRupiah) => this.setState({rupiah:txtRupiah}) }
                />
                </View>
                <View style={styles.vItemInput}>
                    <Text style={styles.text2}>Kode Mata Uang      : </Text>
                    <TextInput style={styles.txtInput} keyboardType = 'numeric'
                    onChangeText = { (txtKode) => this.setState({kode:txtKode}) }
                    />
                </View>
            </View>
            <View style={styles.vButton}>
                <TouchableHighlight
                    onPressIn={() =>{
                    if(this.state.kode==1 || this.state.kode==2){
                        this.getKurs()
                    }else{
                        this.setState({hasil:'Kode error'})
                        }
                    }}
                    accessibilityLabel="hitung"
                    style={styles.vHitung}>
                    <Text style={styles.txtHeader}>Hitung Kurs</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.vHasil}>
                <View style={styles.vItemInput1}>
                    <Text style={styles.txtLabelInput}>                   {this.state.hasil}</Text>
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

    vInput: {
        flex:2,
        justifyContent:'flex-start',
    },
    vItemInput: {
        flex:1,
        flexDirection:'row',
        margin:10,
        marginTop: 15,
        marginRight: 35,
    },
    vItemInput1: {
        flex:4,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
        marginRight: 35,
    },
    txtLabelInput: {
        flex:2,
        fontSize: 20,
        height: 30,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
        marginTop:10,
        color: 'white'

    },
    txtInput: {
        flex:2,
        marginRight: 30,
        height: 40,
        backgroundColor:'#fff',
        borderColor: 'green',
        borderWidth: 2,
    },
    vButton:{
        flex:0.7,
    },
    vHitung:{
        flex:1,
        backgroundColor:'orange',
        margin:10,
        marginLeft: 15,
        marginRight: 15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
    },
    vHasil:{
        flex:2,
        justifyContent:'center',
        backgroundColor: 'blue',
        margin:10,
        alignItems: 'center'
    },
    txtHeader: {
        fontSize:20,
        color : 'white'
    },
    text:{
        fontSize:20,
        color:'white',
    },
    text2:{
        fontSize:20,
        color:'black',
    },
});
