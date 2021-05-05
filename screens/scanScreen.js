import  React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{

    constructor(){
        super();
        this.state = {
hasCameraPermissions:null,
scanned:false,
scannedData:'',
buttonState:'normal'
        }
    }
 
        getCameraPermission= async () => {
            const {status}= await Permissions.askAsync (Permissions.CAMERA);
this.setState({
    hasCameraPermissions: status=== 'granted',
    buttonState:'clicked',
    scanned:false
})
}
handleBarCodeScanned = async ({type,data}) => {
   this.setState({
       scanned: true,
       scannedData:data,
       buttonState:'normal'
   })  
}
render(){
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;

    if(buttonState==="clicked"){
        return(
            <BarCodeScanner  onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            />
        )
    }
    else if(buttonState==="normal"){
        return(
            <View style={styles.container}>
      <Text style={styles.displayText}>{
            hasCameraPermissions===true ? this.state.scannedData: "Request Camera Permission"
          }</Text>     

          <TouchableOpacity
            onPress={this.getCameraPermissions}
            style={styles.scanButton}
            title="Bar Code Scanner"
            >
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>

            </View>   
        )
    }
}
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      displayText:{
        fontSize: 15,
        fontFamily:"Arial Rounded MT Bold"
      },
      scanButton:{
        backgroundColor:"crimson",
        padding: 10,
        margin: 10,
        width:150,
        height:110
      },
      buttonText:{
        fontSize: 20,
        fontStyle:"bold"
      }
})