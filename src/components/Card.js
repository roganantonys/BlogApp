import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, Paragraph} from 'react-native-paper';

const CardComponent = ({subtitle, content, imageURi, date}) => {
  return (
    <Card
      mode="elevated"
      elevation={10}
      style={{
        margin: 10,
        width: '45%',

        backgroundColor: 'white',
        height: '100%',
      }}>
      <Card.Cover
        source={imageURi}
        style={{
          width: '100%',
          height: 100,
          marginTop: 10,
          backgroundColor: 'white',
        }}
        resizeMode="contain"
      />
      <Card.Title
        subtitle={subtitle}
        subtitleStyle={{
          fontSize: 14,
          color: '#1B1D21',
          fontWeight: 'medium',
          fontFamily: 'Inter',
        }}
      />
      <Card.Content>
        <Paragraph
          style={{
            fontSize: 12,
            color: '#9D9DAA',
            fontFamily: 'inter-18-pt-Medium',
          }}>
          {content}
        </Paragraph>
      </Card.Content>
      <Card.Content style={{bottom: -20, flexDirection: 'row'}}>
        <Image source={require('../assests/calendar_month.png')} />
        <Text
          style={{
            marginLeft: 10,
            color: '#9D9DAA',
            fontFamily: 'inter-18-pt-Medium',
          }}>
          {date}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default CardComponent;

const styles = StyleSheet.create({});
