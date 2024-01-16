import React from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleRegisterClick = () => {
    navigation.navigate("Register");
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View className="flex-1 justify-center items-center">
        <Text className="absolute top-16 text-6xl text-indigo-400">
          Hi Ulas
        </Text>
        <View className="flex gap-2 justify-center">
          <TextInput
            className="h-14 border-2 border-indigo-500 w-80 p-2 text-black font-medium rounded-lg"
            keyboardType="email-address"
            placeholder="Email"
          />

          <TextInput
            className="h-14 border-2 border-indigo-500 w-80 p-2 text-black font-medium  rounded-lg"
            placeholder="Password"
            secureTextEntry={true}
          />
          <View className="w-3/4 overflow-hidden rounded-lg">
            <TouchableOpacity className="bg-indigo-500 p-4 w-80 text-white font-bold text-center">
              <Text className="text-white font-bold text-center text-base">
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-center pt-2 text-base">
            Do not have an account ?{" "}
            <Text onPress={handleRegisterClick} className="text-blue-700">
              Register
            </Text>{" "}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
