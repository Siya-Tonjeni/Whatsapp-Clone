import {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');


    const onSend = () => {
        console.warn('Sending message: ', newMessage);
        setNewMessage('');
    };

    return(
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <AntDesign name='plus' size={20} color='royalblue'/>
            <TextInput 
            value={newMessage} 
            onChangeText={setNewMessage}
            style={styles.input} 
            placeholder='write your message here..'
            />
            <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white'/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input:{
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 5,
        borderRadius: 15,
        overflow: 'hidden',
    },
})

export default InputBox;