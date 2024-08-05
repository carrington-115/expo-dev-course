import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Text>This is the home page</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus,
        veritatis, maxime magnam cum consectetur cupiditate suscipit
        exercitationem recusandae iusto a dicta eos ad doloremque odio incidunt,
        itaque aliquam beatae!
      </Text>
      <Link style={styles.button} href="/settings">
        Settings
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "center",
    color: "white",
    backgroundColor: "black",
  },
});

export default Index;
