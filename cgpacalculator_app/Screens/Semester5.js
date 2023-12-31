import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native'
import { useRef } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'

const Semester5 = () => {

  const [iot,set_iot]=useState('0')
  const [toc,set_toc]=useState('0')
  const [cn,set_cn]=useState('0')
  const [mpmc,set_mpmc]=useState('0')
  const [st,set_st]=useState('0')
  const [coi,set_coi]=useState('0')
  const [cns,set_cns]=useState('0')
  const [nl,set_nl]=useState('0')
  const [ts,set_ts]=useState('0')
  const [iotl,set_iotl]=useState('0')
  const [mpmcl,set_mpmcl]=useState('0')
  const [gpa5,set_gpa5]=useState('')

  const Cgpa5=()=>{

  }

  const PickerRef=useRef();

  function open(){
  PickerRef.current.focus();
  }
  
  function close(){
  PickerRef.current.blur();
  }
  
  
    const navigation=useNavigation();
    const opendrawer=()=>{
      navigation.openDrawer();
    }
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="inverted"/>
      <SafeAreaView style={styles.container2}>
        <SafeAreaView style={styles.header_align}>
          <TouchableOpacity onPress={opendrawer} style={styles.touchablebutton} >
            <Ionicons name="reorder-three-outline" size={40} color="white"></Ionicons>
          </TouchableOpacity>
          <Text style={styles.header}>Semester 5</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Internet of Things</Text>
          <Picker ref={PickerRef} 
          selectedValue={iot}
          onValueChange={(itemvalue)=>set_iot(itemvalue)}
          style={styles.picker}>
              <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Theory of Computation</Text>
          <Picker ref={PickerRef}
          selectedValue={toc}
          onValueChange={(itemvalue)=>set_toc(itemvalue)}
          style={styles.picker}>
              <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Computer Networks</Text>
          <Picker ref={PickerRef} 
          selectedValue={cn}
          onValueChange={(itemvalue)=>set_cn(itemvalue)}
          style={styles.picker}><Picker.Item label="Select an Option" value="0"/>
          <Picker.Item label="O" value="10"/>
          <Picker.Item label="A+" value="9"/>
          <Picker.Item label="A" value="8"/>
          <Picker.Item label="B+" value="7"/>
          <Picker.Item label="B" value="6"/>
          <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Microprocessor and Microcontroller</Text>
          <Picker ref={PickerRef}
          selectedValue={mpmc}
          onValueChange={(itemvalue)=>set_mpmc(itemvalue)}
          style={styles.picker}>
            <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Software Testing</Text>
          <Picker ref={PickerRef} 
          selectedValue={st}
          onValueChange={(itemvalue)=>set_st(itemvalue)}
          style={styles.picker}>
              <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Constitution of India</Text>
          <Picker ref={PickerRef}
          selectedValue={coi}
          onValueChange={(itemvalue)=>set_coi(itemvalue)}
          style={styles.picker}>
              <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Cryptography and Network Security (Optional)</Text>
          <Picker ref={PickerRef}
          selectedValue={cns}
          onValueChange={(itemvalue)=>set_cns(itemvalue)}
          style={styles.picker}>
              <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Networks Laboratory</Text>
          <Picker ref={PickerRef}
          selectedValue={nl}
          onValueChange={(itemvalue)=>set_nl(itemvalue)}
          style={styles.picker}>
            <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Technical Seminar</Text>
          <Picker ref={PickerRef}
          selectedValue={ts}
          onValueChange={(itemvalue)=>set_ts(itemvalue)}
          style={styles.picker}>
              <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Internet of Things Laboratory (Optional)</Text>
          <Picker ref={PickerRef}
          selectedValue={iotl}
          onValueChange={(itemvalue)=>set_iotl(itemvalue)}
          style={styles.picker}>
              <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Microprocessor and Microcontroller Laboratory (Optional)</Text>
          <Picker ref={PickerRef}
          selectedValue={mpmcl}
          onValueChange={(itemvalue)=>set_mpmcl(itemvalue)}
          style={styles.picker}>
            <Picker.Item label="Select an Option" value="0"/>
              <Picker.Item label="O" value="10"/>
              <Picker.Item label="A+" value="9"/>
              <Picker.Item label="A" value="8"/>
              <Picker.Item label="B+" value="7"/>
              <Picker.Item label="B" value="6"/>
              <Picker.Item label="C" value="5"/>
          </Picker>
        </SafeAreaView>
        <SafeAreaView style={styles.end}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Calculate</Text>
          </TouchableOpacity>
          <Text style={styles.result_gpa}>{gpa5}</Text>
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Semester5

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#141414",
        flex:1,
    },
    text:{
        color:"white"
    },
    container2:{
      backgroundColor:"#141414",
      marginTop:50,
      marginEnd:10,
      marginStart:15
    },
    touchablebutton:{
      marginTop:5
    },
    header:{
      marginTop:3,
      marginStart:10,
      color:"white",
      fontSize:32,
      fontWeight:"600"
    },
    header_align:{
      display:"flex",
      flexDirection:"row"
    },
    subject:{
      marginTop:20
    },
    subject_name:{
      color:"#dedad9",
      fontSize:17,
      fontWeight:"500",
    },
    picker:{
      color:"white",
      backgroundColor:"#363332",
      marginTop:10
    },
    end:{
      marginTop:20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:30
    },
    button:{
      backgroundColor:"#1a1919",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:20,
      height:50,
      width:150,
      borderColor:'white',
      borderWidth:2
    },
    button_text:{
      color:"white",
      fontSize:20,
      fontWeight:"500"
    },
    result_gpa:{
      marginTop:20,
      color:"white",
      fontSize:17,
      fontWeight:"500"
    }
})