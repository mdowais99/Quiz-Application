import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import { signOut } from "firebase/auth";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { auth, db } from "../config";
import { COLORS, SIZES } from "../constants";
import bgImgLost from "../assets/images/lost_img.png";
import bgImgSuccess from "../assets/images/success_img.png";

const Dashboard = () => {
  const [allScores, setAllScores] = useState([]);
  useEffect(() => {
    const fetchScore = async () => {
      try {
        const q = query(collection(db, "scoreboard"));
        const querySnapshot = await getDocs(q);
        const scores = [];
        querySnapshot.forEach((doc) => {
          scores.push(doc.data());
        });
        setAllScores(scores);
      } catch (error) {
        console.log("hello", error);
      }
    };
    fetchScore();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: "relative",
          color: COLORS.white,
        }}
        >
     <ScrollView>
   
        <View style={{ color: COLORS.white }}>
          {allScores.map((e, i) => (
            // <Text key={i} style={{ color: COLORS.white }}>
            // {JSON.stringify(e)}
            // </Text>
          <View
          key={i}
            style={{
              backgroundColor: COLORS.secondary,
              marginBottom: 20,
              borderRadius: 10,
            }}
          >
            <View>
              <View style={{ padding: 20 }}>
                
                <Text style={{ textTransform: "capitalize"  , color:COLORS.white}}>
                  useremail : {e.user}
                </Text>
                <Text style={{ textTransform: "capitalize" , color:COLORS.white }}>
                  score : {e.score}
                </Text>
                <Text style={{ textTransform: "capitalize"  , color:COLORS.white}}>
                  status : <Text>{e.status}</Text>
                </Text>
                <Text style={{ textTransform: "capitalize" , color:COLORS.white }}>
                  quiz : {e.quiz}
                </Text>
              </View>
              <View>
                <Image
                  source={require("../assets/images/DottedBG.png")}
                  style={{
                    width: SIZES.width,
                    height: 130,
                    zIndex: -1,
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    right: 0,
                  }}
                  resizeMode={"contain"}
                />
              </View>
            </View>
          </View>

))}


          
          <Button title="Logout" onPress={() => signOut(auth)} style={{marginBottom:10}}/>

        </View>
          </ScrollView>
        {/* Background Image */}
        <Image
          source={require("../assets/images/Image13.png")}

          style={{
            width: 200,
            height: 900,
            zIndex: -1,
            position: "absolute",
            top: -250,
            left: 0,
          }}
          resizeMode={"contain"}
        />
        {/* Background Image */}
        <Image
          source={require("../assets/images/Image14.png")}

          style={{
            width: 200,
            height: 900,
            zIndex: -1,
            position: "absolute",
            // top: -250,
            right: 0,
          }}
          resizeMode={"contain"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
