import { View, FlatList } from 'react-native';
import CustomButton from '../components/CustomButton';
import ProductBox from '../components/ProductBox';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';
const ProductScreen = () => {
    const navigation = useNavigation()
    const [products, setProducts] = useState([])
    const getAllProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(getProducts => setProducts(getProducts))
            .catch(error => console.log(error))
    }
    return (
        <View style={{ backgroundColor: colors.LIGHTGREY }}>
            <CustomButton buttonTitle={'Bring Producst'} buttonColor={colors.PASTELBLUE} onPress={() => getAllProducts()} borderRadius={10} />
            <FlatList data={products}
                renderItem={({ item }) => <ProductBox productInfo={item} onPress={() => navigation.navigate('DetailScreen', { productId: item })} />} />
        </View>
    )
}

export default ProductScreen