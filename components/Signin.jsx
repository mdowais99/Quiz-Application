import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  auth } from "../config";
export default function Signin({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            Alert.alert('Warning!', `${errorCode}:${errorMessage}`, [
                { text: 'OK' },
            ]);
        }
    }
    return (
        <View style={styles.container}>

        <Image
        style={styles.imager}
        source={require('../assets/login-logo.png')}
        />

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Your Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                <Text style={styles.signup_button}>Sign Up here</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={submitHandler} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2afe9b",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
    },

    image: {
        marginBottom: 50,
        width: "60%",
        height: 100,
    },

    inputView: {
        backgroundColor: "#cbf3f0",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 20,
    },

    signup_button: {
        height: 30,
        marginBottom: 5,
        color: "blue",
    },

    loginBtn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#3e8efe",
    },

    imager: {
        marginBottom: 70,
        marginTop: -50,
        width: "70%",
        height: 80,
      }
});
