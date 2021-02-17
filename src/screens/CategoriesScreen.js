import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context'
const {height, width} = Dimensions.get('window');

export function CategoriesScreen({navigation}) {
  const {state,setState} = React.useContext(TakeHolidayContext)
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {details: item})}
      style={{
        width: width * 0.9,
        alignItems: 'center',
        // flexDirection: 'row',
        height: height * 0.15,
        borderRadius: 30,
        backgroundColor: '#f7aac4',
        justifyContent: 'space-between',
        borderWidth: 5,
        marginTop: height * 0.015,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 10},
        shadowOpacity: 20,
        shadowRadius: 5
      }}>
      <View
        style={{
          width: width * 0.4,
          height: height * 0.135,
          alignItems: 'center',
          justifyContent: 'center',
         // backgroundColor 
        }}>
          <View
        style={{
          width: width * 0.8,
          height: height * 0.11,
          borderRadius: 25,
          borderLeftColor : 'white',
          borderRightColor: 'white',
          borderWidth :4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#83c684',
        }}>
        <Text style={{fontSize: height * 0.03, fontWeight: 'bold',textDecorationLine: 'underline',color : 'black'}}>
          {item}
        </Text>
      </View>
        
      </View>
      
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{width, height}}>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: '#058607',
          height: height * 0.065,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{justifyContent: 'center', padding: 5}} onPress={() => navigation.goBack()}>
          <Icon
            name="ios-arrow-back-outline"
            type="ionicon"
            size={height * 0.05}
            color="#fff"
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontSize: height * 0.03, fontWeight:'bold'}}>
            Categories
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text></Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5fafa',
          height: height * 0.85,
        }}>
        {/* <Text style={{fontSize: height * 0.1}}>slfj</Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            'Food Preparation Equipment',
            'Storage Equipment',
            'Serving Equipment',
            'Cooking Equipment',
            'Miscellaneous Equipment',
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
