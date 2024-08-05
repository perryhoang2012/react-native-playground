import {getStatusBarHeight, scale, verticalScale} from '@helper/uiHelper';
import {colors} from '@theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight + verticalScale(10),
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(30),
    shadowColor: colors.darkGray,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: colors.white,
  },
  textTitle: {},
});
