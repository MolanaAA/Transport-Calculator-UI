
import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/Styles/Styles';



const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#E1F7FF' }}>
      <View style={{ flex: 1 }} >
        <View style={Style.half1} >
          <Image
            source={(require('../assets/images/react-logo.png'))}
            style={Style.image}

          />
        </View >
        <View style={Style.half2} >
          <View style={Styles.buttoncontainer} >
            <TouchableOpacity style={Style.nextButton} onPress={() => navigation.navigate('truckpg1')}>
              <Text style={Style.nextButtonText}> Calculator for 24 Ton - Truck </Text>
            </TouchableOpacity>

            <TouchableHighlight style={Style.nextButton} onPress={() => navigation.navigate('vanpg1')} >
              <Text style={Style.nextButtonText}> Calculator for 3.5 Ton - Van </Text>
            </TouchableHighlight>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
              <Text style={{ flex: 1, textAlign: 'center', marginHorizontal: 50  , fontSize: 12}}>
                <Text style={{ fontWeight: 'bold' }}>Note</Text> The application is preset with balanced parameters for cost amortization and profit. These settings help maximize negotiation success by providing a balance between profit and cost recovery. Adjust them as needed!
              </Text>
            </View>

          </View>
        </View>
      </View>
    </View>
  );
}



const Styles = StyleSheet.create({
  buttoncontainer: {
    alignItems: 'center',
    marginTop: 20
  }
})

export default Home;