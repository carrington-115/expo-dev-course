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

- It is a `file-based` routing system for react native and web applications. It provides native navigation and is built on `react navigation`.
- Expo file-based navigation can only work inside the `/app directory`. Any file added in this file is a route with the filename its url.
- For every file, the deault route is the `filename/index.tsx` file.

### \_layout file

- This file is used to specify the shared ui components that can be used among routes.
- This file is used to setup the splash screen delay, themes,

### The Stack Navigator

- This is a navigation pattern that is similar to web-based navigation.
- To set stack navigation in `_layout.tsx` file.

```jsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={
        {
          /*pass screen styles*/
        }
      }
    >
      <Stack.Screen name={routeName} />
    </Stack>
  );
}
```

### Linking routes

- To link routes in an expo app, we use the `Link` component. By default, `/` is the route for the index page.

```jsx
import { Link } from "expo-router";

export default function Page() {
  return <Link href="/">home</Link>;
}
```

### Groups

- A group is used to organise similar files in a single folder.
- Each group has an `_layout.tsx` file and the group folder is name around parentheses. E.g. `(features)`
- In the main \_layout file, we have to add all nested groups as routes

```jsx
import {Stack} from 'expo-router'

export default function RootLayout(){
    return(
        <Stack>
        <Stack.Screen name='(features)' />

        </Stack.Screen>
    )
}

```

### Tabs Navigation

- This is a navigation pattern where tabs are used as the main method of navigation. The Syntax is same with `Stack` navigation just the keyword changes to `Tabs`

## Dynamic Routes

- A dynamic route is created by wrapping a route's name in `square brackets` for example, `[product].tsx`.
- The data in dynamic segment depends on the name in the square brackets which can be an id through using route params methods.

## User Interface

1. **The Splash Screen and App icon**

- The app icon should have the size of _1024px x 1024px_ for ios. Android icons are adaptive icons.
- All the details of the splash screen can be set in the `app.json` file. When there can be a general setting or there can be a unique setting for each of the platforms.

2. **Safe Areas**

- SafeArea ensure that the app components does not get overlapped by some other device components like status bars or home indicators
- The component here is the `<SafeArea></SafeArea>`

3. **Fonts**

- To use fonts in expo, we can decide install locally, or through npm like the `@expo-google-font/font` or we can use the `expo-font` plugin to apply multiple fonts in the application.

4. **Assets, colors, animations**

- All assets such as `images, videos, soundes, SQLite databases` are stored in the assets folder.
- The `useColorScheme` can be used to detect the theme mode of the device and reset the expo app configurations.

```tsx
import { useColorScheme } from "react-native";

export default function Page() {
  const colorScheme = useColorScheme();
  console.log(colorScheme); // 'dark' | 'light'
}
```

- For animations in react-native, we can use the `moti` module.

## Routing in Expo (Advanced and more detailed)

- The `push` property can be added to the `Link` element in a component to make sure the new navigation is being push on the top of the stack.
- For dynamic routes, the link component needs to be set differently. The `href` receives an object with 2 properties: `pathname` and `params`

```tsx
import { Link } from "expo-router";

export default function Page() {
  return (
    <>
      <Link
        push
        href={{ pathname: "/users/[user]", params: { name: "alice" } }}
      >
        ...
      </Link>
    </>
  );
}
```

- imperatively, we can do **three** types of navigation, `push, replace, back` with expo-router methods using the `useRouter` hook.

```tsx
import { useRouter } from "expo-router";

export default function Route() {
  const router = useRouter();
  // router.back()
  // router.replace('/details')
  // router.push('/user')
  return {
    /*component JSX here*/
  };
}
```

## Navigation patterns

1. Stack Navigator

- On `android` the navigation comes from the `top` and on `ios` the navigation comes from the `right`.

### Screen options and Header configurations

- The `<Stack>` component receives an attribute, **screenOptions**, which can be used to set the Stack screen options of the navigation.

```tsx
import {Stack} from 'expo-router'

export default function RootLayout(){
  return (
    <Stack screenOptions={{
      /* screen options */
    }}>
      <Stack.Screen options={{
        /* route options */
      }} />
    </Stack.Screen>
  )
}
```

- For the Screen options, there are 2 types of screen options, header style and screen navigations gesture options. We can pass options like: `headerShown, headerStyle, headerRight, headerLeft, headerStyle, headerBackground`.
- In the app, we can pass options to the screen like all the header options in the screen options and some other screen navigation options.

2. Tabs Navigator

- This navigation pattern uses a bottom tabs navigation bar are the bottom of the screen to make sure the user navigates to a new screen.
- Screens in the tabs navigation, `<Tabs.Screen />`, takes an option that is very important for the tabs to set the tab's icon and title.

```tsx
<Tabs.Screen options={{ title: "title", tabIcon: () => <TabIcon /> }} />
```

## Notes from examples

### Building an image picker

- To build an image picker, we need the `ImagePicker` from `expo-image-picker`. So, first we install `expo-image-picker`.

```bash
npx expo install expo-image-picker
```

- Then in the file write a function component to integrate the expo image picker ui component in the app

```tsx
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Pressable } from "react-native";

export default function ImagePickerComponent() {
  const [image, setImage] = useState<String | null>(null);
  const handleImagePicker = async () => {
    try {
      const newImage = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        quality: 1,
      });
      if (!newImage.canceled) {
        setImage(newImage.assets[0].uri); // passing the image from the device gallery to the react state
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <View>
      <Pressable onPress={handleimagePicker} />
    </View>
  );
}
```

### Building a Modal component

- To create the `Modal` we import it from `react-native`.
- The modal hs some important attributes like: `animationType, transparent, visible`.
- We can set the the following

```bash
animationType: 'slide'
transparent: false
visble: /* Use a react state variable */
```

-
