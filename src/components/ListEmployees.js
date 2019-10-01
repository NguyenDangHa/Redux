import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import styles from '../assets/styles/ListUserScreen.style';
import imageUpdate from '../assets/image/updated.png';
import imageDelete from '../assets/image/delete.png';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class ListEmployees extends Component {
    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }
    render() {
        //let { sanPham } = this.props.sanPham;
        console.log(this.props.sanPham) //var sanPham = this.props.sanPham
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { Actions.login() }}
                    style={styles.btnAdd}>
                    <Text style={styles.textButton}>Go Home</Text>
                </TouchableOpacity>

                <View style={styles.btnAdd}>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => Actions.addProduct()} >
                        <Text style={styles.textButton}>Thêm sản phẩm</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <FlatList
                        data={this.props.sanPham}
                        extraData={this.props}
                        renderItem={({ item }) => (
                            <View style={styles.itemList}>
                                <Text style={styles.textItem}> Id : {item.id},</Text>
                                <Text style={styles.textItem2}> Name : {item.name}</Text>
                                <Image style={styles.imageView} source={{ uri: item.image }} />
                                <Text style={styles.textItem2}> Description :{item.description}</Text>
                                <Text style={styles.textItem2}> Price : {item.price}</Text>
                                <Text style={styles.textItem2}> Inventory : {item.inventory}</Text>
                                <Text style={styles.textItem2}> Rating : {item.rating}</Text>

                                <View style={styles.viewButtonItem}>
                                    <TouchableOpacity style={styles.btnUpdate}>
                                        <Image source={imageUpdate} />
                                        <Text style={styles.textButtonItem}>Update</Text>
                                    </TouchableOpacity>
                                    <Text style={{ flex: 1 }}></Text>
                                    <TouchableOpacity style={styles.btnDelete} >
                                        <Image source={imageDelete} />
                                        <Text
                                            style={styles.textButtonItem}
                                            onPress={() => this.onDelete(item.id)}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>

        );
    }
}

// lấy state trên store
const mapStateToProps = state => {
    return {
        sanPham: state.Employees
    };
};

//gửi sự kiện action lên Reducer
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (id) => {
            dispatch(actions.deleteProduct(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployees);