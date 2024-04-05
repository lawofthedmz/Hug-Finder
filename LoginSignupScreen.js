import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function LoginSignupScreen({ navigation }) {
    return (
    <View style={styles.startScreen}>
        <View style={styles.overlapGroupWrapper}>
            <View style={styles.overlapGroup}>
                <Image style={styles.HFBackground1} source={require('./assets/HF-background (2).png')} />
                <Image style={styles.HFBackground2} source={require('./assets/HF-background (2).png')} />
                <Image style={styles.HFLogo} source={require('./assets/HF-logo.png')} />
                <View style={styles.loginSignup}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.startButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignupSreen')}>
                        <Text style={styles.startButtonText}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    startScreen: {
        flex: 1,
    },
    
    overlapGroupWrapper: {
        backgroundColor: "#8a50f6",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    overlapGroup: {
        height: 812,
        position: "relative",
        width: 390,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
    HFBackground1:{
        width: '100%',
        height: '100%',
        top: -200,
        resizeMode: 'cover',
        position: "absolute",
        zIndex: 1,
    },
    HFBackground2:{
        width: '100%',
        height: '100%',
        bottom: -350,
        resizeMode: 'cover',
        position: "absolute",
        zIndex: 1,
    },

    
    
    HFLogo: {
        height: 100, // Adjust the height as needed
        width: 100, // Adjust the width as needed
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -50 }, { translateY: -50 }],
        zuIndex: 1,
    },

    loginSignup: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        top: '60%',
    },
    
    loginButton: {
        backgroundColor: "#ffffff",
        borderRadius: 25,
        padding: 20,
        width: 240,
        marginBottom: 20,
        alignItems: "center",
    },
    signupButton: {
        backgroundColor: "#ffffff",
        borderRadius: 25,
        padding: 20,
        width: 240,
        alignItems: "center",
    },
    startButtonText: {
        color: "#8a50f6",
        fontSize: 20,
    },
});
