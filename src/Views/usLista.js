import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { ListItem, Avatar, Button, Icon } from "react-native-elements";
import userContext from "../Context/userContext";

export default props =>{

    const { state, dispatch } = useContext(userContext)

    function getUserItem({ item: user }){
        return (
            <ListItem.Swipeable 
                key={user.id} 
                bottomDivider
                // apenas no ListItem normal
                // onPress={() => props.navigation.navigate('usForm')}
                leftContent={
                    <Button
                      title="Info"
                      icon={{ name: 'info', color: 'white' }}
                      buttonStyle={{ minHeight: '100%' }}
                      onPress={() =>{
                          dispatch({
                              type: 'User',
                              payload: user,
                          })
                      }}
                    />
                }
                rightContent={
                    <Button
                        // title="Delete"
                        icon={<Icon name="edit" size={25} color="orange" /> }
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'gray' }}
                        onPress={() => props.navigation.navigate('usForm', user)}
                    />
                }
            >
                <Avatar source={{uri: user.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem.Swipeable>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )

}