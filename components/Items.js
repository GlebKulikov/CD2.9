import React from 'react';
import {Image, Text, View} from "react-native";
import { styles } from "../utils/styles";

function Items(props) {
  return (
    <View style={{}}>
      <View style={{ backgroundColor: "#8B0000" }}>
        <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
          {props.name}
        </Text>
      </View>
      <View style={styles.items}>
        <Image
          source={props.img}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "70px",
            marginTop: "5%",
            marginLeft: "4%",
          }}
        />
        <Text
          style={{
            color: "black",
            fontSize: 25,
            marginLeft: "8%",
            marginTop: "10%",
          }}
        >
          {props.description}
        </Text>
      </View>
    </View>
  );
}

export default Items;