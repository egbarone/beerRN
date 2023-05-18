import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://okdiario.com/img/2022/12/19/los-6-mejores-tipos-de-cerveza-para-beber-en-invierno-655x368.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsItem;
