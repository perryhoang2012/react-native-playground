import React from 'react';
import {styles} from './Header.style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Block from '@components/Block';
import Text from '@components/Text';
import Button from '@components/Button';

type Props = {
  title?: string;
  isBack?: boolean;
};

const Header = (props: Props) => {
  const {title, isBack} = props;
  const navigation = useNavigation();

  return (
    <Block style={styles.container}>
      {title && (
        <Text regular size={26} weight={'700'}>
          {title}
        </Text>
      )}
      {isBack && (
        <Button onPress={() => navigation.goBack()}>
          <AntDesign name="caretleft" />
        </Button>
      )}
    </Block>
  );
};

export default Header;
