import React from 'react';
import {
  Text,
  Platform,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Divider } from 'react-native-elements'

export default class ClinicDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Clinic Details',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.alignAvatar}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {`Dow Medical`}
          </Text>
        </View>
        <Divider style={{ backgroundColor: '#ccc' }} />

        <View style={styles.alignAvatar}>
          <Text style={styles.baseText} onPress={this.onPressTitle}>
            {`Days`}
          </Text>
        </View>
        <Divider style={{ backgroundColor: '#ccc' }} />

        <View style={styles.alignAvatar}>
          <Text style={styles.baseText} onPress={this.onPressTitle}>
            {`Timings`}
          </Text>
        </View>
        <Divider style={{ backgroundColor: '#ccc' }} />
        <View style={styles.alignAvatar}>
          <Text style={styles.baseText} onPress={this.onPressTitle}>
            {`Address`}
          </Text>
        </View>
        <View style={styles.alignAvatar}>
          <Button
            onPress={this.onPressLearnMore}
            title="Go to Clinic"
            color="#841584"
          />
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
  baseText: {
    // fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alignAvatar:{
    flex: 1,
    marginTop:10,
    marginBottom:10,
    paddingLeft: 15,
    flexDirection: 'row',        
  },
});
