import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <ImageBackground
      source={require('../assets/kibk1.jpg')}
      style={{height, width, flex: 1}}>
      <View
        style={{
          width: width,
          height: height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            // backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundColor: 'black',
            borderWidth: 5,
            borderLeftColor: '#ff8',
            borderBottomColor: '#ff8',
            height: height * 0.1,
            width: width * 0.9,
            borderRadius: height * 0.02,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: height * 0.05,
              padding: 5,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Kitchen Care
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width,
          height: height * 0.5,
          // backgroundColor: 'pink',
          paddingTop: height * 0.05,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View style={{height: height * 0.1, alignItems:'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriesScreen')}
            activeOpacity={0.7}
            style={{ 
              width: width * 0.8,
              height: height * 0.1,
              backgroundColor: '#9df7c3',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.05,
              borderBottomWidth: 5,
              borderRightWidth: 1,
              borderLeftWidth: 1,
            }}>
            <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
              Add Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: height * 0.15, alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewDetails')}
            activeOpacity={0.7}
            style={{
              backgroundColor: '#9df7c3',
              width: width * 0.85,
              height: height * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.05,
              borderBottomWidth: 5,
              borderRightWidth: 1,
              borderLeftWidth: 1,
            }}>
            <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
              View Details
            </Text>

          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{
              width: width * 0.85,
              height: height * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#9df7c3',
              padding: height * 0.02,
              borderWidth: 6,
              borderRadius: height * 0.04,
            }}>
            
            <Text style={{fontSize: height * 0.04, }}>About Us</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>


    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

