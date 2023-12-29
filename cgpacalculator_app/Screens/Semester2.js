import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef,useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

const Semester2 = () => {

  const [te,set_te]=useState('0');
  const [vet,set_vet]=useState('0');
  const [phy2,set_phy2]=useState('0');
  const [beeie,set_beeie]=useState('0');
  const [ite,set_ite]=useState('0');
  const [prc,set_prc]=useState('0');
  const [itel,set_itel]=useState('0');
  const [prcl,set_prcl]=useState('0');
  const [gpa2,set_gpa2]=useState('0');

  const Cgpa2=()=>{
    const res_te=parseInt(te)*3
    const res_vet=parseInt(vet)*4
    const res_phy2=parseInt(phy2)*3
    const res_beeie=parseInt(beeie)*3
    const res_ite=parseInt(ite)*3
    const res_prc=parseInt(prc)*3
    const res_itel=parseInt(itel)*2
    const res_prcl=parseInt(prcl)*2

    if(res_te==0||res_vet==0||res_phy2==0||res_beeie==0||res_ite==0||res_prc==0||res_itel==0||res_prcl==0){
      set_gpa2("Please fill all fields")
    }
    else{
      const gpa2_sum=res_te+res_vet+res_phy2+res_beeie+res_ite+res_prc+res_itel+res_prcl;
      const gpa2_final=gpa2_sum/23;
      set_gpa2("Your GPA is " + gpa2_final.toFixed(1));
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
      <Text style={styles.header}>Semester 2</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.subject}>
      <Text style={styles.subject_name}>Technical English</Text>
      <Picker ref={PickerRef}
        selectedValue={te}
        onValueChange={(itemvalue)=>set_te(itemvalue)}
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
        <Text style={styles.subject_name}>Vector Calculus and Complex Integration</Text>
        <Picker ref={PickerRef}
        selectedValue={vet}
        onValueChange={(itemvalue)=>set_vet(itemvalue)}
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
      <Text style={styles.subject_name}>Engineering Physics II</Text>
      <Picker ref={PickerRef}
          selectedValue={phy2}
          onValueChange={(itemvalue)=>set_phy2(itemvalue)}
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
      <Text style={styles.subject_name}>Basic Electrical Electronics and Instrumentation Engineering</Text>
      <Picker ref={PickerRef}
          selectedValue={beeie}
          onValueChange={(itemvalue)=>set_beeie(itemvalue)}
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
        <Text style={styles.subject_name}>Information Technology Essentials</Text>   
        <Picker ref={PickerRef}
          selectedValue={ite}
          onValueChange={(itemvalue)=>set_ite(itemvalue)}
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
        <Text style={styles.subject_name}>Porgramming in C</Text>
        <Picker ref={PickerRef}
          selectedValue={prc}
          onValueChange={(itemvalue)=>set_prc(itemvalue)}
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
        <Text style={styles.subject_name}>Information Technology Essentials Laboratory</Text>
        <Picker ref={PickerRef}
          selectedValue={itel}
          onValueChange={(itemvalue)=>set_itel(itemvalue)}
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
        <Text style={styles.subject_name}>Programming in C Laboratory</Text>
        <Picker ref={PickerRef}
          selectedValue={prcl}
          onValueChange={(itemvalue)=>set_prcl(itemvalue)}
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
        <TouchableOpacity style={styles.button} onPress={Cgpa2}>
          <Text style={styles.button_text}>Calculate</Text>
        </TouchableOpacity>
        <Text style={styles.result_gpa}>{gpa2}</Text>
      </SafeAreaView>




















    </SafeAreaView>
   </ScrollView>
  )
}

export default Semester2

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#141414",
        flex:1,
    },
    container2:{
      backgroundColor:"#141414",
      marginTop:50,
      marginEnd:10,
      marginStart:15
    },
    text:{
        color:"white"
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