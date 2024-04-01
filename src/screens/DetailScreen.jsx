import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';

const DetailScreen = () => {
    const route = useRoute()
    const product = route.params.productId;
    const [amount, setAmount] = useState(1)
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: product?.image }} />
            <ScrollView style={styles.titleScroll}>
                <Text style={styles.productTitle}>
                    {product?.title}
                </Text>
            </ScrollView>
            <Text style={styles.productCategory}>
                {product?.category}
            </Text>
            <ScrollView style={styles.descriptionScroll}>
                <Text style={styles.productDescription}>
                    {product?.description}
                </Text>
            </ScrollView>
            <View style={styles.addButton}>
                <TouchableOpacity onPress={() => setAmount(amount === 1 ? 1 : amount - 1)}>
                    <Text style={styles.addText}>
                        -
                    </Text>
                </TouchableOpacity>
                <Text style={styles.addText}>
                    {amount}
                </Text>
                <TouchableOpacity onPress={() => setAmount(amount + 1)}>
                    <Text style={styles.addText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.productPrice}>${product?.price}</Text>
            <CustomButton buttonTitle={'Buy Now'}
                buttonColor={colors.ORANGE}
                borderRadius={70}
                fontfamily={'PlayfairDisplay-Regular'} />
        </SafeAreaView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'white',
        height: '100%'
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
        margin: 15
    },
    titleScroll: {
        maxHeight: 90,
        paddingHorizontal: 20,
    },
    productTitle: {
        fontFamily: 'PlayfairDisplay-Medium',
        fontSize: 22,
        maxWidth: 300,
        textAlign: 'center',
        marginBottom: 10,
        textTransform: 'uppercase'
    },
    productCategory: {
        fontFamily: 'PlayfairDisplay-Medium',
        color: colors.RED,
        fontSize: 15,
        maxWidth: 300,
        textAlign: 'center',
        marginBottom: 10
    },
    descriptionScroll: {
        maxHeight: 40,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    productDescription: {
        fontFamily: 'PlayfairDisplay-Medium',
        fontSize: 10,
        maxWidth: 300,
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: colors.LIGHTGREY,
        width: '100%',
        alignItems: 'center',
        margin: 10,
        marginBottom: 30,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    addText: {
        fontFamily: 'PlayfairDisplay-Regular',
        fontSize: 20,
        marginHorizontal: 15,
        marginVertical: 3
    },
    price: {
        fontFamily: 'PlayfairDisplay-Regular',
        color: colors.SOFTGREY
    },
    productPrice: {
        color: colors.RED,
        fontSize: 20,
        fontWeight: 800,
        marginBottom: 50
    }
})