import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, DatePickerAndroid } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import DismissKeyboard from 'dismissKeyboard';
import * as firebase from 'firebase';

const config = {
        apiKey: "AIzaSyCZMmV0AfI9uDrf1Q8AHQKqGTLKINdkR_w",
        authDomain: "sr-patientapp.firebaseapp.com",
        databaseURL: "https://sr-patientapp.firebaseio.com",
        projectId: "sr-patientapp",
        storageBucket: "sr-patientapp.appspot.com",
        messagingSenderId: "16457952441"
};
firebase.initializeApp(config);
// firebase.firestore().settings(settings);

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
      title: 'Signup',
    };

    constructor(props){
      super(props);
      this.state = {
        name: '',
        email: '',
        dob: '',
        city: '',
        password: '',
        emptyErr: false,
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

    
    async openDateP(){
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              // Use `new Date()` for current date.
              // May 25 2020. Month 0 is January.
              date: new Date(1998, 0, 1)
            });
            if(action == DatePickerAndroid.dateSetAction){
                let dob = new Date(year, month , day);
                dob = dob.toLocaleDateString();
                this.setState({
                    dob
                })
            }
            if (action !== DatePickerAndroid.dismissedAction) {
              // Selected year, month (0-11), day
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
          DismissKeyboard();
    }

    onRegister(){
      const {name , email , dob , city , password} = this.state;
      if(name === "" || email ==="" || dob ==="" || city==="" || password===""){
        Alert.alert(
            'Error!',
            'Please Fill All the Fields',
            [
              {text: 'OK', style: 'cancel'},
            ],
            { cancelable: true }
        )
      }
      else{
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((success)=>{
            firebase.firestore().collection("users").add({
                name: name,
                email: email,
                dob: dob,
                city: city
            })
            console.log(success)
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
          });
      }      
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email Address'}
          style={styles.input}
        />
        <TextInput
          value={this.state.dob}
          onChangeText={(dob) => this.setState({ dob })}
          placeholder={'DOB'}
          style={styles.input}
          onFocus={this.openDateP.bind(this)}
        />
        <TextInput
          value={this.state.city}
          onChangeText={(city) => this.setState({ city })}
          placeholder={'City'}
          style={styles.input}
        />

        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Register'}
          style={styles.input}
          onPress={this.onRegister.bind(this)}
        />
        <View style={{textAlign: 'center'}}>
          <Text style={{marginTop: 20}}>Already Registered? </Text>
          <Text style={{color: 'blue', fontSize: 16}}
              onPress={() => this.props.navigation.navigate("Login")}>
              Login here
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});