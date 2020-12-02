import React, {useEffect, useState} from 'react';
import {View, requireNativeComponent, StyleSheet} from 'react-native';

export const Light = requireNativeComponent('Light');

const App = () => {
  const [currentLight, setCurrentLight] = useState(0);

  useEffect(() => {
    const next = currentLight != 1 ? 10000 : 3000;
    const interval = setInterval(() => {
      setCurrentLight(currentLight < 2 ? currentLight + 1 : 0);
    }, next);
    return () => clearInterval(interval);
  }, [currentLight]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Light
          style={{
            ...styles.light,
            backgroundColor: 'green',
            opacity: currentLight === 0 ? 1 : 0.4,
          }}
        />
      </View>
      <View style={styles.box}>
        <Light
          style={{
            ...styles.light,
            backgroundColor: 'yellow',
            opacity: currentLight === 1 ? 1 : 0.4,
          }}
        />
      </View>
      <View style={styles.box}>
        <Light
          style={{
            ...styles.light,
            backgroundColor: 'red',
            opacity: currentLight === 2 ? 1 : 0.4,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 150,
    overflow: 'hidden',
    marginBottom: 20,
  },
  light: {
    width: 150,
    height: 150,
  },
});

export default App;
