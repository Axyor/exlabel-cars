import React from 'react';
import cars from "../cars";
import DetailVehicule from "./DetailVehicule"
import { StatusBar } from 'expo-status-bar';
import { FlatList, View, Image, Text, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export const ListVehicules = (props) => {
    const renderListVehicules = (item) => {
        return (
            <TouchableOpacity
                style={styles.vehiculeItem}
                onPress={() => props.navigation.navigate("DetailVehicule", { item: item })}
            >
                <Image resizeMode="contain" style={styles.vehiculeImage} source={{ uri: item.image }} />
                <View>
                    <Text style={styles.vehiculeName}>{item.name}</Text>
                    <Text style={styles.vehiculePrice}>{item.price}€ par jour</Text>
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <ScrollView>

            <StatusBar style="auto" style="light" backgroundColor="#2D4F6C" />

            

            <FlatList
                style={styles.listVehiculesItem}
                data={cars}
                renderItem={({ item }) => renderListVehicules(item)}
                keyExtractor={item => item.name}
                numColumns={1}
            />


        </ScrollView>
    )
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({

    header: {
        paddingBottom: 10,
        height: 80,
        backgroundColor: "#2D4F6C",
        width: vw,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",
    },
    textHeader: {
        color: "white",
        fontSize: 18

    },
    textHeader1: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18

    },
    textHeader2: {
        color: "white",
        fontSize: 18

    },

    vehiculeItem: {
        padding: 2,
        margin: 10,
        borderRadius: 20,
        backgroundColor: "#DFDFDF",
        padding: 10,
        flexDirection: "row"
    },

    vehiculeImage: {
        width: "45%",
        height: 100,
        alignSelf: "center"
    },


    vehiculeName: {
        fontSize: 16,
        fontWeight: "bold"
    },

    vehiculePrice: {
        fontWeight: "600",
    }

})
