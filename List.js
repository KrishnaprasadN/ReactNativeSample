import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, SectionList, TouchableHighlight } from 'react-native'

class List extends Component {

  // render() {
  //   return (
  //     <View>
  //       <FlatList
  //         data={this.apidata}
  //         renderItem={({ item }) =>
  //           <Item title={item.key} first={item.first}></Item>
  //         }
  //         keyExtractor={item => item.key}
  //         horizontal={false}
  //         ListEmptyComponent={<Empty></Empty>}
  //       />
  //     </View>
  //   );


  _onPress = (item) => console.log(item)
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { title: 'Title 1', key: 'item1' },
            { title: 'Title 2', key: 'item2' },
            { title: 'Title 3', key: 'item3' }
          ]}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={{ backgroundColor: 'white' }}>
                <Text>{item.title}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}


apidata = [
  { key: 'Devin', first: "ram", count: 1 },
  { key: 'Dan', first: "sham", count: 5 },
  { key: 'Dominic', first: "ram", count: 3 },
  { key: 'Jackson', first: "ram" },
  { key: 'James', first: "ram" },
  { key: 'Joel', first: "ram" }
]


class Item extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={(item) => console.log("item is clicked")}>
        <View>
          <Text style={styles.item}>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

}

class Empty extends Component {
  render() {
    return (
      <Text>No Item Found</Text>
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    height: 45,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(217,124,247,1.0)',
  }
})


export default List