import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBg, setRandomBg] = useState('');

  const generateBg = () => {
    const string = '1234567890abcdef';
    let hash = '#';

    for (let i = 0; i < 6; i++) {
      hash += string[Math.floor(Math.random() * 16)];
    }

    setRandomBg(hash);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBg} />
      <View style={[styles.container, {backgroundColor: randomBg}]}>
        <TouchableOpacity onPress={generateBg} style={styles.btn}>
          <Text
            style={{
              fontSize: 16,
              padding: 10,
            }}>
            click here
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#fff',
    elevation: 3,
  },
});
