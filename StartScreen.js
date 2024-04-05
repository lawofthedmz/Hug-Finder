import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function StartScreen({ navigation }) {
    
    return (
    <View style={styles.startScreen}>
        <View style={styles.overlapGroupWrapper}>
            <View style={styles.overlapGroup}>
                <Image style={styles.HFBackground1} source={require('./assets/HF-background (2).png')} />
                <Image style={styles.HFBackground2} source={require('./assets/HF-background (2).png')} />
                <Image style={styles.HFLogo} source={require('./assets/HF-logo.png')} />
                <TouchableOpacity style={styles.startButton} onPress={()=> navigation.navigate("LoginSignupScreen")}>
                    <Text style={styles.startButtonText}>Get Started</Text>
                </TouchableOpacity>    
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
    
    startButton: {
        backgroundColor: "#ffffff",
        borderRadius: 30,
        width: 300,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 100,
        
    },
    startButtonText: {
        color: "#8a50f6",
        fontSize: 20,
    },
});
