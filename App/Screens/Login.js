import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import app from './../../assets/Images/app.jpg'
import Colors from '../../assets/Shared/Colors'

export default function login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={app}
      style={styles.appImage}
      />
      <View style={{backgroundColor:Colors.white,
      padding:25,
      alignItems:'center',
      marginTop:-50
      
      }}>
        <Text style={styles.heading}>MyHealEx, mental health made easy</Text>
        <Text style={styles.heading}>Appointment Booking System</Text>
        <Text style={{textAlign:'center', 
        marginTop:20
        }}>Book your Appointment now</Text>
        <View style={{padding: 16, backgroundColor: Colors.peach, borderRadius: 90, alignItems: 'center', marginTop: 20,
        width: Dimensions. get ('screen'). width*0.8,
        }}>
<Text style={{fontSize: 17, color: Colors. white
}}>Login using Google</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appImage:{
    width:300,
    height:600,
    objectFit:'contain',
    marginTop: 50
  },
  heading:{
    fontSize:25
  }
  
})