/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    primary: '#C72A26',
    secondary:'#FFFFFF',
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    borderColor: '#D3D3D3', // Same border color as the text input
    hintColor: '#7D7D7D',
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: '#C72A26',
    secondary:'#FFFFFF',
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    hintColor: '#7D7D7D',
    borderColor: '#D3D3D3', // Same border color as the text input
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
