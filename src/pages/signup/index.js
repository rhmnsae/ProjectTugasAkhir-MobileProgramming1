import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Keyboard,
} from 'react-native';
import {fonts} from '../../fonts';
import {Button2} from '../../components/molecules';
import {Input, InputPass} from '../../components/atoms';
import {IUser, IEmail, ILock} from '../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
  });
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

    if (!inputs.username) {
      handleError('Please input username', 'username');
      isValid = false;
    }

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

    if (!inputs.repassword) {
      handleError('Please input repassword', 'repassword');
      isValid = false;
    } else if (inputs.repassword.length < 5) {
      handleError('repassword must more than 5', 'repassword');
      isValid = false;
    }

    if (isValid) {
      navigation.navigate('SignIn');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text1}>Welcome to Mac News</Text>
        <Text style={styles.text2}>
          Hello, I guess you are new around here. You
        </Text>
        <Text style={styles.text3}>
          can start using the application after sign up.
        </Text>
      </View>
      <Input
        gmbr={IUser}
        plc="Username"
        error={errors.username}
        onFocus={() => {
          handleError(null, 'username');
        }}
        onChangeText={value => handleChange(value, 'username')}
      />
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
      <InputPass
        gmbr={ILock}
        plc="Repeat Password"
        error={errors.repassword}
        onFocus={() => {
          handleError(null, 'repassword');
        }}
        onChangeText={value => handleChange(value, 'repassword')}
      />
      <Button2 label="Sign Up" onPress={validate} />
      <View style={styles.textBottom}>
        <Text style={styles.textbottom1}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.textbottom2}>Sign In</Text>
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
    marginRight: 0.01 * windowHeight,
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
  textBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0.355 * windowHeight,
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

export default SignUp;
