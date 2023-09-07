import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  btnText: string;
  type: string;
  onClick: () => void;
};

export default function BtnPoint(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          props.type === "add" ? styles.addStyle : styles.removeStyle,
        ]}
        onPress={props.onClick}
      >
        <Text style={styles.buttonText}>{props.btnText}</Text>
      </TouchableOpacity>
    </View>
  );
}
