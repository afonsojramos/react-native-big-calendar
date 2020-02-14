import { storiesOf } from '@storybook/react'
import React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import { Calendar } from './Calendar'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    height: '100%',
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
})

const events = [
  {
    title: 'Meeting',
    start: new Date(2020, 1, 13, 10, 0),
    end: new Date(2020, 1, 13, 10, 30),
  },
  {
    title: 'Coffee break',
    start: new Date(2020, 1, 14, 15, 45),
    end: new Date(2020, 1, 14, 16, 30),
  },
  {
    title: 'Repair my car',
    start: new Date(2020, 1, 16, 7, 45),
    end: new Date(2020, 1, 16, 13, 30),
  },
]

storiesOf('Calendar', module).add('main', () => (
  <View style={styles.container}>
    <Calendar
      style={styles.calendar}
      height={Dimensions.get('window').height}
      events={events}
      mode="3days"
    />
  </View>
))
