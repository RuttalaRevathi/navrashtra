import {Pressable} from 'react-native';

const HandlePressable = ({children, onPress, style, color='rgba(0,0,0,0.075)'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[{overflow: 'hidden'}, style]}
      android_ripple={{
        borderless: true,
        foreground: true,
        color: color,
      }}>
      {children}
    </Pressable>
  );
};

export default HandlePressable;
