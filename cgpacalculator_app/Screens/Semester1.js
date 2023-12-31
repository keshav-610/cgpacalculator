import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import React, { useRef, useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Semester1 = () => {

  const [ce,set_ce]=useState('0');
  const [mat,set_mat]=useState('0');
  const [phy,set_phy]=useState('0');
  const [chem,set_chem]=useState('0');
  const [py,set_py]=useState('0');
  const [eg,set_eg]=useState('0');
  const [bsl,set_bsl]=useState('0');
  const [epl,set_epl]=useState('0');
  const [gpa1,set_gpa1]=useState('')


  const Cgpa1=()=>{
    const res_ce=parseInt(ce)*3
    const res_mat=parseInt(mat)*4
    const res_phy=parseInt(phy)*3
    const res_chem=parseInt(chem)*3
    const res_py=parseInt(py)*4
    const res_eg=parseInt(eg)*4
    const res_bsl=parseInt(bsl)*2
    const res_epl=parseInt(epl)*2

    if(res_ce==0||res_mat==0||res_phy==0||res_chem==0||res_py==0||res_eg==0||res_bsl==0||res_epl==0){
      set_gpa1("Please fill all fields")
    }
    else{
    const gpa1_sum=res_ce+res_mat+res_phy+res_chem+res_py+res_eg+res_bsl+res_epl;
    const gpa1_final= gpa1_sum/25;
    set_gpa1("Your GPA is "+gpa1_final.toFixed(1));
    }
  };


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
        <TouchableOpacity onPress={opendrawer} style={styles.touchablebutton}><Ionicons name="reorder-three-outline" size={40} color="white"></Ionicons></TouchableOpacity>
        <Text style={styles.header}>Semester 1</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.subject}>
          <Text style={styles.subject_name}>Communicative English</Text>
          <Picker ref={PickerRef}
          selectedValue={ce}
          onValueChange={(itemvalue)=>set_ce(itemvalue)}
          style={styles.picker}
          >
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
          <Text style={styles.subject_name}>Matrices and Differential Calculus</Text>
          <Picker ref={PickerRef}
          selectedValue={mat}
          onValueChange={(itemvalue)=>set_mat(itemvalue)}
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
          <Text style={styles.subject_name}>Engineering Physics 1</Text>
          <Picker ref={PickerRef}
          selectedValue={phy}
          onValueChange={(itemvalue)=>set_phy(itemvalue)}
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
          <Text style={styles.subject_name}>Engineering Chemistry 1</Text>
          <Picker ref={PickerRef}
          selectedValue={chem}
          onValueChange={(itemvalue)=>set_chem(itemvalue)}
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
          <Text style={styles.subject_name}>Problem Solving and Python Programming</Text>
          <Picker ref={PickerRef}
          selectedValue={py}
          onValueChange={(itemvalue)=>set_py(itemvalue)}
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
          <Text style={styles.subject_name}>Engineering Graphics</Text>
          <Picker ref={PickerRef}
          selectedValue={eg}
          onValueChange={(itemvalue)=>set_eg(itemvalue)}
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
          <Text style={styles.subject_name}>Basic Sciences Laboratory</Text>
          <Picker ref={PickerRef}
          selectedValue={bsl}
          onValueChange={(itemvalue)=>set_bsl(itemvalue)}
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
          <Text style={styles.subject_name}>Engineering Practices Laboratory</Text>
          <Picker ref={PickerRef}
          selectedValue={epl}
          onValueChange={(itemvalue)=>set_epl(itemvalue)}
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
          <TouchableOpacity style={styles.button} onPress={Cgpa1}><Text style={styles.button_text}>Calculate</Text></TouchableOpacity>
          <Text style={styles.result_gpa}>{gpa1}</Text>
        </SafeAreaView>

      </SafeAreaView>
    </ScrollView>
  )
}

export default Semester1

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#141414",
        flex:1,
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
    container2:{
      backgroundColor:"#141414",
      marginTop:50,
      marginEnd:10,
      marginStart:15
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
    end:{
      marginTop:20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:30
    },
    result_gpa:{
      marginTop:20,
      color:"white",
      fontSize:17,
      fontWeight:"500"
    }
})