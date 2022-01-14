import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import UserContext from "../Context/userContext";

export default ({route, navigation}) =>{
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UserContext)

    return(
        <View style={Style.form}>
            <Text>Nome</Text>
            <TextInput
                style={Style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={Style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o Nome"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={Style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
        
        
    )

}

const Style = StyleSheet.create({
    form:{
        padding: 12,
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:10
    }
})