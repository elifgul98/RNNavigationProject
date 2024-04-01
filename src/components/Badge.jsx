import { View, Text } from 'react-native';
import { colors } from '../constants/colors';

const Badge = ({ badgeTitle, badgeType }) => {

    return (
        <View style={{
            backgroundColor: badgeType === 'primary' ? colors.DARKBLUE : badgeType === 'danger' ? colors.RED : badgeType === 'gold' ? colors.GOLD : colors.CANDYPINK,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            padding: 7
        }}>
            <Text style={{
                color: 'white',
                fontWeight: 'bold'
            }}>
                {badgeTitle}
            </Text>
        </View>
    )
}

export default Badge
