import React from "react";
import { View, Text, TextInput, StyleSheet, Image, FlatList } from "react-native";

const foods = [
{
id:"1",
name:"Pepperoni Pizza",
price:"10$",
image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
},
{
id:"2",
name:"Cheese Burger",
price:"8$",
image:"https://images.unsplash.com/photo-1550547660-d9450f859349"
},
{
id:"3",
name:"Grilled Steak",
price:"15$",
image:"https://images.unsplash.com/photo-1544025162-d76694265947"
},
{
id:"4",
name:"Italian Pasta",
price:"12$",
image:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400"
}
];

export default function ExplorerScreen(){

return(

<View style={styles.container}>

<Text style={styles.header}>Explorer</Text>

{/* Search */}
<View style={styles.searchBox}>

<Text style={styles.icon}>📍</Text>

<TextInput
placeholder="Search for meals or area"
style={styles.searchInput}
/>

<Text style={styles.icon}>🔍</Text>

</View>

{/* Top Categories */}
<View style={styles.rowHeader}>
<Text style={styles.sectionTitle}>Top Categories</Text>
<Text style={styles.filter}>Filter</Text>
</View>

<View style={styles.categoryRow}>

<View style={styles.categoryItem}>
<Image
source={{uri:"https://images.unsplash.com/photo-1594007654729-407eedc4be65"}}
style={styles.categoryImg}
/>
<Text style={styles.categoryText}>Pizza</Text>
</View>

<View style={styles.categoryItem}>
<Image
source={{uri:"https://images.unsplash.com/photo-1550547660-d9450f859349"}}
style={styles.categoryImg}
/>
<Text style={styles.categoryText}>Burger</Text>
</View>

<View style={styles.categoryItem}>
<Image
source={{uri:"https://images.unsplash.com/photo-1544025162-d76694265947"}}
style={styles.categoryImg}
/>
<Text style={styles.categoryText}>Steak</Text>
</View>

</View>

{/* Popular Items */}
<View style={styles.rowHeader}>
<Text style={styles.sectionTitle}>Popular Items</Text>
<Text style={styles.view}>View all</Text>
</View>

<FlatList
data={foods}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(

<View style={styles.card}>

<Image
source={{uri:item.image}}
style={styles.foodImg}
/>

<View style={styles.foodInfo}>

<Text style={styles.foodName}>{item.name}</Text>

<Text style={styles.foodBy}>By Viet Nam</Text>

<Text style={styles.price}>{item.price}</Text>

</View>

</View>

)}
/>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#fff"
},

header:{
fontSize:24,
fontWeight:"bold"
},

searchBox:{
flexDirection:"row",
alignItems:"center",
borderWidth:1,
borderColor:"#ddd",
borderRadius:12,
paddingHorizontal:10,
marginVertical:15
},

searchInput:{
flex:1,
height:40
},

icon:{
marginHorizontal:5
},

rowHeader:{
flexDirection:"row",
justifyContent:"space-between",
marginVertical:10
},

sectionTitle:{
fontSize:18,
fontWeight:"bold"
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

categoryItem:{
alignItems:"center"
},

categoryImg:{
width:100,
height:60,
borderRadius:10
},

categoryText:{
marginTop:5,
fontSize:12
},

card:{
flexDirection:"row",
backgroundColor:"#fff",
borderRadius:12,
marginTop:15,
padding:10,
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:5,
elevation:3
},

foodImg:{
width:70,
height:70,
borderRadius:10
},

foodInfo:{
marginLeft:10,
justifyContent:"center"
},

foodName:{
fontWeight:"bold"
},

foodBy:{
color:"gray",
fontSize:12
},

price:{
marginTop:5,
fontWeight:"bold"
}

});