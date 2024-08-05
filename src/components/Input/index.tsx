import {KeyboardTypeOptions, TextInput, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import Block from '@components/Block';
import {styles} from './Input.style';
import Text from '@components/Text';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '@components/Button';

type Props = {
  title?: string;
  value: string;
  onChangeValue?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  style?: ViewStyle;
  isPassword?: boolean;
};

const Input = (props: Props) => {
  const {title, value, onChangeValue, keyboardType, style, isPassword} = props;

  const [isSecureText, setIsSecureText] = useState<boolean>(false);

  return (
    <Block style={[{...styles.container}, style]}>
      {title && (
        <Text size={16} light mb={2}>
          {title}
        </Text>
      )}
      <TextInput
        secureTextEntry={isSecureText}
        value={value}
        onChangeText={onChangeValue}
        keyboardType={keyboardType || 'default'}
        style={{...styles.input}}
      />

      {isPassword && (
        <Button
          style={styles.buttonEye}
          onPress={() => setIsSecureText(pre => !pre)}>
          <FontAwesome name={isSecureText ? 'eye-slash' : 'eye'} size={18} />
        </Button>
      )}
    </Block>
  );
};

export default Input;
