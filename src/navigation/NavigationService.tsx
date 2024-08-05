import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function goBack() {
  return navigationRef?.goBack();
}

export function navigate(name: string, params?: Record<string, any>) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function replace(name: string) {
  throw new Error(
    'Missing implementation of push' +
      name +
      ' is not supported by this implementation',
  );
}

function push(routeName: string, params?: Record<string, any>) {
  throw new Error(
    'Missing implementation of push' +
      routeName +
      params +
      ' is not supported by this implementation',
  );
}

function reset(routeName: string) {
  throw new Error('Missing implementation of reset' + routeName);
}

function getCurrentRoute() {
  throw new Error('Missing implementation of getCurrentRoute');
}

const getRouteName = () => {
  return navigationRef.getCurrentRoute()?.name ?? '';
};

const NavigationService = {
  navigate,
  push,
  goBack,
  reset,
  getCurrentRoute,
  getRouteName,
};

export default NavigationService;
