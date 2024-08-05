# Personal expo docs notes and React native notes

## Introduction

- Expo is a mobile app development library for android and ios devices.
- The library includes tools such as file-based routing API, rich native tools api and other tools which are relevant during development and makes development faster and easier.

## Installation

- To create an expo app, use the syntax below, and fill in the dependencies answers.

```bash
npx create-expo-app@latest
```

- For the app emulator, we can download the `expo go` application for android and ios or use `android studio or ios emulator`.

## Expo app development file structure

- **app**: Contains the file structure of the root application
- **assest**: contain the _adaptive-icon.png_ for android app img icon, _icon.png_ for ios app icon, and _splash.png_ for the splash screen app image.
- **components**: Used to store the react components
- **constants**: used to store the color objects for the application.
- **Hooks**: Used to store the _react hooks_ for the application.

## React Native fundamentals and Review

- The main React Native components used in react native are `Text, View, ScrollView, Image, TextInput`
- Each component in react native accepts the variable `style` which can be used to style a jsx component using `object-notation approach`.
- The `ScrollView` is a type of a `View` component that is used for scrollable content on the screen.
- The `Flatlist or SectionList` is used to display list items on the view of a mobile application.

## React Native core components

1. **ActivityIndicator**: This is used in react native applications as a loading spin
2. **Button**: This is used for direct tap actions on the screen. It has properties like: `title, onPress, color, style, disabled`
3. **Flatlist**: This is used to display items in a list manner. This accepts properties like: `data, renderItem, keyExtractor`. What makes this unique is that each element has a key that can be used to affect a particular element.
4. **Image**: This is used to display both local and network images. It's 2 main properties are: `style and source`
5. **ImageBackground**: This component is used for the container background. It has the following properties: `source, resizeMode`
6. **keyboardAvoidingView**: This component adjusts its height and padding for the purpose that the keyboard is displayed at the bottom. This component takes the property `behaviour - used to set the keyboard sys`. With the `Keyboard` function, the `Keyboard.dismiss` can be used to undisplay the keyboard.
7. **Modal**: It is a way to present content on an enclosing view. It has the following properties: `animatedType, transparent, visible, onRequestClose`.
8. **Pressable**: It is a component that can detect press actions on any of its children. It has the following properties: `onPress, onPressIn, onPressOut, onLongPress, `. This component detects the PressIn and PressOut action.
9. **RefreshControl**: This component is used for the pull down refresh of a component. It takes properties: `refreshing, onRefresh`. The React `useCallback` hook can be use to controll the delay of the refresh.
10. **SectionList**: It is a component that is used to display elements as a list as `FlatList`. The difference is a header and footer can be passed.
11. **StatusBar**: This component is used to change the style of the device status bar. The main properties: `barStyle, animated, backgroundColor, showHiddenTransition, hidden`.
12. **Switch**: It takes the following properties: `trackColor, thumbColor, value, onValueChange`.
13. **TouchableHighlight, TouchableOpacity**: It is used to change the background color on view. This is used for interactive items on the ui.
14. **TouchableWithoutFeedback**: It is used for interactive items that the change does not wants to be known when the elements are pressed.
15.

## Navigation in Expo

1. **File-based Routing**:
