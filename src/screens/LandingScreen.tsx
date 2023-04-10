import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
// import LottieView from 'lottie-react-native';

const LandingScreen: React.FC<{navigation: NavigationProp<any>}> = ({
  navigation,
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Details');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: 'blue',
  },
});

export default LandingScreen;
