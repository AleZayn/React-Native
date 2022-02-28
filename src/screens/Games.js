import React from "react";
import {
  
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from "react-native";
import Menu from "../components/Menu";

const Games = () => {
  return (
    <View style={styles.maintContainer}>
      <ScrollView scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 20,
            textAlign: "center",
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            marginBottom: 20,
            paddingBottom: 10,
          }}
        >
          Top Games
        </Text>
                {/* flatlistimg start */}
        <View style={{ height: 150, marginTop: 20, marginBottom: 20, }}>
          <ScrollView
           horizontal
           showsHorizontalScrollIndicator={false}
           showsVerticalScrollIndicator={ false }
           >
            <View
              style={{
                height: 150,
                width: 200,
                borderColor: "#dddddd",
                borderRadius: 4,
                borderWidth: 0.5,
                marginLeft:0,
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg'
                  }}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View style={{ flex: 1, alignItems: "center", paddingTop: 10 }}>
                <Text>
                <TouchableOpacity
                onPress={() => Linking.openURL('https://fallout.bethesda.net/en/games/fallout-4')}
                ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 15 }}>Fallout 4</Text></TouchableOpacity>
                </Text>
              </View>
            </View>

            {/* 2nd img */}

            <View
            style={{
              height: 150,
              width: 200,
              borderColor: "#dddddd",
              borderRadius: 4,
              borderWidth: 0.5,
              marginLeft:20,
              paddingHorizontal: 0,
            }}
          >
            <View style={{ flex: 2 }}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/en/9/96/GT_Sport_cover_art.jpg'
                }}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover",
                }}
              />
            </View>
            <View style={{ flex: 1, alignItems: "center", paddingTop: 10 }}>
              <Text>
              <TouchableOpacity
              onPress={() => Linking.openURL('https://www.gran-turismo.com/gb/')}
              ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 15 }}>Gran Turismo Sport</Text></TouchableOpacity>
              </Text>
            </View>
          </View>

          {/* 3rd */}

          <View
          style={{
            height: 150,
            width: 200,
            borderColor: "#dddddd",
            borderRadius: 4,
            borderWidth: 0.5,
            marginLeft:20,
            paddingHorizontal: 0,
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              source={{
                uri: 'https://s1.gaming-cdn.com/images/products/4824/orig/elden-ring-pc-gioco-steam-europe-cover.jpg',
              }}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover",
              }}
            />
          </View>
          <View style={{ flex: 1, alignItems: "center", paddingTop: 10 }}>
            <Text>
            <TouchableOpacity
            onPress={() => Linking.openURL('https://en.bandainamcoent.eu/elden-ring/elden-ring')}
            ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 15 }}>Elden Ring</Text></TouchableOpacity>
            </Text>
          </View>
        </View>

        {/* 4th */}

        <View
        style={{
          height: 150,
          width: 200,
          borderColor: "#dddddd",
          borderRadius: 4,
          borderWidth: 0.5,
          marginLeft:20,
          paddingHorizontal: 0,
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={{
              uri: "https://sm.ign.com/ign_kr/cover/s/sifu/sifu_4tuz.jpg",
            }}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center", paddingTop: 10 }}>
          <Text>
          <TouchableOpacity
          onPress={() => Linking.openURL('https://www.epicgames.com/store/en-US/p/sifu')}
          ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 15 }}>Sifu</Text></TouchableOpacity>
          </Text>
        </View>
      </View>

          </ScrollView>
        </View>

        {/* flatlistimg end*/}

        {/* list game */}

        <View>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Expolre Few More </Text>
        </View>

        <View >
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://store.steampowered.com/app/582010/Monster_Hunter_World/')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Monster Hunter</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={{
          uri: "https://s2.gaming-cdn.com/images/products/2155/orig/game-steam-monster-hunter-world-cover.jpg",
        }}

         />
        </TouchableOpacity>

        {/* 2 */}

        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://www.playstation.com/en-us/games/marvels-spider-man/')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Spider-Man</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={{
          uri: 'https://images-na.ssl-images-amazon.com/images/I/910jWvWlO+L.jpg',
        }}

         />
        </TouchableOpacity>

        {/* 3 */}
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://www.playstation.com/it-it/games/ghost-of-tsushima/')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Ghost of Tsushima</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={{
          uri: 'https://thetomorrowtechnology.co.ke/wp-content/uploads/2020/08/date-sortie-ghost-of-tsushima-ps4-1200x900-1-1.jpg',
        }}

         />
        </TouchableOpacity>

        {/* 4 */}
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://legends.pokemon.com/en-us/')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Pokemon Legends</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={{
          uri: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero',
        }}

         />
        </TouchableOpacity>

        {/* 5 */}
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://store.steampowered.com/agecheck/app/1593500/')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>God Of War</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={{
          uri: 'https://multiplayer.net-cdn.it/thumbs/images/2021/10/08/god-of-war-ragnarok_jpg_1400x0_q85.jpg',
        }}

         />
        </TouchableOpacity>

        {/* 6 */}

        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://www.playstation.com/it-it/games/horizon-forbidden-west/')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Horizon Forbidden West</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={{
          uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png',
        }}

         />
        </TouchableOpacity>

        {/* 7 */}

        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://www.playstation.com/it-it/games/ratchet-and-clank-rift-apart/')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Ratchet & Clank</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={
          {
            uri:'https://insomniac.games/wp-content/uploads/2020/10/RC_RiftApart_Heroes_PS5-scaled.jpg',
          }
        }

         />
        </TouchableOpacity>

         {/* 8 */}

         <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
         onPress={() => Linking.openURL('https://www.xbox.com/it-IT/games/halo-infinite')}
         ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Halo Infinite</Text>
         <Image style={{width:100, height:40, borderRadius: 10,}}
         source={{
           uri: 'https://www.stuff.tv/wp-content/uploads/sites/2/2021/12/halo-infinite6.png?resize=1080,720',
         }
           
         }
 
          />
         </TouchableOpacity>

        {/* 9 */}

        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://www.callofduty.com/it/')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Call Of Duty</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={{
          uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/292730/capsule_616x353.jpg?t=1639696431" ,
      }}

         />
        </TouchableOpacity>

        {/* 10 */}

        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 20, borderColor: 'gray', borderWidth:0.5, paddingVertical: 5, borderBottomEndRadius: 10}}
        onPress={() => Linking.openURL('https://forzamotorsport.net/en-US/games/fh5')}
        ><Text style={{ fontWeight: "bold", paddingTop: 8, fontSize: 16 }}>Forza Horizon 5</Text>
        <Image style={{width:100, height:40, borderRadius: 10,}}
        source={{
          uri: "https://www.stuff.tv/wp-content/uploads/sites/2/2021/11/unnamed-14.jpg?resize=1080,608" ,
      }}
         />
        </TouchableOpacity>

        </View>

      </ScrollView>
      {/* navbar*/}
      <View style={{ textTransform: "uppercase", paddingHorizontal: 20 }}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maintContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  lineStyle: {
    marginBottom: 0,
    borderWidth: 0.5,
    borderColor: "white",
  },
});

export default Games;
