import React from "react";
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Image,
FlatList
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SignInScreen({navigation}){

return(
<View style={styles.container}>

<Text style={styles.title}>Sign In</Text>

<Text style={styles.label}>Email ID</Text>
<TextInput
placeholder="Enter your email here!"
style={styles.input}
/>

<Text style={styles.label}>Password</Text>
<TextInput
placeholder="Enter your password here!"
secureTextEntry
style={styles.input}
/>

<Text style={styles.forgot}>For got password?</Text>

<TouchableOpacity
style={styles.signButton}
onPress={()=>navigation.replace("Home")}
>
<Text style={styles.signText}>Sign In</Text>
</TouchableOpacity>

<Text style={styles.or}>Or sign in with</Text>

<View style={styles.socialRow}>

<View style={styles.google}>
<Text>Google</Text>
</View>

<View style={styles.facebook}>
<Text style={{color:"#fff"}}>Facebook</Text>
</View>

</View>

<Text style={styles.signup}>
Not yet a member? <Text style={{color:"orange"}}>Sign Up</Text>
</Text>

</View>
)
}

import ExplorerScreen from "./ExplorerScreen";

function AccountScreen({navigation}){

return(
<View style={styles.accountContainer}>

<View style={styles.blueHeader}/>

<Text style={styles.name}>Hung Nguyen</Text>

<Text style={styles.job}>Mobile developer</Text>

<Text style={styles.desc}>
I have above 5 years of experience in native mobile apps development,
now i am learning React Native
</Text>

<TouchableOpacity
style={styles.signButton}
onPress={()=>navigation.replace("SignIn")}
>
<Text style={styles.signText}>Sign Out</Text>
</TouchableOpacity>

</View>
)
}

function HomeTabs(){

return(
<Tab.Navigator>

<Tab.Screen
name="Explorer"
component={ExplorerScreen}
/>

<Tab.Screen
name="Account"
component={AccountScreen}
/>

</Tab.Navigator>
)
}

export default function App(){

return(
<NavigationContainer>

<Stack.Navigator>

<Stack.Screen
name="SignIn"
component={SignInScreen}
options={{headerShown:false}}
/>

<Stack.Screen
name="Home"
component={HomeTabs}
options={{headerShown:false}}
/>

</Stack.Navigator>

</NavigationContainer>
)
}

const styles=StyleSheet.create({

container:{
  flex:1,
  justifyContent:"center",
  padding:20
},

title:{
fontSize:28,
fontWeight:"bold",
textAlign:"center",
marginBottom:25
},

label:{
marginBottom:5
},

input:{
borderWidth:1,
borderColor:"#ccc",
borderRadius:8,
padding:12,
marginBottom:15
},

forgot:{
textAlign:"right",
color:"orange",
marginBottom:20
},

signButton:{
backgroundColor:"orange",
padding:15,
borderRadius:8,
alignItems:"center"
},

signText:{
color:"#fff",
fontWeight:"bold"
},

or:{
textAlign:"center",
marginTop:20
},

socialRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:15
},

google:{
borderWidth:1,
width:"45%",
padding:12,
alignItems:"center"
},

facebook:{
backgroundColor:"#3b5998",
width:"45%",
padding:12,
alignItems:"center"
},

signup:{
textAlign:"center",
marginTop:20
},

header:{
fontSize:24,
fontWeight:"bold"
},

search:{
borderWidth:1,
borderColor:"#ccc",
borderRadius:10,
padding:10,
marginVertical:15
},

sectionTitle:{
fontSize:18,
fontWeight:"bold"
},

categoryHeader:{
flexDirection:"row",
justifyContent:"space-between",
marginVertical:10
},

filter:{
color:"orange"
},

view:{
color:"orange"
},

categoryRow:{
flexDirection:"row",
justifyContent:"space-between"
},

categoryImg:{
width:100,
height:60,
borderRadius:10
},

card:{
flexDirection:"row",
marginTop:15,
alignItems:"center"
},

foodImg:{
width:70,
height:70,
borderRadius:10
},

accountContainer:{
flex:1,
alignItems:"center"
},

blueHeader:{
width:"100%",
height:140,
backgroundColor:"#18A9D6",
marginBottom:40
},

name:{
fontSize:24,
fontWeight:"bold"
},

job:{
color:"#18A9D6",
marginBottom:15
},

desc:{
textAlign:"center",
paddingHorizontal:30,
marginBottom:30
}

});