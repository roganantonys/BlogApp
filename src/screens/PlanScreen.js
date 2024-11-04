import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {Dropdown} from '../components/Dropdown';
import TextWithButtons from '../components/TextWithButtons';

const PlanScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <ScrollView>
        <Dropdown />
        <TextWithButtons />
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Card
            subtitle="Company"
            imageURi={require('../assests/image1.png')}
            content="Integer porta scelerisque sagittis, nunc mattis sit convallis nulla
          ultricies fermentum..."
            date="2 days ago"
          />

          <Card
            subtitle="Financial Plan"
            imageURi={require('../assests/image2.png')}
            content="Non congue dolor pellentesque vitae ac at habitant id justo sodales eleifend ornare lectus..."
            date="February 28, 2021"
          />
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Card
            subtitle="Execution"
            imageURi={require('../assests/image3.png')}
            content="Non aliquet in pulvinar pellentesque nullam lobortis interdum faucibus senectus..."
            date="February 09, 2021"
          />

          <Card
            subtitle="Company"
            imageURi={require('../assests/image4.png')}
            content="Enim lacus sit luctus est, morbi viverra cras gravida tempor aliquet elementum malesuada..."
            date="December 09, 2020"
          />
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Card
            subtitle="Company"
            imageURi={require('../assests/image5.png')}
            content="Semper etiam ut dignissim libero accumsan faucibus in congue..."
            date="May 31, 2015"
          />

          <Card
            subtitle="Company"
            imageURi={require('../assests/image6.png')}
            content="Diam sagittis congue leo aliquet scelerisque arcu at massa diam in arcu massa tellus nisl lectus..."
            date="May 29, 2014"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({});
