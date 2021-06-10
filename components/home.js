import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import elon from '../assets/Elon-Musk.png'
import Images from './images'
import Profiles from './profiles'
import Videos from './videos'

const home = () => {
    const [currentTab, setCurrentTab] = useState("photo-library");

    return (
            <View style={{
                marginTop: 50
            }}>
            <View style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: 15,
                paddingBottom: 10,
                backgroundColor: "#FAFAFA"
            }}>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image source={elon} style={{
                        width: 80,
                        height: 80,
                        borderRadius: 999
                    }}></Image>
                    <Text style={{
                        fontWeight: "bold",
                        color: "light-blue",
                        paddingTop: 10,
                        color: "#7F7F7F"
                    }}>Elon Musk</Text>
                    <Text>Technology matters</Text>
                </View>
                <View style={{
                    marginBottom: 50,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 20
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18
                    }}>115</Text>
                    <Text style={{
                        color: "#747474"
                    }}>Posts</Text>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 20
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18
                    }}>500k</Text>
                    <Text style={{
                        color: "#747474"
                    }}>Followers</Text>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 20
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "black"
                    }}>800</Text>
                    <Text style={{
                        color: "#747474"
                    }}>Following</Text>
                </View>
                </View>
            </View>
                <View style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "#FAFAFA"
                }}>
                   <Pressable style={{
                       backgroundColor: "#369DF0",
                       borderRadius: 6,
                       borderWidth: 1,
                       borderColor: "#747474"
                   }}>
                       <Text style={{
                           color: "white",
                           fontWeight: "bold",
                           paddingLeft: 40,
                           paddingRight: 40,
                           paddingTop: 5,
                           paddingBottom: 5
                       }}>Follow</Text>
                   </Pressable>
                   <Pressable style={{
                       backgroundColor: "#FFFFFF",
                       borderRadius: 6,
                       borderWidth: 1,
                       borderColor: "#747474"
                   }}>
                       <Text style={{
                           color: "black",
                           fontWeight: "bold",
                           paddingLeft: 40,
                           paddingRight: 40,
                           paddingTop: 5,
                           paddingBottom: 5
                       }}>Message</Text>
                   </Pressable>
                   <Pressable style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: "#747474"
                   }}>
                       <Text style={{
                           paddingLeft: 15,
                           paddingRight: 15,
                           paddingTop: 5,
                           paddingBottom: 5
                       }}>V</Text>
                   </Pressable>
                </View>
                <View style={{
                    backgroundColor: "#FAFAFA"
                }}>
                <View style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: 15
                }}>
                    {TabButton(currentTab, setCurrentTab, "photo-library")}
                    {TabButton(currentTab, setCurrentTab, "video-library")}
                    {TabButton(currentTab, setCurrentTab, "recent-actors")}
                </View>
                </View>

                <View style={{
                    position: "absolute",
                    top: 630,
                    width: 400,
                    zIndex: 1
                }}>
                </View>
                
                <ScrollView>
                    <View>
                        {currentTab === "photo-library" ? <Images /> : currentTab === "video-library" ? <Videos /> : <Profiles />}
                    </View>
                </ScrollView>

            </View>
    )
}

const TabButton = (currentTab, setCurrentTab, title) => {
    return (
      <TouchableOpacity onPress={ async() => {
         setCurrentTab(title)
      }}>
        <View style={{
            borderBottomWidth: currentTab == title ? 3 : 0,
            borderColor: currentTab == title ? "black" : "transparent"
        }}>
            <Icon
                name={title}
                color={currentTab == title ? 'black' : "gray"}
                size={35}
                style={{
                    paddingLeft: 35,
                    paddingRight: 35,
                    paddingBottom: 10
                }}
            />
        </View>
      </TouchableOpacity>
    );
  }

export default home

const styles = StyleSheet.create({})
