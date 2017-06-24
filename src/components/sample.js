import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

class Haha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null,
      haha: 'haha',
    }
  }
  componentDidMount() {
    navigator.geolocation.watchPosition(
      (position) => {
        console.log('hahapositionlol---\n', JSON.stringify(position));
        this.setState({position: JSON.stringify(position)});
      },
      (error) => {
        console.log('error---\n', JSON.stringify(error));
        this.setState({position: JSON.stringify(error)});
      });
  }
  render() {
    return(
      <View>
        {this.state.position &&
          <Text>
          {this.state.position}
          </Text>
        } 
        {this.state.position &&
          <Text>
          {this.state.haha}
          </Text>
        }
        <Button
          onPress={ () => this.setState({haha: 'lol'}) }
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={ () => this.setState({haha: 'haha'}) }
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default Haha;
