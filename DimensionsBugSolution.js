```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, LayoutAnimation, UIManager, StyleSheet, View, Text } from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const DimensionsBugSolution = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const dimensions = Dimensions.get('window');
    setWidth(dimensions.width);
    setHeight(dimensions.height);
    
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setWidth(window.width);
      setHeight(window.height);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DimensionsBugSolution;
```