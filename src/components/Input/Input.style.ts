import {moderateScale, scale} from '@helper/uiHelper';
import {colors} from '@theme/color';
import {fonts} from '@theme/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: scale(40),
    width: '100%',
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: colors.darkGray,
    paddingHorizontal: moderateScale({size: 10}),
    fontFamily: fonts.medium,
  },
  buttonEye: {
    position: 'absolute',
    right: moderateScale({size: 10}),
    top: scale(32),
    zIndex: 1,
  },
});
