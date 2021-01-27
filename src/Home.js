import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, View, TouchableOpacity, Text, SafeAreaView, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import cars from '../cars';

export default function Home(props) {

    const renderCars = (item) => {

        return (
            <View style={styles.carItem}>
                <Image style={styles.carImage} source={{ uri: item.image }} resizeMode="contain" />
                <View>
                    <Text style={styles.carTitle}>{item.name}</Text>
                    <Text style={styles.carPrice}>{item.price}€ par jour</Text>
                </View>
                <TouchableOpacity

                    onPress={() => props.navigation.navigate("DetailVehicule", { item })}
                >
                    <Text style={styles.textReserve}>Réserver</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const topCars = cars.sort((itemA, itemB) => {
        return (
            itemB.reservations - itemA.reservations
        )
    }).slice(0, 4);


    return (
        <ScrollView style={{margin: 5}}>
            <StatusBar style="light" backgroundColor="#2D4F6C" />
            {/* <View style={styles.header}>
                <Image source={require("../assets/logo-transparent.png")} style={styles.headerImage}></Image>
            </View> */}
            <TouchableOpacity
                onPress={() => props.navigation.navigate("ListVehicules")}
            >
                <View style={styles.heroContainer}>
                    <Image source={require("../assets/hero.jpg")} style={styles.heroImage} />
                    <Text style={styles.heroText}>{cars.length} Véhicules à découvrir</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={{ alignSelf: "center", color: "#2D4F6C", fontSize: 20 }}>Les plus réservés</Text>
            </View>
            <SafeAreaView>
                <FlatList
                    style={styles.carItems}
                    data={topCars}
                    renderItem={({ item }) => renderCars(item)}
                    keyExtractor={item => item.name}
                    numColumns={2}
                />
            </SafeAreaView>
        </ScrollView>
    );
}

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        width: "100%",
        backgroundColor: "#2D4F6C",
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    headerImage: {
        width: 75,
        height: 75,
    },
    heroContainer: {
        position: 'relative'
    },
    heroImage: {
        width: "95%",
        height: vw / 2,
        borderRadius: 30,
        margin: 10
    },
    heroText: {
        position: 'absolute',
        zIndex: 1,
        bottom: 40,
        left: 30,
        fontSize: 22,
        color: 'white'
    },
    carItem: {
        borderRadius: 15,
        backgroundColor: "#DFDFDF",
        width: "48%",
        height: vh / 4,
        margin: 5,
        padding: 5
    },
    carItems: {
        margin: 5
    },
    carImage: {
        width: "100%",
        height: 100
    },
    carTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    carPrice: {
        fontSize: 16
    },
    textReserve: {
        fontSize: 18,
        color: '#2D4F6C',
        alignSelf: "center",
        paddingTop: 18
    }
});
