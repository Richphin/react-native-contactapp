import React from 'react'
import { View, Text, ScrollView,StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const Loginscreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Log in</Text>
            <View style={styles.detailscontainer}>
                <TextInput
                    placeholder={'Username'}
                    style={styles.details}
                />
                <View style={styles.line}></View>
                <TextInput
                    placeholder={'Password'}
                    style={styles.details}
                />
                <View style={styles.line}></View>
                <TouchableOpacity>
                    <Text style={styles.forgotpassword}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Log in
                </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.signuptext1}>Don't have account?</Text> 
                <TouchableOpacity><Text style={styles.signuptext}>  Sign up</Text></TouchableOpacity>
                
            </View>
            
            
        </View>
    )
}

export default Loginscreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 20 ,
        width:'70%',
        marginVertical:20,
        marginHorizontal:50,
    
      },
      header: {
        flex: 0.2,
        color:'#6036b1',
        fontSize:55,
        marginTop: 50 ,

      },
      detailscontainer: {
        flex: 0.4,
        color:'#6036b1',
        marginTop: 20 ,

      },
      details: {
        flex: 0.2,
        color:'#6036b1',
        fontSize:20,
        marginTop:25,
        marginBottom:10,
      },
      forgotpassword: {
          color:'#27b4e4',
          marginVertical:10,
          alignSelf:'flex-end'
      },

      buttonContainer:{
        flex: 0.1,
        justifyContent: 'center',
        alignItems:'center',
      },
    
      button:{
        width:'100%',
        height:50,
        backgroundColor:'#6036b1',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
      },
    
      buttonText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
      },
      line: {
            width: '100%',
            height: 2,
            backgroundColor: '#6036b1',
        },
        signupContainer: {
            flex: 0.2,
            color:'#6036b1',
            marginTop: 20 ,
            flexDirection:'row',
            justifyContent: 'center',
            alignItems:'center',
            
          },
          signuptext: {
            color:'#6036b1',
            fontSize:17,
          },
          signuptext1: {
            fontSize:17,
          },
})
