// HomeScreen.tsx
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../types/RootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Top curved header */}

      <View style={styles.topShape}>
        <View style={styles.circle}>
          <Image
            source={require("../../assets/images/education.png")}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")} // or CreateAccount screen if you add one
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TeacherDashboard")}
        >
          <Text style={styles.buttonText}>Teacher Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("StudentDashboard")}
        >
          <Text style={styles.buttonText}>Student Dashboard</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom curved footer */}
      <View style={styles.bottomShape} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  topShape: {
    width: "100%",
    height: 180,
    backgroundColor: "#003366",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  iconWrapper: {
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    marginTop: 50,
  },
  icon: { width: 160, height: 160 },
  title: { fontSize: 22, fontWeight: "bold", color: "#003366" },

  buttonContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    width: 220,
    padding: 15,
    backgroundColor: "#003366", // dark blue
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  bottomShape: {
    height: 150,
    backgroundColor: "#003366",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
