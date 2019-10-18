import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Second from './Second';

/*class Third extends Component {
  render() {
    return (
      <Text>This is Second Component</Text>
    );
  }
}*/

var data = [
  { key: 'Devin', name: "2" },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
]

const Third = () => {
  return (
    <View>
      <Text>This is Third Component</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.key}
        ListEmptyComponent={<Empty></Empty>}
        horizontal={true}
        onPressItem={() => console.log("item is clicked")}
        inverted={false}
        renderItem={({ item }) =>
          <Item title={item.key}></Item>
        }
      />
    </View>
  );
}

class Item extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={(item) => this.actionOnRow(item)}>
        <View>
          <Text style={styles.item}>{this.props.title}</Text>
          <Text style={styles.item}>1</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  actionOnRow(item) {
    console.log('Selected Item :', item);
  }

}



class Empty extends Component {
  render() {
    return (
      <View>
        <Text>No Items Found</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default Third