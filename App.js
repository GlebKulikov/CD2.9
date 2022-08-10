import * as React from "react";
import Items  from "./components/Items";
import { useEffect } from "react";
import {data} from './utils/data';
import {
  Text,
  View,
  FlatList,
  BackHandler,
  Alert,
} from "react-native";

function App() {
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
    return item.id;
  };

  const toBack = () => {
    Alert.alert("Sinner", "Do you wanna get out?", [
      {
        text: "No",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", toBack);
    return () => BackHandler.removeEventListener("hardwareBackPress", toBack);
  }, []);

  return (
    <View>
      <View
        style={{
          marginTop: "2%",
          marginBottom: "2%",
          backgroundColor: "#8B0000",
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: "35px" }}>
          Deadly Sins
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

export default App;