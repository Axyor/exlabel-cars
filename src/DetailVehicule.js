import React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions, ScrollView, SafeAreaView, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const DetailVehicule = (props) => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setItem(props.route.params.item)
        setLoading(false)
    }, []);

    const GetDetail1 = () => {
        if (loading) {
            return <ActivityIndicator />
        } else {
            return (
                <View style={styles.carOptions}>
                    <View>
                        <Image style={{ width: 25, height: 25, alignSelf:"center"  }} source={require("../assets/icons/engine.png")} />
                        <Text style={{alignSelf:"center"}}>{item.options.transmission}</Text>
                    </View>
                </View>

            )
        }
    }

    const GetDetail2 = () => {
        if (loading) {
            return <ActivityIndicator />
        } else {
            return (
                <View style={styles.carOptions}>
                    <View>
                        <Image style={{ width: 25, height: 25, alignSelf:"center"  }} source={require("../assets/icons/doors.png")} />
                        <Text style={{alignSelf:"center"}}>{item.options.person} personnes</Text>
                    </View>
                </View>

            )
        }
    }

    const GetDetail3 = () => {
        if (loading) {
            return <ActivityIndicator />
        } else if (item.options.navigation) {
            return (
                <View style={styles.carOptions}>
                    <View>
                        <Image style={{ width: 25, height: 25, alignSelf:"center"  }} source={require("../assets/icons/compass.png")} />
                        <Text style={{alignSelf:"center"}}>GPS intégré</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.carOptions}>
                    <View>
                        <Image style={{ width: 25, height: 25, alignSelf:"center"  }} source={require("../assets/icons/compass.png")} />
                        <Text style={{alignSelf:"center"}}>GPS non intégré</Text>
                    </View>
                </View>
            )
        }
    }

    const GetDetail4 = () => {
        if (loading) {
            return <ActivityIndicator />
        } else if (item.options.aircondition) {
            return (
                <View style={styles.carOptions}>
                    <View>
                        <Image style={{ width: 25, height: 25, alignSelf:"center" }} source={require("../assets/icons/snow.png")} />
                        <Text style={{alignSelf:"center"}}>Véhicule climatisé</Text>
                    </View>
                </View>

            )
        } else {
            return (
                <View style={styles.carOptions}>
                    <View>
                        <Image style={{ width: 25, height: 25,alignSelf:"center"  }} source={require("../assets/icons/snow.png")} />
                        <Text style={{alignSelf:"center"}}>Véhicule non climatisé</Text>
                    </View>
                </View>)
        }
    }

    if (loading) {
        return <ActivityIndicator />
    }
    else return (
        <ScrollView >
            <StatusBar style="light" backgroundColor="#2D4F6C" />
            {/* <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text><FontAwesomeIcon icon={faArrowLeft} size={20} style={{ color: "white" }} /></Text>
                </TouchableOpacity>
                    <Text style={styles.headerText}>{item.name}</Text>
                    <Text></Text>
            </View> */}
            <View style={styles.carItem}>
                <Image style={{ width: "100%", height: "100%" }} source={{ uri: item.image }} resizeMode="contain" />
            </View>
            <View style={styles.getDetail}>
                <GetDetail1 />
                <GetDetail2 />
                <GetDetail3 />
                <GetDetail4 />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>{item.price}€ par jour</Text>
            </View>
        </ScrollView>
    )
}

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    carItem: {
        padding: 10,
        height: vh / 3
    },
    getDetail: {
        flexDirection: 'row',
        flexWrap: "wrap",
        flexBasis: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        height: vh / 2.6,
        paddingTop: 50
    },
    carOptions: {
        width: 120,
        margin: 20,
    },
    footer: {
        width: "100%",
        height: 100,
        backgroundColor: "#2D4F6C",
        padding: 20,
        alignItems: 'center',
        bottom: 0
    },
    footerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        margin: 15
    }
});