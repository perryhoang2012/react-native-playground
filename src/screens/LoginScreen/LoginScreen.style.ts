import {scale} from '@helper/uiHelper';
import {colors} from '@theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerPassword: {
    marginTop: scale(10),
  },
  buttonLogin: {
    height: scale(40),
    width: '100%',
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginTop: scale(20),
  },
});
