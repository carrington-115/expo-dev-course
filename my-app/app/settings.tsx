import { Link } from "expo-router";
import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>The settings page</Text>
      <Link href="/">Home</Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Settings;
