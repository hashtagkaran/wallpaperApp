import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';
import cardData from "../data/cardData";
import {Card} from "react-native-paper";

// const cardData = "https://gist.githubusercontent.com/hashtagkaran/58b40e6b1bf7647d64a1c1558c956bd7/raw/deaa558a558f4916fa21531b15722cef0a608742/wallapaperAppData.js"

const HomeScreen = () => {
    const renderItem = ({ item }) => (
        <Card style={styles.item}>
            <View style={styles.itemView}>
                <Image source={{uri: item.imgSrc}} style={{height: 100, width: "100%" }}/>
                <Text>
                    {item.name}
                </Text>
                <Text>
                    {item.description}
                </Text>
            </View>
        </Card>
    );

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: "#222", padding: 5}}>
                <FlatList
                    data={cardData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    style={{marginTop: 50}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "100%",
    },
    item: {
        // backgroundColor: '#f9c2ff',
        padding: 10,
        width: "45%",
        height: 200,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    itemView: {
      height: 130,
    },
    title: {
        fontSize: 20,
    },

});

export default HomeScreen;
