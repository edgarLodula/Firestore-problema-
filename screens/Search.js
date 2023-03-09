import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import db from "../config"
import { Avatar, ListItem, Icon } from "react-native-elements";

export default class SearchScreen extends Component {
  constructor(){
    super()
    this.state={
      banco:[]

    }
    
  }
 starter=()=>{
  db.collection("transactions")
 .limit(10)
 .get()
 .then((dados)=>{
  dados.docs.map(doc=>{
    this.setState({banco:[...this.state.banco,doc.data()]})
  })

 })
 }
  componentDidMount(){
   this.starter() 

  }
  renderItem = ({ item, i }) => {
    var date = item.date
      .toDate()
      .toString()
      .split(" ")
      .splice(0, 4)
      .join(" ");

    var transactionType =
      item.transaction_type === "issue" ? "issued" : "returned";
    return (
      <View style={{ borderWidth: 1 }}>
        <ListItem key={i} bottomDivider>
          <Icon type={"antdesign"} name={"book"} size={40} />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {`${item.book_name} ( ${item.book_id} )`}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {`This book ${transactionType} by ${item.student_name}`}
            </ListItem.Subtitle>
            <View style={styles.lowerLeftContaiiner}>
              <View style={styles.transactionContainer}>
                <Text
                  style={[
                    styles.transactionText,
                    {
                      color:
                        item.transaction_type === "issue"
                          ? "#78D304"
                          : "#0364F4"
                    }
                  ]}
                >
                  {item.transaction_type.charAt(0).toUpperCase() +
                    item.transaction_type.slice(1)}
                </Text>
                <Icon
                  type={"ionicon"}
                  name={
                    item.transaction_type === "issue"
                      ? "checkmark-circle-outline"
                      : "arrow-redo-circle-outline"
                  }
                  color={
                    item.transaction_type === "issue" ? "#78D304" : "#0364F4"
                  }
                />
              </View>
              <Text style={styles.date}>{date}</Text>
            </View>
          </ListItem.Content>
        </ListItem>
      </View>
    );
  };
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Pesquisa</Text>
          <View>
           <FlatList data={this.state.banco} 
           renderItem={this.renderItem}
           keyExtractor={(item, index) => index.toString()}/>    
           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
