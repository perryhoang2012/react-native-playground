import Block from '@components/Block';
import Button from '@components/Button';
import Input from '@components/Input';
import Text from '@components/Text';
import {UserLogin} from '@models/user';
import {replace} from '@navigation/NavigationService';
import {colors} from '@theme/color';
import React, {useState} from 'react';
import {styles} from './LoginScreen.style';

const LoginScreen = (): JSX.Element => {
  const [state, setState] = useState<UserLogin>({
    userName: '',
    password: '',
  });

  const onLogin = () => {
    replace('Bottom');
  };

  return (
    <Block flex middle center bg={colors.white} px={20}>
      <Input
        value={state.userName}
        title="Username"
        onChangeValue={(e: string) => {
          setState({...state, userName: e});
        }}
      />
      <Input
        value={state.password}
        title="Password"
        onChangeValue={(e: string) => {
          setState({...state, password: e});
        }}
        style={styles.containerPassword}
        isPassword
      />

      <Button onPress={onLogin} middle center style={styles.buttonLogin}>
        <Text size={16} color={colors.white} bold>
          Login
        </Text>
      </Button>
    </Block>
  );
};

export default LoginScreen;
