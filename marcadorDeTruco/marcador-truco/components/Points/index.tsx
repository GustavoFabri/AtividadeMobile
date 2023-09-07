import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  points: number;
  type: string;
};

export default function Points(props: Props) {
  return (
    <View style={styles.containerPoint}>
      <Text
        style={[
          styles.namePoint,
          props.type === "adversario"
            ? styles.adversarioStyle
            : styles.normalStyle,
        ]}
      >
        {props.name}
      </Text>

      <Text
        style={[
          styles.labelPoint,
          props.type === "adversario"
            ? styles.adversarioStyle
            : styles.normalStyle,
        ]}
      >
        {props.points}
      </Text>
    </View>
  );
}
