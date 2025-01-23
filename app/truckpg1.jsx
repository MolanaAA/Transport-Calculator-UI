import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from '../assets/Styles/Styles';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from 'expo-router';

const TruckCal1 = (props) => {

  const navigation = useNavigation();

  const [Tfuel, setTFuel] = useState(18);
  const [TfuelWL, setTFuelWL] = useState(28);
  const [Topen, setTOpen] = useState(false);
  const [Tvalue, setTValue] = useState(null);
  const [Ttyre , setTTyre] = useState(80000);
  const [Tmain , setTMain] = useState(20000);
  const [Tunmain , setTUnmain] = useState(20000);
  const [TroadTaxDD, setTroadTaxDD] = useState([
    { label: '1 Day', value: '1' },
    { label: '10 Days', value: '10' },
    { label: '1 Month', value: '30' },
    { label: '2 Months', value: '60' },
    { label: '3 Months', value: '90' },
    { label: '6 Months', value: '180' },
    { label: '1 Year', value: '365' },
  ]);

  const [TinsuranceDD, setTInsuranceDD] = useState([
    { label: '1 Day', value: '1' },
    { label: '10 Days', value: '10' },
    { label: '1 Month', value: '30' },
    { label: '2 Months', value: '60' },
    { label: '3 Months', value: '90' },
    { label: '6 Months', value: '180' },
    { label: '1 Year', value: '365' },
  ]);

  const [TgitDD, setTgitDD] = useState([
    { label: '1 Day', value: '1' },
    { label: '10 Days', value: '10' },
    { label: '1 Month', value: '30' },
    { label: '2 Months', value: '60' },
    { label: '3 Months', value: '90' },
    { label: '6 Months', value: '180' },
    { label: '1 Year', value: '365' },
  ]);

  const [TsubDD, setTSubDD] = useState([
    { label: '1 Day', value: '1' },
    { label: '10 Days', value: '10' },
    { label: '1 Month', value: '30' },
    { label: '2 Months', value: '60' },
    { label: '3 Months', value: '90' },
    { label: '6 Months', value: '180' },
    { label: '1 Year', value: '365' },
  ]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#E1F7FF', paddingHorizontal: 20 }}
      keyboardShouldPersistTaps="handled" // Ensures taps on dropdown work properly
      nestedScrollEnabled = {true}// Allows nested scrolling
    >
      <View>
        <Text style={Styles.text}>1. Transport expenses:</Text>
        <Text style={Styles.text}> Fuel Cost Per Litre: </Text>
        <View>
          <TextInput style={Styles.inputCal} 
          placeholder="Example: 1.65 EUR"
           />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Fuel consumption without load:</Text>
        <Text style={styles.description}>
          Adjust the slider based on the vehicle's consumption without load (liters/100 km)
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Slider
            style={Styles.slider}
            minimumValue={18}
            maximumValue={30}
            step={1}
            value={Tfuel}
            onValueChange={(Tfuel) => setTFuel(Tfuel)}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1EB1FC"
          />
        </View>
        <Text>{Tfuel} Liter</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Fuel consumption with maximum load (24 tons):</Text>
        <Text style={styles.description}>
          Adjust the slider based on the vehicle's consumption at maximum load (liters/100 km)
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Slider
            style={Styles.slider}
            minimumValue={28}
            maximumValue={45}
            step={1}
            value={TfuelWL}
            onValueChange={(TfuelWL) => setTFuelWL(TfuelWL)}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1EB1FC"
          />
        </View>
        <Text>{TfuelWL} Liter</Text>
      </View>

      <View>
        <Text style={[Styles.text, { marginTop: 15 }]}>Driver's salary per month:</Text>
        <Text style={[Styles.text, { fontWeight: '400' }]}>Enter "0" if you own the vehicle</Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 2800 EUR" />
        </View>
      </View>

      <View>
        <Text style={[Styles.text, { marginTop: 15 }]}>Road tax (toll) cost:</Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 50 EUR" keyboardType='numeric' />
          <DropDownPicker 
            open={Topen}
            value={Tvalue}
            items={TroadTaxDD}
            setOpen={setTOpen}
            setValue={setTValue}
            setItems={setTroadTaxDD}
            style={{
              borderColor: '#0081B3',
              borderRadius: 10,
              marginTop: 15,
              paddingVertical: 5,
            }}
            dropDownContainerStyle={{
              borderColor: '#0081B3',
              borderRadius: 10,
            }}
            listMode="SCROLLVIEW" // Ensures compatibility within ScrollView
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Tire cost:</Text>
        <Text style={styles.description}>
        Enter the cost of a single tire
        </Text>
        <TextInput style={Styles.inputCalAmor} placeholder='Ex: 100 EUR' />
        <Text style={[styles.title , {marginTop: 10}]}>Tire amortization costs interval:</Text>
        <Text style={styles.description}>
        By moving the slider, you can adjust the mileage range for amortizing the cost of the 12 tires.
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Slider
            style={Styles.slider}
            minimumValue={80000}
            maximumValue={220000}
            step={10000}
            value={Ttyre}
            onValueChange={(Ttyre) => setTTyre(Ttyre)}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1EB1FC"
          />
        </View>
        <Text>{Ttyre} km</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Maintenance Service Costs:</Text>
        <TextInput style={Styles.inputCalAmor} placeholder='Ex: 1500 EUR' />
        <Text style={[styles.title , {marginTop: 10}]}>Maintenance service cost amortization:</Text>
        <Text style={styles.description}>
        By moving the slider, you can adjust the mileage range for amortizing the maintenance cost.
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Slider
            style={Styles.slider}
            minimumValue={20000}
            maximumValue={60000}
            step={5000}
            value={Tmain}
            onValueChange={(Tmain) => setTMain(Tmain)}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1EB1FC"
          />
        </View>
        <Text>{Tmain} km</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Unexpected  maintenance Service Costs:</Text>
        <TextInput style={Styles.inputCalAmor} placeholder='Ex: 1500 EUR' />
        <Text style={[styles.title , {marginTop: 10}]}>Unexpected maintenance service cost amortization:</Text>
        <Text style={styles.description}>
        By moving the slider, you can adjust the mileage range for amortizing the unexpected maintenance cost.
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Slider
            style={Styles.slider}
            minimumValue={20000}
            maximumValue={60000}
            step={5000}
            value={Tunmain}
            onValueChange={(Tunmain) => setTUnmain(Tunmain)}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1EB1FC"
          />
        </View>
        <Text>{Tunmain} km</Text>
      </View>

      <View>
        <Text style={[Styles.text, { marginTop: 15 }]}>Motor Third-Party Liability Insurance (MTPL)</Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 600 EUR" keyboardType='numeric' />
          <DropDownPicker 
            open={Topen}
            value={Tvalue}
            items={TinsuranceDD}
            setOpen={setTOpen}
            setValue={setTValue}
            setItems={setTInsuranceDD}
            style={{
              borderColor: '#0081B3',
              borderRadius: 10,
              marginTop: 15,
              paddingVertical: 5,
            }}
            dropDownContainerStyle={{
              borderColor: '#0081B3',
              borderRadius: 10,
            }}
            listMode="SCROLLVIEW" // Ensures compatibility within ScrollView
          />
        </View>
      </View>

      <View>
        <Text style={[Styles.text, { marginTop: 15 }]}>Goods in transit insurance (GIT):</Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 300 EUR" keyboardType='numeric' />
          <DropDownPicker 
            open={Topen}
            value={Tvalue}
            items={TgitDD}
            setOpen={setTOpen}
            setValue={setTValue}
            setItems={setTgitDD}
            style={{
              borderColor: '#0081B3',
              borderRadius: 10,
              marginTop: 15,
              paddingVertical: 5,
            }}
            dropDownContainerStyle={{
              borderColor: '#0081B3',
              borderRadius: 10,
            }}
            listMode="SCROLLVIEW" // Ensures compatibility within ScrollView
          />
        </View>
      </View>

      <View>
        <Text style={Styles.text}>2. Logistics service costs:</Text>
        <Text style={Styles.text}> Courier costs per month: </Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 20 EUR" />
        </View>
      </View>

      <View>
        <Text style={[Styles.text, { marginTop: 15 }]}>Subscription costs for logistics services:</Text>
        <View>
          <TextInput style={Styles.inputCal} placeholder="Ex: 100 EUR" keyboardType='numeric' />
          <DropDownPicker 
            open={Topen}
            value={Tvalue}
            items={TsubDD}
            setOpen={setTOpen}
            setValue={setTValue}
            setItems={setTSubDD}
            style={{
              borderColor: '#0081B3',
              borderRadius: 10,
              marginTop: 15,
              paddingVertical: 5,
            }}
            dropDownContainerStyle={{
              borderColor: '#0081B3',
              borderRadius: 10,
            }}
            listMode="SCROLLVIEW" // Ensures compatibility within ScrollView
          />
        </View>
      </View>

      <View style= {{ alignItems: 'center' }} >
        <TouchableOpacity onPress={() => navigation.navigate('truckpg2')} 
        style= {Styles.nextButton}>
          <Text style= {Styles.nextButtonText}> Go to Calculator </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}
         style= {[Styles.nextButton , {marginBottom: 40}]}>
          <Text style= {Styles.nextButtonText}> Back to Start Page </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default TruckCal1;

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
  },
});
