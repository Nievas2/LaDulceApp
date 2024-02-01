import { Button, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styleSheet";
import { useState } from "react";

export const Pregunta = ({ item }) => {
  const [isActive, setIsActive] = useState(item.active);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <View
      key={item.id}
      style={[styles.container, styles.questions, { marginBottom: 15 }]}
    >
      <TouchableOpacity
        onPress={handleClick}
        title={item.title}
        style={{ width:"100%", alignItems: "center" }} 
      >
        <Text style={[styles.subTitle]}>{item.title}</Text>
      </TouchableOpacity>

      {isActive ? (
        <Text style={[styles.texts]}>{item.description}</Text>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};
