import React from  "react";
import {Linking, Text, TouchableOpacity, Alert} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

class Qr extends React.Component {
  ifScaned = e => {
    Linking.openURL(e.data).catch(err=>
      Alert.alert("Invalid QRCode", e.data));
  }

  render(){
    console.log("dfjd")
    return(

        
      <QRCodeScanner
      containerStyle= {{backgroundColor:"#FFF"}}
      onRead={this.ifScaned}
      reactivate={true}
      permissionDialogMessage="Need Permission to Access Camera"
      reactivateTimeout={10}
      showMarker={true}
      markerStyle={{borderColor:"#FFF", borderRadius:10}}
      bottomContent={
        <TouchableOpacity>
          <Text style={{fontSize:21, color:'rgb(0,122,255)'}}>
            Scan QRCode
          </Text>
        </TouchableOpacity>

      }/>
      
    )
  }
}

export default Qr;
