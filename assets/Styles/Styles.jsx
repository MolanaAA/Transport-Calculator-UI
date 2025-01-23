import { StyleSheet } from "react-native"


const Style = StyleSheet.create({
    nextButton: {
        paddingVertical: 10,
        backgroundColor:'#0081B3',
        width: 350,
        borderRadius: 10,
        marginTop: 15

    },
    nextButtonText: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '800',
        color: 'white',

    },
    half1:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1F7FF'
      },
      half2: {
        flex: 3,
        paddingTop: 30,
        
        backgroundColor:'#FFFFFF',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35
      },
      image:{
        width: 250,
        height: 250,
      },
      heading:{
        fontSize: 20,
        fontWeight: 800,
        marginLeft: 60
      },
      input: {
        marginTop: 20,
        backgroundColor: '#E1F7FF',
        width: 329,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0081B3',
        paddingLeft: 20,
        color: '#83838380'
      },
      text: {
        fontSize: 15 , 
        fontWeight: '700',
        marginTop: 5
      },
      internalText:{
        fontSize: 12 , 
        fontWeight: '700',
        marginTop: 10
      },
      inputCal:{
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        width: 350,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0081B3',
        paddingLeft: 20,
        color: '#83838380',
        fontSize: 12 ,
      },
      slider: {
        width: '110%',
        height: 40,
      },

      inputCalAmor:{
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        width: 100,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        paddingLeft: 10,
        color: '#83838380',
        fontSize: 12 ,
      },
    
})

export default Style;