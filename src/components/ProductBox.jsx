import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Badge from './Badge';
const ProductBox = ({ productInfo, onPress }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.leftContainer}>
                <Image style={styles.image}
                    source={{ uri: productInfo?.image }} />
                <View style={styles.infobar}>
                    <Text style={styles.titleText}>
                        {productInfo?.title}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Badge badgeTitle={productInfo?.category}
                            badgeType={productInfo?.category === 'electronics' ? 'primary' : productInfo?.category === 'jewelery' ? 'gold' : productInfo?.category === "women's clothing" ? 'girl' : 'danger'} />
                    </View>
                    <Text style={{ width: 300 }}>
                        {productInfo?.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductBox

const styles = StyleSheet.create({
    container: {
        margin: 3,
        padding: 10,
        backgroundColor: 'white'
    },
    leftContainer: {
        flexDirection: 'row',
        gap: 8
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover'
    },
    infobar: {
        gap: 10
    },
    titleText: {
        fontSize: 12,
        fontWeight: 'bold',
        width: 300
    }
})