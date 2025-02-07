import React,{useEffect} from 'react';
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
      <Image
          style={{width: 240, height: 240, marginBottom: 16, alignSelf: 'center'}}
          resizeMode='contain'
          source={require('../Assets/Images/loginimage.jpg')}
        />
        <Text style={styles.welcomeText}>Hey! Welcome</Text>
        <Text style={styles.paraText}>Navarashtra is a reliable and popular Marathi news app that offers you quick, and authentic news updates</Text>
        <View style={styles.continueLoginWith}>
          <View style={styles.line}></View>
          <Text style={styles.continueLoginWithText}>Continue login with</Text>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={onGoogleButtonPress}>
          <Image
            style={styles.btnIcon}
            source={require('../Assets/Images/google.png')}
          />
          <Text style={styles.btnText}>Google</Text>
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
    marginBottom: -50,
    zIndex: 1
  },
  nrlogo: {
    width: 50,
    height: 50,
  },
  box: {
    width: '100%',
    backgroundColor: whitecolor,
    borderRadius: 16,
    padding: 24,
    paddingTop: 50
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: blackcolor,
    textAlign: 'center',
    marginBottom: 12,
  },
  loginBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: whitecolor,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bcbcbc',
    marginTop: 16
  },
  btnIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: blackcolor,
    flex: 1,
    textAlign: 'center'
  },
  paraText: {
    fontSize: 16,
    color: blackcolor,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  continueLoginWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  line: {
    borderTopWidth: 1, borderColor: '#bcbcbc', flex: 1
  },
  continueLoginWithText: {
    fontSize: 12,
    color: blackcolor,
    textAlign: 'center',
    marginHorizontal: 16,
    lineHeight: 18
  }
});


