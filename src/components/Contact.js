import React from 'react'
import { View, Text, StyleSheet ,Image, ScrollView,TouchableOpacity} from 'react-native'
import {
	MaterialIcons,
	MaterialCommunityIcons,
	SimpleLineIcons,
} from '@expo/vector-icons';


const Contact = ({ name, number, image }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.contact}>
                <View>
                    <Image style={styles.image} source={image}/>
                </View>
                <View style={styles.contactdetails}>
                    <Text style={styles.contactname}  numberOfLines={1}>{name}</Text>
                    <Text style={styles.contactnumber}>{number}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <View>
                        <MaterialIcons name="phone" size={28} color="#3bacfd" />
                    </View>

                    <View>
                        <MaterialCommunityIcons
                            name="message-processing"
                            size={28}
                            color="#3bacfd"
                        />
                    </View>

                    <View>
                        <SimpleLineIcons
                            name="options-vertical"
                            size={24}
                            color="grey"
                        />
                    </View>
                </View>

        </View>
        
        
    </ScrollView>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex:1,
		marginTop: 25, 
        alignItems: 'center',
    justifyContent: 'center',
    
},
    contact:{
        flex:1,
        flexDirection: 'row',   
    },
    image:{
        flex:0.2,
        width:65,
        height: 65,
        borderRadius:50,
    },
    contactname:{
        fontSize:17,
        fontWeight:'bold',
        marginBottom:7
    },
    contactnumber:{
        
    },
    contactdetails:{
        flex:0.4,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
        
    },
    iconsContainer:{
        flex: 0.4,
        flexDirection:'row',
        justifyContent: 'space-around',
        marginVertical:20,
        marginLeft:20,
        
      },
    

})
