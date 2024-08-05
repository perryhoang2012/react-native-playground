import Block from '@components/Block';
import Header from '@components/Header';
import Text from '@components/Text';
import React from 'react';

const HomeScreen = (): JSX.Element => {
  return (
    <Block>
      <Header title="Home" />
      <Text>HomeScreen</Text>
    </Block>
  );
};

export default HomeScreen;
