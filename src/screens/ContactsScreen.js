import {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import ContactListItems from '../components/ContactListItems';
import {API, graphqlOperation} from 'aws-amplify';
import {listUsers} from '../graphql/queries';

const ContactsScreen = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.graphql(graphqlOperation(listUsers)).then((result) => {
            setUsers(result.data?. listUsers?. item);
        });
    }, []);


    return(
        <FlatList
            data={users}
            renderItem={({item}) => <ContactListItems user={item} />}
            style={{backgroundColor: 'white'}}
        />
    );
};

export default ContactsScreen;