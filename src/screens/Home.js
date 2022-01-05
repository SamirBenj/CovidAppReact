import React, { useEffect, useState } from "react"
import { Text,View, StyleSheet, FlatList, TouchableOpacity} from "react-native"
import { ScrollView} from 'react-native-gesture-handler';
import Cards from '../components/Cards';
import ItemRows from "../components/ItemRows";

const Home = () =>{

    const url ="https://api.covid19api.com/summary";
    const [data, setData]= useState();
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchCovidData = async () => {
            setError(false)
            setIsLoading(false)
            try{
                const result = await fetch(url);
                const response = await result.json();
                setData(response);
                setIsLoading(true);
                // console.log(response)
            }
            catch(e){
                console.log(e);
                setError(true)
            }
        }
        fetchCovidData();



    },[]);


    return (
        <View style={styles.container}>
            <Text style={styles.covidHeading}>
                COVID19DASHBOARD
            </Text>
            <View style={styles.cards}>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop:170}}>

                <Cards 
                icon ="pulse"
                title ="Total Cases"
                bg = "#D93B4A"
                number ={data ? data.Global.TotalConfirmed : 'Wait.. 📛' }
                />
                <Cards 
                icon ="medkit"
                title ="Recovered"
                bg = "#FFF"
                number ={data ? data.Global.TotalRecovered : 'Wait.. 📛'}
                />                
                
                <Cards 
                icon ="nuclear"
                title ="Deaths Reported"
                bg = "#FFF"
                number ={data ? data.Global.TotalDeaths : 'Wait.. 📛'}
                /></ScrollView>
            </View>
            
            <View style={styles.flatlist}>
                <FlatList
                    data={data && data.Countries ? data.Countries : 0 }
                    renderItem={({item})=> <ItemRows item={item}/>}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#1c2732'
    },
    covidHeading : {
        color:'#FFF',
        fontSize:20,
        alignSelf:'center',
        fontWeight:'bold',
        marginTop:50
    },
    cards:{
        marginTop: -90
    },
    flatlist:{
        marginTop:10
    }
})
export default Home