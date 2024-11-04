import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const TextWithButtons = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Blog</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Text style={styles.addNewText}>Add New</Text>
        </Pressable>
        <TouchableOpacity style={styles.previewButton}>
          <Text style={styles.previewButtonText}>Preview</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextWithButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text: {
    color: '#1B1D21',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNewText: {
    color: '#6C5DD3',
    marginRight: 10,
  },
  previewButton: {
    width: 74,
    height: 40,
    backgroundColor: '#6C5DD3',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
