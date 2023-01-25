import { Button, FlatList, SafeAreaView, StyleSheet, Text, View, processColor } from 'react-native';

import React from 'react';

const products = [
  { _id: 1, name: 'Simul 1', price: 50, quantity: 0 },
  { _id: 2, name: 'Simul 2', price: 29, quantity: 0 },
  { _id: 3, name: 'Simul 3', price: 200, quantity: 0 },
];

class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '10%', backgroundColor: 'green',  }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', margin: '10%', backgroundColor: 'yellow'}}>
          <Text>{item.name} - </Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' , alignContent : 'stretch' , marginRight:'18%'  }}>
          <Button title="PONER" onPress={this.props.onsacar} />
        
          <Button  style ={{ color:'fff'}} title="SACAR" onPress={this.props.onponer}  />
        </View>
      </View>
    )
  }
}

class App extends React.Component {
  state = {
    products,
  };

  onsacar = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({ products });
  }

  onponer = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.products}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onsacar={() => this.onsacar(item, index)}
              onponer={() => this.onponer(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        <Text style ={{ color: 'orange', marginRight: '33%' ,marginLeft: '35%', marginBottom: ' 10%', fontWeight :'bold' , backgroundColor: 'blueviolet'}}>Cantidad Total: {totalQuantity}</Text>
        <Text style ={{ color: 'green',marginRight:  '38%',marginLeft: '35%', fontWeight :'bold', backgroundColor: 'aqua'}}>Precio Total: {totalPrice}</Text>
      </SafeAreaView>
    );
  }
}


export default App;



