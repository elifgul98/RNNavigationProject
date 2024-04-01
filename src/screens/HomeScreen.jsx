import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <CustomButton onPress={() => navigation.navigate('ProductScreen')} buttonTitle='ProductScreen' />
        </View>
    )
}

export default HomeScreen