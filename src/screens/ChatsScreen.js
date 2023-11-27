import {View, Text, FlatList} from 'react-native';
import chats from '../../assets/data/chats.json';
import ChatListItems from '../components/ChatListItems';

const ChatScreen = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({item}) => <ChatListItems chat={item} />}
            style={{backgroundColor: 'white'}}
        />
    );

};

export default ChatScreen;