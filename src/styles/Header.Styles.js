/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native";
import { appThemeColor, blackcolor, graycolor, whitecolor, Header_BG_Color, Header_text, dark_blue } from "../styles/commonstyles";

export const HeaderStyle = StyleSheet.create({
    viewHeight: {
        height: 60,
        width: "100%",
        backgroundColor: Header_text,
        flexDirection: "row",
        padding: 10,
        justifyContent: 'center',
        alignContent: "center",
        borderBottomColor: graycolor,
        borderBottomWidth: 2,
        // position:"absolute",
        // top:0
    },
    buttonImg: {
        width: 20,
        height: 20,
        // marginLeft: 6,
        // marginTop: 1,
    },
    buttonView: {
        flex: 0.4, backgroundColor: whitecolor, justifyContent: 'center',
        borderRadius: 50, height: 30, top: 5
    },
    heading: {
        width: '70%',
        height: 45,

    },
    customheading: {
        width: '70%',
        height: 45,
        fontFamily: 'Mandali-Bold',
        textAlign: 'center',
        fontSize: 33,
        color: Header_text,
        // fontWeight:'bold',
        // top:20
    },
    subHeaderviewHeight: {
        width: "100%",
        backgroundColor: whitecolor,
        flexDirection: "row",
        padding: 5,
        justifyContent: 'space-between',
        alignItems:'center',
        paddingLeft:10

    },
    DetailsHeader: {
        width: "100%",
        backgroundColor: whitecolor,
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between',
        borderBottomColor: graycolor, borderBottomWidth: 1
    },
    subHeadercustom: {
        // height: 50,
        width: "100%",
        backgroundColor: dark_blue,
        flexDirection: "row",
        padding: 10,
        justifyContent: 'center',
        alignContent: "center",
    },
    subHeaderbuttonImg: {
        width: 30,
        height: 30,
        // marginLeft: 10,
        marginTop: 5,

    },
    subHeaderheading: {
        color: blackcolor,
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
       fontWeight:'bold'

    },
    HeadTitleView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -70,
        width: Dimensions.get("window").width - 120,
    },
    HeadTitleImg: {
        height: 40, width: 100
    },
    headerLeftView: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: whitecolor,
        borderRadius: 50, height: 30,
        width: 30, marginLeft: 10
    },
    headerLeftImg: { height: 20, width: 20 },
    HeadRightView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: whitecolor,
        borderRadius: 50,
        height: 30, width: 30,
        marginRight: 10
    },
    HeadRightImg: { height: 20, width: 20, },

    HeadRightpaperImg: { height: 15, width: 15, right: 5 },


})