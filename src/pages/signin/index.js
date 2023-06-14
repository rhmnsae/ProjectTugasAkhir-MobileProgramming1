import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Keyboard,
  Alert,
  handleError,
} from 'react-native';
import {fonts} from '../../fonts';
import {Button2} from '../../components/molecules';
import {Input, InputPass} from '../../components/atoms';
import {IEmail, ILock} from '../../assets';
import {Button3} from '../../components/molecules';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = ({navigation}) => {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});

  const handleChange = (value, input) => {
    setInputs(prevState => ({...prevState, [input]: value}));
  };

  const handleError = (errMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errMessage}));
  };

  //validate
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('invalid email', 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Password must more than 5', 'password');
      isValid = false;
    }

    if(isValid){
      navigation.navigate('MainApp');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text1}>Welcome Back</Text>
        <Text style={styles.text2}>I am happy to see you again. You can</Text>
        <Text style={styles.text3}>
          continue where you left off by logging in
        </Text>
      </View>
      <Input
        gmbr={IEmail}
        plc="Email Address"
        error={errors.email}
        onFocus={() => {
          handleError(null, 'email');
        }}
        onChangeText={value => handleChange(value, 'email')}
      />
      <InputPass
        gmbr={ILock}
        plc="Password"
        error={errors.password}
        onFocus={() => {
          handleError(null, 'password');
        }}
        onChangeText={value => handleChange(value, 'password')}
      />
      <Button2 label="Sign In" onPress={validate} />
      <Text style={styles.text4}>Or</Text>
      <Button3 label="Sign In With Google" />
      <View style={styles.textBottom}>
        <Text style={styles.textbottom1}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.textbottom2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    alignItems: 'center',
  },
  wrapper: {
    marginTop: 0.01 * windowHeight,
    marginBottom: -0.025 * windowHeight,
    marginRight: 0.05 * windowHeight,
  },
  text1: {
    fontFamily: fonts.primary.semibold,
    fontSize: 0.07 * windowWidth,
    color: '#333647',
    top: 0.03 * windowHeight,
  },
  text2: {
    fontFamily: fonts.primary.regular,
    fontSize: 0.045 * windowWidth,
    color: '#7C82A1',
    top: 0.03 * windowHeight,
  },
  text3: {
    fontFamily: fonts.primary.regular,
    fontSize: 0.045 * windowWidth,
    color: '#7C82A1',
    top: 0.03 * windowHeight,
  },
  text4: {
    fontFamily: fonts.primary.semibold,
    fontSize: 0.045 * windowWidth,
    color: '#7C82A1',
    top: 0.185 * windowHeight,
  },
  textBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0.44 * windowHeight,
  },
  textbottom1: {
    color: '#555A77',
    fontSize: 0.045 * windowWidth,
    fontFamily: fonts.primary.medium,
  },
  textbottom2: {
    color: '#333647',
    fontSize: 0.045 * windowWidth,
    fontFamily: fonts.primary.medium,
    left: 0.024 * windowWidth,
  },
});

export default SignIn;
