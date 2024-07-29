import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DiceOne from '../assets/one.png';
import DiceTwo from '../assets/two.png';
import DiceThree from '../assets/three.png';
import DiceFour from '../assets/four.jpg';
import DiceFive from '../assets/five.png';
import DiceSix from '../assets/six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    switch (randomNum) {
      case 1:
        setDiceImage(DiceOne)
        break;

      case 2:
        setDiceImage(DiceTwo)
        break;

      case 3:
        setDiceImage(DiceThree)
        break;

      case 4:
        setDiceImage(DiceFour)
        break;

      case 5:
        setDiceImage(DiceFive)
        break;

      case 6:
        setDiceImage(DiceSix)
        break;

      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
      <View style={styles.container}>
        <Dice imageUrl={diceImage} />
        <TouchableOpacity onPress={rollDice}>
          <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
