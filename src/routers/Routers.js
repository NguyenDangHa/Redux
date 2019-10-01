import React, { Component } from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import AddEmployees from '../components/AddEmployees';
import ListEmployees from '../components/ListEmployees';
import Login from '../components/LoginScreen';
import ShowDataScreen from '../components/ShowDataScreen';

class Routers extends Component{
    render () {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="list"
                        component={ListEmployees}
                        title="List"                        
                        hideNavBar
                    />
                    <Scene
                        key="addProduct"
                        component={AddEmployees}
                        title="Add"
                        hideNavBar                   
                    />
                     <Scene
                        key="login"
                        component={Login}
                        title="Login"
                        hideNavBar   
                        initial                     
                    />
                      <Scene
                        key="showdata"
                        component={ShowDataScreen}
                        title="Show Data"
                        hideNavBar                    
                    />
                </Stack>
            </Router>
        );
    }
} 

export default Routers