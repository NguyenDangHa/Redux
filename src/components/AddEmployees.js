import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../assets/styles/AddEmployees.style';
import Slideshow from 'react-native-image-slider-show';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class AddEmployees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            description: '',
            price: '',
            inventory: '',
            rating: '',
            image_url: '',
            position: 1,
            interval: null,
            dataSource: [
                {
                    url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-plus-silver-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795419237',
                }, {

                    url: 'https://images-na.ssl-images-amazon.com/images/I/61nMZHYdXaL._SL1024_.jpg',
                }, {

                    url: 'https://vcdn-sohoa.vnecdn.net/2019/09/24/phone-01-1569297192_680x0.jpg',
                },
            ],
        }
    }
    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    onAddPro = () => {
        this.props.onAddProduct(this.state)
        Actions.list()
        //console.log(this.state)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.slideShow}>
                    <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} />
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <Text>Please enter Product infomation</Text>
                        <View >
                            <TextInput
                                style={styles.inputModal}
                                placeholder='id :'
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                onChangeText={(id) => this.setState({ id })}
                                value={this.state.id}>
                            </TextInput>
                        </View>

                        <View >
                            <TextInput
                                style={styles.inputModal}
                                placeholder='name :'
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}
                            >
                            </TextInput>
                        </View>

                        <View >
                            <TextInput
                                style={styles.inputModal}
                                placeholder='description :'
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                onChangeText={(description) => this.setState({ description })}
                                value={this.state.description}
                            >
                            </TextInput>
                        </View>

                        <View >
                            <TextInput
                                style={styles.inputModal}
                                placeholder='price :'
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                onChangeText={(price) => this.setState({ price })}
                                value={this.state.price}
                            >
                            </TextInput>
                        </View>

                        <View >
                            <TextInput
                                style={styles.inputModal}
                                placeholder='inventory :'
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                onChangeText={(inventory) => this.setState({ inventory })}
                                value={this.state.inventory}
                            >
                            </TextInput>
                        </View>

                        <View >
                            <TextInput
                                style={styles.inputModal}
                                placeholder='image url :'
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                onChangeText={(image_url) => this.setState({ image_url })}
                                value={this.state.image_url}
                            >
                            </TextInput>
                        </View>

                        <View >
                            <TextInput
                                style={styles.inputModal}
                                placeholder='rating :'
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                onChangeText={(rating) => this.setState({ rating })}
                                value={this.state.rating}
                            >
                            </TextInput>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.btnAdd}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={async () => { await this.onAddPro({}) }}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

// lấy state trên store
const mapStateToProps = state => {
    return {

    };
};

//gửi sự kiện action lên Reducer
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actions.addProducts(product))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployees);