import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function ViewDetails({navigation}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const [dataItems, setDataItems] = React.useState([]);
  const AllData = Object.values(state);
  const allKeys = Object.keys(state);
  let mArray = [];
  React.useEffect(() => {
    allKeys.map((key) => {
      state[key].map((e) => {
        mArray.push({...e, type: key});
      });
    });
    setDataItems(mArray);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          // backgroundColor: 'black',
          flexDirection: 'row',
          width: width * 0.96,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
        
          style={{
            width: width * 0.8,
            height: height * 0.19,
            borderWidth: 5,
            borderColor: 'black',
            elevation: 1,
            borderRadius: 15,
            backgroundColor: '#ebd8b0',
            justifyContent: 'space-between',
            shadowColor: 'black',
            shadowOffset: {width: 4, height: 8},
            shadowOpacity: 20,
            shadowRadius: 5,

            marginTop: height * 0.02,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              {item.image.length ? (
                <Image
                  source={{uri: item.image}}
                  style={{
                    // flexDirection: 'row',
                    marginTop: 7,
                    marginLeft: 10,
                    height: height * 0.09,
                    borderWidth: 2,
                    borderRadius: 40,
                    width: width * 0.2,
                  }}
                />
              ) : (
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  No Image
                </Text>
              )}
            </View>
            {/**
             * 
            <View
              style={{
                width: width * 0.2,
                alignItems: 'flex-end',
                borderRadius: 10,
                height: height * 0.1,
                borderWidth: 2,
                // borderColor: 'black'
              }}>
              
            </View>
             */}
            <View
              style={{
                width: width * 0.52,
                height: height * 0.07,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 2,
                justifyContent: 'center',
                backgroundColor: '#fff',
                marginRight: 10,
                marginTop: 1,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {item.place}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: width * 0.7,
              height: height * 0.06,
              borderRadius: 15,
              borderColor: 'black',
              borderWidth: 2,
              justifyContent: 'center',
              backgroundColor: '#fff',
              alignContent: 'center',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                By:
              </Text>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.by}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold'}}></Text>

            {/* <View style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 'auto',
                  alignItems: 'center',
                  padding: height * 0.01,
                  borderWidth: 2,
                  borderRadius: height * 0.2,
                  backgroundColor: '#ff9',
                }}>
                <Text style={{color: '#000', fontSize: height * 0.02}}>
                  {item.from}
                </Text>
              </View>
            </View> */}
          </View>
        </View>
      
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={{width, height}}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'purple',
            height: height * 0.1,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() => navigation.goBack()}>
            <Icon
              name="ios-arrow-back-outline"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: height * 0.03,
                fontWeight: 'bold',
              }}>
              View Details
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
            height: height * 0.9,
          }}>
          {dataItems.length ? (
            <FlatList
              data={dataItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <View
              style={{
                width: width * 0.8,
                height: height * 0.2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderTopRightRadius: height * 0.03,
                borderBottomLeftRadius: height * 0.03,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                No Data Found , Please click on ' + ' to add data in category
                details page
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
