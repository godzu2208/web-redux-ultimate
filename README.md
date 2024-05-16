### Getting Started with React Redux
React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

# Installation
React Redux 8.x requires React 16.8.3 or later / React Native 0.59 or later, in order to make use of React Hooks.

# Create a React Redux App
The recommended way to start new apps with React and Redux is by using our official Redux+TS template for Vite, or by creating a new Next.js project using Next's with-redux template. \

Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features.\
# Vite with our Redux+TS template
# (using the `degit` tool to clone and extract the template)
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

# Next.js using the `with-redux` template
npx create-next-app --example with-redux my-app

# We do not currently have official React Native templates, but recommend these templates for standard React Native and for Expo:

[https://github.com/rahsheen/react-native-template-redux-typescript](https://github.com/rahsheen/react-native-template-redux-typescript)
[https://github.com/rahsheen/expo-template-redux-typescript](https://github.com/rahsheen/expo-template-redux-typescript)

# An Existing React App

To use React Redux with your React app, install it as a dependency:

# If you use npm:
npm install react-redux

# Or if you use Yarn:
yarn add react-redux\
You'll also need to install Redux and set up a Redux store in your app.\

React-Redux v8 is written in TypeScript, so all types are automatically included.
