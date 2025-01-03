import React,{useEffect, useState} from 'react';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  blackcolor,
  off_white,
  redcolor,
  whitecolor,
} from '../styles/commonstyles';

export const Login = ({loginUserData}) => {

  useEffect(() => {
    async function init() {
      const has = await GoogleSignin.hasPlayServices();
      if (has) {
        GoogleSignin.configure({
          offlineAccess: true,
          webClientId:
            '66794879611-l5914c2imakbomh7ejkluuona64t4u9p.apps.googleusercontent.com',
        });
      }
    }
    init();
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
    
    console.log(signInResult);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      signInResult.data.idToken,
    );
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential), loginUserData(signInResult);
  };

  return (
    <View style={styles.loginWrapper}>
      <View style={styles.circle}>
        <Image
          style={styles.nrlogo}
          source={require('../Assets/Images/favicon1.png')}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={onGoogleButtonPress}>
          <Image
            style={styles.btnIcon}
            source={require('../Assets/Images/google.png')}
          />
          <Text style={styles.btnText}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: off_white,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: whitecolor,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  nrlogo: {
    width: 50,
    height: 50,
  },
  box: {
    backgroundColor: whitecolor,
    borderRadius: 16,
    padding: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: blackcolor,
    textAlign: 'center',
    marginBottom: 30,
  },
  loginBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: whitecolor,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: redcolor,
  },
  btnIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: redcolor,
  },
});


