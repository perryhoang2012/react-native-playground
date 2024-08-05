import {moderateScale} from '@helper/uiHelper';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Platform, Text as TextBase} from 'react-native';
import {styles} from './Text.styles';
import {fonts} from '@theme/fonts';

export interface Props {
  flex?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  style?: any;
  pa?: number;
  px?: number;
  py?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  ma?: number;
  mx?: number;
  my?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  primary?: boolean;
  secondary?: boolean;
  title?: boolean;
  size?: number;
  weight?: string | number;
  height?: number;
  color?: string;
  numberOfLines?: number;
  regular?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  extraLight?: boolean;
  light?: boolean;
  medium?: boolean;
  black?: boolean;
  semiBold?: boolean;
  thin?: boolean;
  children?: any;
}

const Text: React.FC<Props> = props => {
  const {
    children,
    flex,
    center,
    left,
    right,
    style,
    pa,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    ma,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    title,
    size,
    weight,
    height,
    regular,
    bold,
    extraBold,
    extraLight,
    light,
    medium,
    black,
    semiBold,
    thin,
    color,
  } = props;

  const {colors} = useTheme();

  const textStyles: any = [
    {color: color || colors.text},
    flex && {flex: 1},
    !size && {lineHeight: 20},
    title && styles.title,
    center && styles.center,
    left && styles.left,
    right && styles.right,
    pa && {padding: pa},
    px && {paddingHorizontal: px},
    py && {paddingVertical: py},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    ma && {margin: ma},
    mx && {marginHorizontal: mx},
    my && {marginVertical: my},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    height && {lineHeight: height},
    weight && {
      fontWeight: weight === 'bold' && Platform.OS === 'ios' ? '500' : weight,
    },
    size && {fontSize: moderateScale({size})},
    {fontFamily: fonts.regular},
    regular && {fontFamily: fonts.regular},
    bold && {fontFamily: fonts.bold},
    extraBold && {fontFamily: fonts.extraBold},
    extraLight && {fontFamily: fonts.extraLight},
    light && {fontFamily: fonts.light},
    medium && {fontFamily: fonts.medium},
    black && {fontFamily: fonts.black},
    semiBold && {fontFamily: fonts.semiBold},
    thin && {fontFamily: fonts.thin},
    style,
  ];

  return (
    <TextBase {...props} style={textStyles}>
      {children}
    </TextBase>
  );
};

export default Text;
