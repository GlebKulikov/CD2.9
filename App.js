import * as React from 'react';
import { useEffect } from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet, BackHandler, Alert, TextInput, Image } from 'react-native';
import './1.jpg';
import './2.jpg';
import './3.jpg';
import './4.jpg';
import './5.jpg';
import './6.jpg';
import './7.jpg';


const Items = (props) => {
  return (
    <View style={{}}>
      <View style={{backgroundColor:'#8B0000'}}>
        <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>{props.name}</Text>
      </View>
      <View style={styles.items}>
        <Image source={require(props.img)} style={{width: '70px', height: '70px', borderRadius: '70px', marginTop: '5%', marginLeft: '4%'}}/>
        <Text style={{color: 'black', fontSize: 25, marginLeft: '8%', marginTop: '10%' }}>{props.description}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const renderItem = (item) => {
    return (
      <Items
        img={item.item.img}
        name={item.item.name}
        description={item.item.description}
      ></Items>
    );
  };

  const keyExtractor = (item) => {
    item.id;
  };

  const toBack = () => {
    Alert.alert("Sinner", "Do you wanna get out?", [
      {
        text: "No",
        onPress: () => null,
        style: "cancel"
      },
      { 
        text: "Yes", 
        onPress: () => BackHandler.exitApp() 
    }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", toBack);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", toBack);
  }, []);


  return (
    <View>
      <View style={{marginTop: '2%', marginBottom: '2%', backgroundColor: '#8B0000'}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: '35px'}}>Deadly Sins</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginLeft: '10%',
    fontSize: 20,
    fontFamily: 'Verdana'
  },
  items: {
    flexDirection: 'row',
    width: "100%",
    height: 100,
  },
  mainText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 450,
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#dcdcdc",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    fontWeight: 'bold',
    width: "100%",
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },
});

const data = [
  {
    id: 0,
    img: './1.jpg',
    name: "Unknown User",
    description: "Pride",
  },
  {
    id: 1,
    img: './2.jpg',
    name: "Unknown User",
    description: "Greed",
  },
  {
    id: 2,
    img: './3.jpg',
    name: "Unknown User",
    description: "Lust",
  },
  {
    id: 3,
    img: './4.jpg',
    name: "Unknown User",
    description: "Envy",
  },
  {
    id: 4,
    img: './5.jpg',
    name: "Unknown User",
    description: "Gluttony",
  },
  {
    id: 5,
    img: './6.jpg',
    name: "Unknown User",
    description: "Wrath",
  },
  {
    id: 6,
    img: './7.jpg',
    name: "Unknown User",
    description: "Sloth",
  },
];