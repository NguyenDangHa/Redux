
import React, { Component } from 'react';
import { WebView } from 'react-native';

class FootballScreen extends Component {
    render() {
      return (
        <WebView source={{ uri: 'https://www.24h.com.vn' }} />
      );
    }
  }


export default FootballScreen;
