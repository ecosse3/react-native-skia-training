import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import type { Routes } from '../../Routes';

export const examples = [
  {
    screen: 'AnimatedDonutChart',
    title: '🍩 Animated Donut Chart',
  },
] as const;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
  },
});

export const Examples = () => {
  const { navigate } = useNavigation<StackNavigationProp<Routes, 'Examples'>>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {examples.map((thumbnail) => (
        <TouchableHighlight
          key={thumbnail.screen}
          onPress={() => navigate(thumbnail.screen)}
        >
          <View style={styles.thumbnail}>
            <Text style={styles.title}>{thumbnail.title}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};
