import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import usLista from "./Views/usLista";
import usForm from "./Views/usForm";
import { Button, Icon } from "react-native-elements";
import { UsersProvider } from "./Context/userContext";

const Stack = createNativeStackNavigator()

export default props =>{

    return(
        <UsersProvider>
            <NavigationContainer >
                <Stack.Navigator
                    initialRouteName="usLista"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="usLista"
                        component={usLista}
                        options={({navigation}) =>{
                            return{
                                title: "Lista de Usuários",
                                headerRight: () => (
                                    // jsx para botão
                                    <Button
                                        // destructuring para navegação
                                        onPress={() => navigation.navigate('usForm')}
                                        type="clear"
                                        // jsx para icone
                                        icon={<Icon name="add" size={25} color="white"/>}
                                    />
                                )
                            }
                        }}
                    />

                    <Stack.Screen
                        name="usForm"
                        component={usForm}
                        options={{
                            title: "Formulário de Usuários"
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )

}

const screenOptions = {
    headerStyle:{
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}