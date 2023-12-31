import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker';

const Semester3 = () => {

  const [dma,set_dma]=useState('0')
  const [dlc,set_dlc]=useState('0')
  const [ca,set_ca]=useState('0')
  const [dsc,set_dsc]=useState('0')
  const [oop,set_oop]=useState('0')
  const [poc,set_poc]=useState('0')
  const [dscl,set_dscl]=useState('0')
  const [dlcl,set_dlcl]=useState('0')
  const [gpa3,set_gpa3]=useState('')

  const Cgpa3=()=>{
    const res_dma=parseInt(dma)*4
    const res_dlc=parseInt(dlc)*3
    const res_ca=parseInt(ca)*3
    const res_dsc=parseInt(dsc)*3
    const res_oop=parseInt(oop)*4
    const res_poc=parseInt(poc)*3
    const res_dscl=parseInt(dscl)*2
    const res_dlcl=parseInt(dlcl)*2

    if(res_dma==0||res_dlc==0||res_ca==0||res_dsc==0||res_oop==0||res_poc==0||res_dscl==0||res_dlcl==0){
      set_gpa3("Please Fill all fields")
    }
    else{
      const gpa3_sum=res_dma+res_dlc+res_ca+res_dsc+res_oop+res_poc+res_dscl+res_dlcl
      const gpa3_final=gpa3_sum/24
      set_gpa3("Your GPA is "+gpa3_final.toFixed(1));
    }
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
            <TouchableOpacity onPress={opendrawer} style={styles.touchablebutton}>
              <Ionicons name="reorder-three-outline" size={40} color="white"></Ionicons>
            </TouchableOpacity>
            <Text style={styles.header}>Semester 3</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.subject}>
            <Text style={styles.subject_name}>Discrete Mathematics and Applications</Text>
            <Picker ref={PickerRef}
            selectedValue={dma}
            onValueChange={(itemvalue)=>set_dma(itemvalue)}
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
            <Text style={styles.subject_name}>Digital Logic Circuits</Text>
            <Picker ref={PickerRef}
            selectedValue={dlc}
            onValueChange={(itemvalue)=>set_dlc(itemvalue)}
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
            <Text style={styles.subject_name}>Computer Architecture</Text>
            <Picker ref={PickerRef}
            selectedValue={ca}
            onValueChange={(itemvalue)=>set_ca(itemvalue)}
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
            <Text style={styles.subject_name}>Data Structure using C</Text>
            <Picker ref={PickerRef} 
            selectedValue={dsc}
            onValueChange={(itemvalue)=>set_dsc(itemvalue)}
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
            <Text style={styles.subject_name}>Object Oriented Programming</Text>
            <Picker ref={PickerRef}
            selectedValue={oop}
            onValueChange={(itemvalue)=>set_oop(itemvalue)}
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
            <Text style={styles.subject_name}>Principles of Communication</Text>
            <Picker ref={PickerRef}
            selectedValue={poc}
            onValueChange={(itemvalue)=>set_poc(itemvalue)}
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
            <Text style={styles.subject_name}>Data Structures using C Laboratory</Text>
            <Picker ref={PickerRef}
            selectedValue={dscl}
            onValueChange={(itemvalue)=>set_dscl(itemvalue)}
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
            <Text style={styles.subject_name}>Digital Logic Circuits Laboratory</Text>
            <Picker ref={PickerRef}
            selectedValue={dlcl}
            onValueChange={(itemvalue)=>set_dlcl(itemvalue)}
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
            <TouchableOpacity style={styles.button} onPress={Cgpa3}>
              <Text style={styles.button_text}>Calculate</Text>
            </TouchableOpacity>
            <Text style={styles.result_gpa}>{gpa3}</Text>
          </SafeAreaView>
        </SafeAreaView>
    </ScrollView>
  )
}

export default Semester3

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