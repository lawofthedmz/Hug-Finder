import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function LoginScreen({ navigation }){
    return (
    <View style={styles.loginScreen}>
        <View style={styles.overlapGroupWrapper}>
            <View style={styles.overlapGroup}>
                <Image style={styles.HFBackground1} source={require('./assets/HF-background (2).png')} />
                <Image style={styles.HFBackground2} source={require('./assets/HF-background (2).png')} />
            </View>
        </View>
        <View style={styles.inputs}>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.inputField} />
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput style={styles.inputField} secureTextEntry={true} />
            </View>
            
            <Text style={styles.orText}>OR</Text>
            
            <View style={styles.inputWrapper2}>
                <TouchableOpacity style={styles.appleButton} onPress={() => navigation.navigate('APPLE')}>
                    <Image style={styles.appleicon} source={require('./assets/appleicon.png')} />
                    <Text style={styles.buttonText}>Continue with Apple</Text>
                </TouchableOpacity>                
            </View>
            <View style={styles.inputWrapper2}>
                <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('GOOGLE')}>
                    <Image style={styles.googleicon} source={require('./assets/googleicon.png')} />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper2}>
                <TouchableOpacity style={styles.metaButton} onPress={() => navigation.navigate('META')}>
                    <Image style={styles.metaicon} source={require('./assets/metaicon.png')} />
                    <Text style={styles.buttonText}>Continue with Meta</Text>
                </TouchableOpacity>
            </View>  
        </View>
        <TouchableOpacity style={styles.startButton} onPress={()=> navigation.navigate("MAIN")}>
            <Text style={styles.startButtonText}>Continue</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    
    inputs: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: '100%',
        top: '20%',
    },
    loginTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 40,
        marginTop: 50,
    },
    inputWrapper: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,

        
    },
    inputLabel: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: 'white',
    },
    orText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },

    inputWrapper2: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,

        
    },appleButton: {
        backgroundColor: "#19195E",
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        alignItems: "center",
        justifyContent: 'left',
        flexDirection: 'row',
    },
    appleicon: {
        width: 25, // Adjust the width to make the image smaller
        height: 25, // Adjust the height to make the image smaller
        resizeMode: 'contain', // Keep the aspect ratio of the image
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    googleButton: {
        backgroundColor: "#19195E",
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        alignItems: "center",
        justifyContent: 'left',
        flexDirection: 'row',
    },
    googleicon: {
        width: 25, // Adjust the width to make the image smaller
        height: 25, // Adjust the height to make the image smaller
        resizeMode: 'contain', // Keep the aspect ratio of the image
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    metaButton: {
        backgroundColor: "#19195E",
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        alignItems: "center",
        justifyContent: 'left',
        flexDirection: 'row',

    },
    metaicon: {
        width: 25, // Adjust the width to make the image smaller
        height: 25, // Adjust the height to make the image smaller
        resizeMode: 'contain', // Keep the aspect ratio of the image
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: '15%',
        },

    startButton: {
        backgroundColor: "#ffffff",
        borderRadius: 30,
        width: '50%',
        height: '7.5%',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 100,
        
    },
    startButtonText: {
        color: "#8a50f6",
        fontSize: 15,
    },

    
});
