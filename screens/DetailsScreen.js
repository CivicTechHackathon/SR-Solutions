import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem,Divider } from 'react-native-elements'

const list = [
  {
    clinicName: 'DOW Medical',
    clinicAddress: 'Karachi, Pakistan',
  },
  {
    clinicName: 'Aga Khan',
    clinicAddress: 'Karachi, Pakistan',
  },
]

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.alignAvatar}>
          <Avatar
              size="xlarge"
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
        </View>
        <View style={styles.alignAvatar}>
          <Button
            onPress={this.onPressLearnMore}
            title="See Profile"
            color="#841584"
          />
        </View>
        <View style={styles.alignList}>
          {
            list.map((l, i) => (
              <View key={i}>
                <ListItem
                  title={l.clinicName}
                  subtitle={l.clinicAddress}
                  onPress={() => this.props.navigation.navigate('ClinicDetails')}
                  chevron
                />
                <Divider style={{ backgroundColor: '#ccc' }} />
              </View>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  alignAvatar:{
    flex: 1,
    marginTop:20,
    flexDirection: 'row',        
    justifyContent: 'center',
  },
  alignList:{
    marginTop:30,
  }
});
