import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Botao(props)
{
    return (
    <View style={{backgroundColor:'rgb(20,20,20)',borderColor:'white',borderWidth:1, borderRadius: 25, width:'30.1%',height:'21%',margin: '1%'}}>
        <TouchableOpacity onPress={()=>props.logicaCalculadora(props.numero)} style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} >
            <Text style={{fontSize:24,color:'white'}}>{props.numero}</Text>
        </TouchableOpacity>
    </View>
    );
}