import {NavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

const HomeScreen: React.FC<{navigation: NavigationProp<any>}> = ({
  navigation,
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password1, setPassword1] = React.useState('');

  function onHandleSubmit() {
    return navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={200}
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.body}>
        <TextInput
          style={styles.textInput}
          label="Email"
          value={email}
          onChangeText={input => setEmail(input)}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          value={password}
          onChangeText={input => setPassword(input)}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          value={password1}
          onChangeText={input => setPassword1(input)}
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={onHandleSubmit}>
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    justifyContent: 'center',
    flex: 1,

    alignItems: 'center',
  },
  body: {
    width: '100%',
    padding: 16,
    backgroundColor: 'red',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 100,
  },
});

export default HomeScreen;
