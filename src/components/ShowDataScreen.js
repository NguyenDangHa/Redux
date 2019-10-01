import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../assets/styles/Profile.style';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions/index';

class ShowDataScreen extends Component {

    onDelete = () => {
        this.props.onDeleteProfile();
    }

    render() {
        const { profile } = this.props;
        var elmProfile = profile !== null ?
            (<View style={styles.itemList}>
                <Text style={styles.textItem}> Id :     {profile.id},</Text>
                <Text style={styles.textItem2}> Age :   {profile.employee_age}</Text>
                <Text style={styles.textItem2}> Name :  {profile.employee_name}</Text>
                <Text style={styles.textItem2}> Price : {profile.employee_salary}</Text>
                <Text style={styles.textItem2}> Image : {profile.profile_image}</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this.onDelete()}
                    style={styles.btnGoHome}>
                    <Text style={styles.textButton}>Delete</Text>
                </TouchableOpacity>
            </View>) : (<View style={styles.aleart}>
                <Text style={styles.textItem3}>Hẹn gặp lại quý khách !</Text>
                <Text style={styles.textItem4}> Chúc quý khách 1 ngày tốt lành.</Text>
            </View>);
        return (
            <View style={styles.container}>
                {elmProfile}
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { Actions.login() }}
                    style={styles.btnGoHome}>
                    <Text style={styles.textButton}>Go Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// lấy state trên store
const mapStateToProps = state => {
    return {
        profile: state.Profiles
    };
};

//gửi sự kiện action lên Reducer
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProfile: () => {
            dispatch(actions.deleteProfile())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDataScreen);