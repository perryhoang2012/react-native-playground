const WIDTH_NEED_CHANGE = 600;

import {Dimensions, Platform, StatusBar} from 'react-native';

const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('window');

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP14PRO_HEIGHT = 49;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XR_WIDTH = 414;
const XR_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const IP14PRO_WIDTH = 393;
const IP14PRO_HEIGHT = 852;

const IP14PRO_MAX_WIDTH = 430;
const IP14PRO_MAX_HEIGHT = 932;

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;

//Guideline sizes are based on standard ~5" screen mobile device
const GUIDE_LINE_BASE_WIDTH = 350;
const GUIDE_LINE_BASE_HEIGHT = 680;

if (Platform.OS === 'ios' && !Platform.isPad) {
  if (D_WIDTH === X_WIDTH && D_HEIGHT === X_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (D_WIDTH === XR_WIDTH && D_HEIGHT === XR_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (D_WIDTH === IP12_WIDTH && D_HEIGHT === IP12_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12_HEIGHT;
  } else if (D_WIDTH === IP12MAX_WIDTH && D_HEIGHT === IP12MAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
  } else if (D_WIDTH === IP14PRO_MAX_WIDTH && D_HEIGHT === IP14PRO_MAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  } else if (D_WIDTH === IP14PRO_WIDTH && D_HEIGHT === IP14PRO_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  }
}

export const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT) ||
      (D_HEIGHT === XR_HEIGHT && D_WIDTH === XR_WIDTH) ||
      (D_HEIGHT === XR_WIDTH && D_WIDTH === XR_HEIGHT))
  );
};

export const getStatusBarHeight = Platform.select({
  ios: statusBarHeight,
  android: StatusBar.currentHeight,
  default: 0,
});

export function checkIpad() {
  return D_WIDTH > WIDTH_NEED_CHANGE;
}

export function checkPlatform(platform: string) {
  return Platform.OS === platform;
}

export function scale(size: number) {
  return (D_WIDTH / GUIDE_LINE_BASE_WIDTH) * size;
}
export function verticalScale(size: number) {
  return (D_HEIGHT / GUIDE_LINE_BASE_HEIGHT) * size;
}
export function moderateScale({
  size,
  factor = 0.5,
}: {
  size: number;
  factor?: number;
}) {
  return size + (scale(size) - size) * factor;
}
