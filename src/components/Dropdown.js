import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Text} from 'react-native';

export const Dropdown = () => {
  return (
    <View style={styles.container}>
      {/* First Dropdown */}
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          style={{
            inputAndroidContainer: styles.inputAndroidContainer,
            placeholder: styles.placeholder,
          }}
          onValueChange={value => console.log(value)}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
          placeholder={{label: 'AfterGlow', value: 'AfterGlow'}}
        />
      </View>

      {/* Scenario Text and Dropdown */}
      <View style={styles.scenarioContainer}>
        <Text style={styles.scenarioText}>Scenario</Text>
        <View style={styles.scenarioDropdown}>
          <RNPickerSelect
            style={{
              inputAndroidContainer: styles.inputAndroidContainer,
              placeholder: styles.scenarioPlaceholder,
            }}
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
            ]}
            placeholder={{label: 'Default', value: 'Default'}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  dropdownContainer: {
    width: 181,
    height: 46,
    borderColor: '#1b1d211a',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#FAFAFB',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  inputAndroidContainer: {
    width: '100%',
  },
  placeholder: {
    color: '#9D9DAA',
  },

  scenarioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    height: 46,
    paddingHorizontal: 10,
  },
  scenarioText: {
    color: '#9D9DAA',
    marginRight: 10,
  },
  scenarioDropdown: {
    flex: 1,
  },
  scenarioPlaceholder: {
    color: '#676E7E',
  },
});
