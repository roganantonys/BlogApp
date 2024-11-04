import {SafeAreaView, Text, View} from 'react-native';
import BottomNavigation from './src/navigations/BottomNavigation';

const App = () => {
  return (
    <View style={{backgroundColor: '#F5F5F5', flex: 1}}>
      <BottomNavigation />
    </View>
  );
};

export default App;
