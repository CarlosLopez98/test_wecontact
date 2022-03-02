import React, { Component } from 'react';
import {View, Alert, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, IconNB, Card, CardItem, Right,Left, Body, Text, H3, Form, Input, Toast, Fab} from "native-base";
import {FontAwesome, Entypo, MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import {connect} from 'react-redux';
import * as R from 'ramda';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../../../resources/styles/colors';
import { LinearGradient } from 'expo-linear-gradient';

@connect((store: any) => {
  return {
  };
})

export default class TransNoValid extends Component {
  render() {
      return (
        <LinearGradient
          colors={[colors.bdDarkGray ,colors.bdLigthGray]}
          style={{flex: 1}}
        >
        <Container style={{backgroundColor:'transparent'}}>
        <View style={{marginTop:50, justifyContent: 'center', paddingLeft:20,paddingRight:20}}>
          <TouchableOpacity onPress={() => {}}>
          <Card style={{borderWidth:1, borderRadius:10, height:250 , justifyContent: 'center', alignItems: 'center'}}>
            <CardItem  style={{backgroundColor:'transparent'}}>

            <MaterialCommunityIcons name="comment-alert-outline" size={40}/>

            <Text style={{backgroundColor: 'transparent', fontSize: 20}}>Servicio no habilitado</Text>

          </CardItem>
          </Card>
          </TouchableOpacity>
        </View>
        </Container>
        </LinearGradient>
      );
    }
  }
