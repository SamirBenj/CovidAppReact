import React, { Component } from 'react';
import { StyleSheet, View,Text ,TouchableOpacity, Alert} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

// Ionicons.loadFont().then();
Icon.loadFont().then();
export default class Card extends Component{
    render(){
    return(
        <TouchableOpacity onPress={()=> {

            Alert.alert(
                "Hello",
                "My Alert Msg",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );        }
        }>

        <View 
        style={{
            ...styles.container,
            backgroundColor: this.props.bg,
        }}>
            <View style={styles.col}>
                <Icon 
                name={this.props.icon}
                color={this.props.bg == "#D93B4A" ? "#fff" :"red"}
                size={30}
                />
            </View>
            <Text style={styles.title}>
                {this.props.title}
            </Text>
            <Text style={{
                ...styles.number,
                color:this.props.bg == "#D93B4A" ? "#FFF" : "#000"
            }}
            >
                {this.props.number}
            </Text>
        </View>
        </TouchableOpacity>
    )
}
}
const styles = StyleSheet.create({
    container:{
        height:130,
        width: 130,
        borderRadius:30,
        padding:15,
        marginLeft:20,
    },
    col:{
        flexDirection:'row'   
    },
    title:{
        marginTop:22,
        color:'#b8b8aa',
        fontWeight:'bold',
        // flexWrap:'wrap'
    },
    number:{
        fontWeight:'bold',
        fontSize:14,
    }
})

// export default Cards