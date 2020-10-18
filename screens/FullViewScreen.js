import React from "react";
import {View, Text} from "react-native";
import Button from "react-native-paper";


const FullViewScreen = ({ navigation }) =>{
    return(
        <View style={{flex: 1, backgroundColor: "#666"}}>
            <Text>
                hey Full screen
            </Text>
            {/*<Button onPress={()=> {*/}
            {/*    navigation.navigate("HomeScreen")*/}
            {/*}}>home screen</Button>*/}

        </View>
    )
}

export default FullViewScreen;