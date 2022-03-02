import React, { Component } from 'react';
import {View, Alert, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, IconNB, Card, CardItem,Right, Body,Left, Center, Text, H3, Form, Input, Toast, Fab} from "native-base";
import {FontAwesome, Entypo, MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import {connect} from "react-redux";
import * as R from "ramda";
import numeral from "numeral";
import Spinner from 'react-native-loading-spinner-overlay';
import { LinearGradient } from 'expo-linear-gradient';

import {REQUEST_STATUS} from "../../RequestStatus";
import colors from '../../../resources/styles/colors';


export default class Profile extends Component {

  constructor() {
    super();
    this.state = {
      showSpinner: true,
    }
  }

  render() {
  
    return (
      <LinearGradient
        colors={[colors.bgMagenta, colors.bgMidLightBlue]}
        style={{flex: 1}}
      >
      <Container style={{backgroundColor: 'transparent'}}>
        <View style={{height: '28%', backgroundColor: 'transparent'}}>
                <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
            <Text allowFontScaling={false} style={{backgroundColor: 'transparent', color: colors.bdWhite, fontWeight: 'bold', fontSize: 25, paddingBottom:5}}>¡ Hola !</Text>
              <Entypo style={{color: colors.bdWhite, paddingTop:10,borderWidth:5, borderColor:colors.bdWhite, borderRadius:45, width:90, height:90, textAlign:'center'}} name="user" size={50}/>
          </View>
        </View>
        <Container padder style={styles.content}>
          <Text style={{backgroundColor: 'transparent', color: colors.bgMagenta, fontWeight: 'bold', fontSize: 25, textAlign:'center', padding:10}}>Mi perfil</Text>
          <View style={{flexDirection: 'column', paddingLeft:30, paddingRight:30}}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Text style={{fontSize:18, textAlign:'center', color:colors.bdBlack}}>Volver a menu principal</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
        </Container>
        </Container>
        </LinearGradient>
    );
  }
  }

  var {height, width} = Dimensions.get('window');

  const styles = StyleSheet.create({
    title_name:{
      fontSize: 18, 
      color: colors.bgMagenta, 
      width:120, 
      textAlign:'center',
      fontWeight:'300',
    },
  holder: {
      paddingLeft: 50,
      paddingRight: 50,
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
      height: height
  },
  modal: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 50,
    paddingTop: 25,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: colors.bgWhite,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36
  },
  content:{ 
    marginTop:20, 
    paddingTop:10, 
    borderTopLeftRadius:25, 
    borderTopRightRadius:25, 
    backgroundColor:colors.bgWhite,

    shadowColor:colors.bgDarkBlue,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 1
  },
  ribbonLeft: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderTopWidth: 15,
    borderTopColor: colors.bdWhite,
    borderBottomWidth: 15,
    borderBottomColor: colors.bdWhite
  },
  ribbonRight: {
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderTopWidth: 15,
    borderTopColor: colors.bdWhite,
    borderBottomWidth: 15,
    borderBottomColor: colors.bdWhite
  },
  card:{
    shadowColor: colors.bgDarkBlue,
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 2,

    borderRadius:8,
    height:50,
    borderColor:'transparent',
    justifyContent:'center'
  },
  cardItem:{
    borderRadius:8,
    borderColor:'transparent',
    justifyContent:'center'
  }

});
