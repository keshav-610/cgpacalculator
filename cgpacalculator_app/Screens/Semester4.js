import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const Semester4 = () => {

  const [pqt,set_pqt]=useState('0')
  const [daa,set_daa]=useState('0')
  const [dbms,set_dbms]=useState('0')
  const [os,set_os]=useState('0')
  const [se,set_se]=useState('0')
  const [evs,set_evs]=useState('0')
  const [osl,set_osl]=useState('0')
  const [dbmsl,set_dbmsl]=useState('0')
  const [mp,set_mp]=useState('0')
  const [gpa4,set_gpa4]=useState('')

  const Cgpa4=()=>{
    const res_pqt=parseInt(pqt)*4
    const res_daa=parseInt(daa)*3
    const res_dbms=parseInt(dbms)*3
    const res_os=parseInt(os)*3
    const res_se=parseInt(se)*3
    const res_evs=parseInt(evs)*0
    const res_osl=parseInt(osl)*2
    const res_dbmsl=parseInt(dbmsl)*2
    const res_mp=parseInt(mp)*1

    if(res_pqt==0||res_daa==0||res_dbms==0||res_os==0||res_se==0||evs==0||res_osl==0||res_dbmsl==0||res_mp==0){
      set_gpa4("Please Fill all Fields")
    }
    else{
      const gpa4_sum=res_pqt+res_daa+res_dbms+res_os+res_se+res_evs+res_osl+res_dbmsl+res_mp
      const gpa4_final=gpa4_sum/21
      set_gpa4("Your GPA is "+gpa4_final.toFixed(1))
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
          <Text style={styles.header}>Semester 4</Text>
        </SafeAreaView>
          <SafeAreaView style={styles.subject}>
            <Text style={styles.subject_name}>Probability and Queuing Theory</Text>
            <Picker ref={PickerRef} selectedValue={pqt}
            onValueChange={(itemvalue)=>set_pqt(itemvalue)}
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
            <Text style={styles.subject_name}>Design and Analysis of Algorithms</Text>
            <Picker ref={PickerRef}
            selectedValue={daa}
            onValueChange={(itemvalue)=>set_daa(itemvalue)}
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
            <Text style={styles.subject_name}>Database Management Systems</Text>
            <Picker ref={PickerRef} selectedValue={dbms} onValueChange={(itemvalue)=>set_dbms(itemvalue)}
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
            <Text style={styles.subject_name}>Operating Systems</Text>
            <Picker ref={PickerRef} 
            selectedValue={os} 
            onValueChange={(itemvalue)=>set_os(itemvalue)} 
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
            <Text style={styles.subject_name}>Software Engineering</Text>
            <Picker ref={PickerRef}
            selectedValue={se}
            onValueChange={(itemvalue)=>set_se(itemvalue)}
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
            <Text style={styles.subject_name}>Environmental Sciences</Text>
            <Picker ref={PickerRef}
            selectedValue={evs}
            onValueChange={(itemvalue)=>set_evs(itemvalue)} 
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
            <Text style={styles.subject_name}>Operating Systems Laboratory</Text>
            <Picker ref={PickerRef}
            selectedValue={osl}
            onValueChange={(itemvalue)=>set_osl(itemvalue)}
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
            <Text style={styles.subject_name}>Database Management Systems Laboratory</Text>
            <Picker ref={PickerRef}
            selectedValue={dbmsl}
            onValueChange={(itemvalue)=>set_dbmsl(itemvalue)}
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
            <Text style={styles.subject_name}>Mini Project-I</Text>
            <Picker ref={PickerRef}
            selectedValue={mp}
            onValueChange={(itemvalue)=>set_mp(itemvalue)}
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
            <TouchableOpacity style={styles.button} onPress={Cgpa4}>
              <Text style={styles.button_text}>Calculate</Text>
            </TouchableOpacity>
            <Text style={styles.result_gpa}>{gpa4}</Text>
          </SafeAreaView>
      </SafeAreaView>
    </ScrollView>

  )
}

export default Semester4

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