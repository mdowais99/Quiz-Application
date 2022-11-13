import { getAuth, signOut } from "firebase/auth";
import React from "react";
import {
  Button,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { app, auth } from "../config";
// import { auth, db } from "../config";
import { COLORS, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const questionTypes = {
    HTML: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HyperText Machine Language","HyperText Marking Language"],
        right: "HyperText Markup Language",
      },
      {
        id: 2,
        question: "Which tag is used for inserting the largest heading in HTML?",
        options: ["head", "<h1>","<h6>"],
        right: "<h1>",
      },
      {
        id: 3,
        question: "HTML program is saved using ___ extension.",
        options: [".htmn", ".hml",".html"],
        right: ".html",
      },
      {
        id: 4,
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<br>","<break>"],
        right: "<br>",
      },
      {
        id: 5,
        question: "Choose the correct HTML element to define emphasized text",
        options: ["<i>", "<e>","<italic>"],
        right: "<e>",
      },
      {
        id: 6,
        question: "Inline elements are normally displayed without starting a new line.",
        options: ["true", "false"],
        right: "true",
      },
    ],
    CSS: [
      {
        id: 1,
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Colourfull Style Sheets"],
        right: "Cascading Style Sheets",
      },
      {
        id: 2,
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<css>", "<style>"],
        right: "<style>",
      },
      {
        id: 3,
        question: "How do you insert a comment in a CSS file?",
        options: [";this is comment", "// this is comment", "/* this is comment*/"],
        right: "/* this is comment*/",
      },
      {
        id: 4,
        question: "Which property is used to change the background color?",
        options: ["bgcolor", "color", "background-color"],
        right: "background-color",
      },
      {
        id: 5,
        question: "Which CSS property is used to change the text color of an element?",
        options: ["color", "text-color", "fg-color"],
        right: "color",
      },
      {
        id: 6,
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "font-style"],
        right: "font-size",
      },
    ],
    
    "Java Script":[
      {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<javascript>", "<style>"],
        right: "<script>",
      },
      {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        options: ["<head> section", "<body> section", "both"],
        right: "both",
      },
      {
        id: 3,
        question: "What is the correct syntax for referring to an external script called ?",
        options: ["<script name=>", "<scripy href=>", "<scripy src= >"],
        right: "<scripy src= >",
      },
      {
        id: 4,
        question: "The external JavaScript file must contain the <script> tag",
        options: ["true", "false"],
        right: "false",
      },
      {
        id: 5,
        question: "How do you create a function in JavaScript?",
        options: ["function myFuntion()", "function: myFuntion()", "function = myfunction()"],
        right: "function myFuntion()",
      },
    ],

    "Boot Strap": [
      {
        id: 1,
        question: "how many grid in bootstrap",
        options: ["9", "12", "6"],
        right: "12",
      },
      {
        id: 2,
        question: "Which class shapes an image to a circle?",
        options: ["image-round",  "image-circle", "image-rounded"],
        right: "image-rounded",
      },
      {
        id: 3,
        question: "Which class is used to create a big box for calling extra attention?",
        options: ["jumbotron", "imp", "src"],
        right: "jumbotron",
      },
      {
        id: 4,
        question: "Which button class is used to create a large button?",
        options: ["btn-sm", "btn-l", "btn-md"],
        right: "btn-l",
      },
      {
        id: 5,
        question: "Which class is used to create a basic pagination?",
        options: ["page", "pages", "pagination"],
        right: "pagination",
      },
    ]
  };
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
          {Object.keys(questionTypes).map(question => (
              <TouchableOpacity  key={question} onPress={() =>
                  navigation.navigate('Questions', { questionType: question, selectedQuestion: questionTypes[question] })
              }>
            <View
              style={{
                backgroundColor: COLORS.secondary,
                marginBottom: 20,
                borderRadius: 10,
              }}
            >
              <View>
                <View style={{ padding: 20 }}>
                  <Text
                    style={{ textTransform: "capitalize", color: COLORS.white ,fontSize:19}}
                  >
                    Quiz: {question}
                  </Text>
                  <Text
                    style={{ textTransform: "capitalize", color: COLORS.white,fontSize:19 }}
                  >
                    Questions: {questionTypes[question].length} 
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
            </TouchableOpacity>
             ))}

            <Button
              title="Logout"
              onPress={() => signOut(auth)}
              style={{ marginBottom: 10 }}
            />
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

export default Home;
