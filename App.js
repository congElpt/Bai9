import React, { useState, createContext, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExplorerScreen from "./ExplorerScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ================= CONTEXT =================
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    // giả lập login
    setUser({ name: "Hung Nguyen", email });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

// ================= SCREENS =================
function SignInScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        placeholder="Enter your email here!"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password here!"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.forgot}>Forgot password?</Text>

      <TouchableOpacity
        style={styles.signButton}
        onPress={() => signIn(email, password)}
      >
        <Text style={styles.signText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <View style={styles.google}>
          <Text>Google</Text>
        </View>

        <View style={styles.facebook}>
          <Text style={{ color: "#fff" }}>Facebook</Text>
        </View>
      </View>

      <Text style={styles.signup}>
        Not yet a member? <Text style={{ color: "orange" }}>Sign Up</Text>
      </Text>
    </View>
  );
}

function AccountScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.accountContainer}>
      <View style={styles.blueHeader} />

      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.job}>Mobile developer</Text>

      <Text style={styles.desc}>
        I have above 5 years of experience in native mobile apps development,
        now i am learning React Native
      </Text>

      <TouchableOpacity style={styles.signButton} onPress={signOut}>
        <Text style={styles.signText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

// ================= NAVIGATION =================
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorer" component={ExplorerScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={HomeTabs} />
      ) : (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
}

// ================= APP =================
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

// ================= STYLES =================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25
  },

  label: {
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },

  forgot: {
    textAlign: "right",
    color: "orange",
    marginBottom: 20
  },

  signButton: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },

  signText: {
    color: "#fff",
    fontWeight: "bold"
  },

  or: {
    textAlign: "center",
    marginTop: 20
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  google: {
    borderWidth: 1,
    width: "45%",
    padding: 12,
    alignItems: "center"
  },

  facebook: {
    backgroundColor: "#3b5998",
    width: "45%",
    padding: 12,
    alignItems: "center"
  },

  signup: {
    textAlign: "center",
    marginTop: 20
  },

  accountContainer: {
    flex: 1,
    alignItems: "center"
  },

  blueHeader: {
    width: "100%",
    height: 140,
    backgroundColor: "#18A9D6",
    marginBottom: 40
  },

  name: {
    fontSize: 24,
    fontWeight: "bold"
  },

  job: {
    color: "#18A9D6",
    marginBottom: 15
  },

  desc: {
    textAlign: "center",
    paddingHorizontal: 30,
    marginBottom: 30
  }
});