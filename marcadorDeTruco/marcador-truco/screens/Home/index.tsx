import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Points from "../../components/Points";
import BtnPoint from "../../components/BtnPoint";

export default function Home() {
  const [wePoints, setWePoints] = useState(0);
  const [hePoints, setHePoints] = useState(0);

  function handleAddNos() {
    if (wePoints === 11) {
      alert("Nós ganhamos");
      setWePoints(0);
      setHePoints(0);
      return;
    }
    setWePoints(wePoints + 1);
  }

  function handleAddEles() {
    if (hePoints == 11) {
      alert("Eles ganharam");
      setHePoints(0);
      setWePoints(0);
      return;
    }
    setHePoints(hePoints + 1);
  }

  function handleRemoveNos() {
    if (wePoints === 0) return;
    setWePoints(wePoints - 1);
  }

  function handleRemoveEles() {
    if (hePoints === 0) return;
    setHePoints(hePoints - 1);
  }

  function zerar() {
    setHePoints(0);
    setWePoints(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MARCADOR DE TRUCO</Text>

      <View style={styles.form}>
        <View style={styles.containerForm}>
          <View style={styles.containerPoints}>
            <Points name="Nós" points={wePoints} type="nos" />
          </View>

          <View style={styles.containerPoints}>
            <Points name="Eles" points={hePoints} type="adversario" />
          </View>
        </View>

        <View style={styles.containerForm}>
          <View style={styles.containerPoints}>
            <BtnPoint type="add" btnText="+1" onClick={handleAddNos} />
            <BtnPoint type="remove" btnText="-1" onClick={handleRemoveNos} />
          </View>

          <View style={styles.containerPoints}>
            <BtnPoint type="add" btnText="+1" onClick={handleAddEles} />
            <BtnPoint type="remove" btnText="-1" onClick={handleRemoveEles} />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={zerar}>
          <Text style={styles.buttonText}>ZERAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
