import React from 'react';
import { Alert, Button, ImageBackground, View, StyleSheet, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
      header:null
    };

    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: ''
      }
    }

    navigate() {
        this.props.navigation.navigate("Home")
        // const resetAction = StackActions.reset({
        //   index: 0,
        //   actions: [
        //     NavigationActions.navigate({ routeName: 'Dashboard' }),
        //   ],
        // });
        // this.props.navigation.dispatch(resetAction);
    }

    onLogin(){
      this.props.navigation.navigate('Home');
    }

  render() {
    return (
      <ImageBackground source={require('./images/abc.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Input
              placeholder='Enter Username'
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='white'
                />
              }
              inputStyle={{color:'white'}}              
              inputContainerStyle={{color:'white'}}
            />

            <Input
              placeholder='Enter Password'
              secureTextEntry={true}
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='white'
                />
              }
              containerStyle={{marginTop:20,marginBottom:20,color:'white'}}
              inputStyle={{color:'white'}}              
            />
            

          <Button
            title={'Login'}
            style={styles.input}
            onPress={this.onLogin.bind(this)}
          />

          <View style={{textAlign: 'center'}}>
            <Text style={{marginTop: 20, fontSize: 16, color:'white'}}>Not Registered? 
              <Text style={{color: '#ADD8E6'}}
                  onPress={() => this.props.navigation.navigate("Register")}>
                  {` `}Create an account
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    marginTop: 20,
  },
});