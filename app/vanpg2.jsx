import { View, Text, TouchableOpacity , ScrollView , StyleSheet , TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import Styles from '../assets/Styles/Styles';
import Slider from '@react-native-community/slider';

const TruckCal2 = () => {
    const navigation = useNavigation();
    const [Vprofit, setVProfit] = useState(10);
    return (
      <ScrollView
            style={{ flex: 1, backgroundColor: '#E1F7FF', paddingHorizontal: 20 }}
            keyboardShouldPersistTaps="handled" // Ensures taps on dropdown work properly
            nestedScrollEnabled // Allows nested scrolling
          >
          
          <View>
        <Text style={[Styles.text , { marginTop: 20 }]}> Mileage for Trip </Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 280 km" />
        </View>
      </View>

      <View>
        <Text style={[Styles.text , { marginTop: 10 }]}> Transport Tonnage </Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 2.4 Tons" />
        </View>
      </View>

      <View>
        <Text style={[Styles.text , { marginTop: 10 }]}> Number of Days of Delivery </Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 2 days" />
        </View>
      </View>

      <View>
        <Text style= { styles.description}> Enter the total number of days required to load and unload the goods </Text>
      </View>

      <View>
        <Text style={[Styles.text , { marginTop: 10 }]}> Fuel Consumption: </Text>
        <Text style={[styles.description , { marginTop: 10 }]}> Average fuel consumption/100km: {} Liters</Text>
        <Text style={[styles.description , { marginTop: 10 }]}> Total fuel consumption: {} Liters </Text>
      </View>

      <View>
        <Text style={[Styles.text , { marginTop: 10 }]}> Costs: </Text>
        <Text style={[styles.description , { marginTop: 10 }]}> Total Transport Expenses: {} EUR</Text>
        <Text style={[styles.description , { marginTop: 10 }]}> Profit for this Trip: {} EUR </Text>
        <Text style={[styles.description , { marginTop: 10 }]}> Net Amount for this Trip: {} EUR </Text>
      </View> 

      <View style={styles.card}>
        <Text style={styles.title}>Fuel consumption with maximum load (24 tons):</Text>
        <Text style={styles.description}>
          Adjust the slider based on the vehicle's consumption at maximum load (liters/100 km)
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Slider
            style={styles.slider}
            minimumValue={10}
            maximumValue={70}
            step={1}
            value={Vprofit}
            onValueChange={(Vprofit) => setVProfit(Vprofit)}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1EB1FC"
          />
        </View>
        <Text>{Vprofit} %</Text>
      </View>

      <View>
        <Text style={[styles.description , { marginTop: 10 ,  }]}> 
        The calculated profit  Refers to the Partial recovery Related only to this trip ,and the selected profit margin, ensure additional earnings beyond the total costs.  
          </Text>
      </View>

      <View style= {{ alignItems: 'center' }} >
        <TouchableOpacity 
        style= {Styles.nextButton}>
          <Text style= {Styles.nextButtonText}> Calculate Costs and Profit </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}
         style= {[Styles.nextButton , {marginBottom: 40}]}>
          <Text style= {Styles.nextButtonText}> Back to Expenses </Text>
        </TouchableOpacity>
      </View>
        
      </ ScrollView>
  );
};

export default TruckCal2;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#0081B3',
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 20
  },
  slider: {
        width: '110%',
        height: 40,
  }
});