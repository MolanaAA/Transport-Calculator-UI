import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import Style from '../assets/Styles/Styles';
import Checkbox from 'expo-checkbox';
import { useNavigation } from 'expo-router';

const Login = () => {
    const navigation = useNavigation();
    const [select, setSelect] = useState(false);

    const handleLogin = () => {
        navigation.navigate('home');
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#E1F7FF' }}>
            <View style={Style.half1}>
                <Image 
                    source={require('../assets/images/react-logo.png')}
                    style={Style.Image}
                />
            </View>
            <View style={Style.half2}>
                <View>
                    <Text style={Style.heading}>Sign In</Text>
                </View>
                <View style={styles.innercontainer}>
                    <TextInput 
                        style={Style.input} 
                        placeholder='Enter Email' 
                        keyboardType='email-address'
                    />
                    <TextInput 
                        style={Style.input} 
                        placeholder='Enter Password' 
                        textContentType='password' 
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.forget}>
                    <View style={styles.checkBox}>
                        <Checkbox 
                            value={select}
                            onValueChange={setSelect}
                        />
                        <Text style={{ paddingLeft: 10 }}> Remember Me </Text>
                    </View>
                    <Pressable>
                        <Text> Forgot Password? </Text>
                    </Pressable>
                </View>

                <View style={styles.buttoncontainer}>
                    <TouchableHighlight onPress={handleLogin} style={Style.nextButton}>
                        <Text style={Style.nextButtonText}> Login </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={Style.nextButton}>
                        <Text style={Style.nextButtonText}> Register </Text>
                    </TouchableHighlight>
                </View>

                <Pressable style={styles.contact}>
                    <Text style={styles.contactText}> Contact us </Text>
                    <Text style={styles.contactTexts}> v1.0.0 </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    innercontainer: {
        alignItems: 'center',
    },
    forget: {
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 32,
        justifyContent: 'space-between',
    },
    checkBox: {
        flexDirection: 'row',
    },
    buttoncontainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    contact: {
        marginTop: 50,
        alignItems: 'center',
    },
    contactText: {
        fontSize: 12,
        fontWeight: '900',
    },
    contactTexts: {
        fontSize: 12,
        fontWeight: '400',
    },
});
