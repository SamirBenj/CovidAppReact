import React from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';

const ItemRows = ({item})=>{
var code = item.CountryCode.toLowerCase();
    return(
        <View style={styles.rows}>
            <View style={{flexDirection:'row',
        justifyContent:'space-around'}}>
                <View>
                    <Image
                        source={{
                            uri:`https://www.worldometers.info/img/flags/${code}-flag.gif`
                        }}
                        style={styles.flag}
                    />
                </View>
                <View style={{marginRight:100,marginTop:5}}>
                    <Text style={styles.countryName}>{item.Country}</Text>
                </View>
                <View>
                    <Text style={styles.totalCases}>{item.TotalConfirmed}</Text>
                </View>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    rows: {
        backgroundColor: 'red',

        // width: '100%',
        // marginTop: 10,
        margin:10,
        borderRadius:10,
        // marginBottom: 8,
        padding: 10
    },
    countryName:{
        fontSize:15,
        fontWeight:'bold',
        color:'#FFF'
    },
    totalCases:{
        fontSize:15,
        color:'#fff',
        fontWeight:'bold',
        marginTop:5,

    },
    flag:{
        height:40,
        width:50,
        padding:10,
        borderRadius:1000
    }
})

export default ItemRows;