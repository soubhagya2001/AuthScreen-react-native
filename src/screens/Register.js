import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/AntDesign";

const Register = () => {
  return (
    <View style={{ backgroundColor: "#FFF", height: "100%" }}>
      <Image
        source={require("../images/image.jpg")}
        style={{ width: "100%", height: "43%" }}
      />
      <Text style={{ fontSize: 28, alignSelf: "center" }}>Save the world</Text>

      <Text
        style={{
          marginHorizontal: 50,
          textAlign: "center",
          marginTop: 5,
          opacity: 0.4,
        }}
      >
        Plants are living organisms that play a vital role in maintaining the
        ecosystem of our planet. They are the main source of food for the
        majority of species, including humans.
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 50,
          paddingHorizontal: 10,
          borderColor: "#00716F",
          borderRadius: 23,
          paddingVertical: 3,
        }}
      >
        <TextInput style={{ paddingHorizontal: 10 }} placeholder="Email" />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00716F",
          borderRadius: 23,
          paddingVertical: 3,
        }}
      >
        <TextInput
          secureTextEntry={true}
          style={{ paddingHorizontal: 10 }}
          placeholder="Password"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00716F",
          borderRadius: 23,
          paddingVertical: 3,
        }}
      >
        <TextInput
          secureTextEntry={true}
          style={{ paddingHorizontal: 10 }}
          placeholder="Confirm Password"
        />
      </View>

      <View
        style={{
          marginHorizontal: 55,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
          backgroundColor: "#00716F",
          paddingVertical: 8,
          borderRadius: 23,
        }}
      >
        <Text style={{ color: "white" }}>Register</Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
