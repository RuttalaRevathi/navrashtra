import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { appThemeColor } from '../styles/commonstyles';

const Toast = ({ message, onClose }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  }, [onClose]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.toast, opacity: fadeAnim }}>
        <Text style={styles.toastText}>{message}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  toast: {
    backgroundColor:appThemeColor,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  toastText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Toast;
