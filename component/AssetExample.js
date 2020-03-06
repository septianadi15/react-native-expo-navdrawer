import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

export default class AssetExample extends React.Component {
    render(){
        return(
            <View>
                <Text>
                    Disini ada teks
                </Text>
                <Image style={styles.logo}
                    source={require('../assets/pelindo.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 150
    }
})