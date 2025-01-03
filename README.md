# React Native Dimensions.get('window') returns undefined on Android

This repository demonstrates a bug where `Dimensions.get('window').width` and `Dimensions.get('window').height` return `undefined` in React Native on Android devices.  The issue is intermittent and seems to be related to the timing of component rendering and the `Dimensions` API call.  A solution using `useEffect` and `LayoutAnimation` is provided.

## Bug Description

The `Dimensions` API, commonly used to obtain screen dimensions, occasionally returns `undefined` for `width` and `height`, leading to crashes or unexpected layout behavior. This problem is more frequent on Android and can be difficult to debug due to its unpredictable nature.

## How to Reproduce

1. Clone this repository.
2. Run the project on an Android emulator or device.
3. Observe that the dimensions sometimes display as `undefined`, causing elements to misbehave or the app to crash.

## Solution

The solution involves using `useEffect` to ensure the `Dimensions` API is called after the component has mounted and potentially using `LayoutAnimation` for smoother updates during changes in the dimensions. See `DimensionsBugSolution.js` for a complete implementation.