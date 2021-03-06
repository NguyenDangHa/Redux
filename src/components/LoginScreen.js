import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import styles from '../assets/styles/loginScreen.style';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class LoginScreen extends Component {
    getUser = () => {
        axios
            .get('http://dummy.restapiexample.com/api/v1/employee/109619')
            .then((response) => {
                console.log(response.data);
                this.props.getProfile(response.data);
                //this.setState({ data: response.data })
                Actions.showdata()
            })
            .catch((err) => console.log(err))
    }

    showAlert = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => this.alertOk()
                },
            ],
            { cancelable: false },
        );
    }
    alertOk = () => {
        Alert.alert(
            'Alo 1 2 3 4 5',
            'We are trying the machine !!! Are you ready ?',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false },
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.viewButton}
                        onPress={() => { this.getUser(); }}>
                        <Text style={styles.textButton}>Get User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.viewButton}
                        onPress={() => { Actions.list() }}>
                        <Text style={styles.textButton}>Get List</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{ flex: 0.5, justifyContent: 'space-around', flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Thế giới</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{Actions.football()}}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Bóng đá</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Khoa học</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Xe</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Pháp luật</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Truyện cười</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Kinh doanh</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Thị trường</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Sức khỏe</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Phái đẹp</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Ẩm thực</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={styles.btnHorizontal}>
                                <Text style={styles.textBottom}>Ngoại hạng Anh</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={styles.tabbar}>
                    <TouchableOpacity activeOpacity={1} onPress={() => { Actions.addProduct() }}>
                        <View style={styles.btnClick}>
                            <Text style={styles.textBottom}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => { Actions.showdata() }}>
                        <View style={styles.btnClick}>
                            <Text style={styles.textBottom}>Profiles</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.showAlert()}>
                        <View style={styles.btnClick}>
                            <Text style={styles.textBottom}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProfile: (profiles) => {
            dispatch(actions.showDatas(profiles))
        }
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);