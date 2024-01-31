import { View } from "react-native";

import ArrowLeft from "../../../assets/svgs/arrow-left.svg";
import ArrowRight from "../../../assets/svgs/arrow-right.svg";
export const Flechitas = ({top}) => {
  return (
    <View
      style={{
        flex: 2,
        flexDirection: "row",
        position: "absolute",
        top: top,
        zIndex: 1000,
      }}
      pointerEvents="none"
    >
      <View style={[{ flex: 1, alignItems: "center", opacity: 0.3 }]}>
        <ArrowLeft height={80} />
      </View>
      <View style={[{ flex: 1 }]}></View>
      <View style={[{ flex: 1 }]}></View>
      <View style={[{ flex: 1 }]}></View>
      <View style={[{ flex: 1, alignItems: "center", opacity: 0.4 }]}>
        <ArrowRight height={80} />
      </View>
    </View>
  );
};
