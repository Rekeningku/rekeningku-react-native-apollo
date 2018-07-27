import { StyleSheet } from "react-native"
import RF from 'react-native-responsive-fontsize'
export default StyleSheet.create({
    normalFontSize: {
        fontSize: 13,
        fontWeight: 'normal',
        color: '#333',
    },
    textNote: {
        fontSize: 12,
        color: '#777',
    },
    container: {
        //backgroundColor: '#f3f7fa',
        fontFamily: 'calibri'
    },
    headerWrapper: {
        backgroundColor: 'white', 
    },
    headerTitle:{
        textAlign: 'center',
        color: '#5a667c',
        marginLeft : 20,
        fontFamily: 'Calibri',
    },
    tabHeaderText: {
        fontSize: 13,
        color: '#444',
        fontWeight: 'bold'
    },
    tabHeaderTextActive: {
        color: '#2B79C9',
        fontSize: 13,
    },
    tabHeader: {
        backgroundColor: '#FFF'
    },
    tabHeaderActive: {
        backgroundColor: '#FFF'
    },
    tabHeaderUnderline: {
        backgroundColor: '#2B79C9',
        height: 2,
        borderRadius: 30,
    },
    titleCentering: {
        flex: 1
    },
    textContent: {
        color: 'white'
    },
    textChangePct: {
        color: 'white',
        fontSize: 13,
    },
    text_content: {
        fontSize: 13,
        color: 'black', 
        textAlign: 'left',
        fontWeight: 'bold',
    },
    text_target_pair:{
        fontSize: 10,
        lineHeight: 20,
    },
    row: {
        backgroundColor : '#ffffff',
        paddingLeft: 17,
        paddingRight: 17,
    },
     Licon: {
        fontSize: 20,
        color: '#9ba2b0'
     },
     itemDivider: {
         paddingTop: 5,
         paddingBottom: 5,
         backgroundColor: 'transparent',
     },
     //modal
     modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
      },
    
      buyConfirmation: {
        width: '90%',
        zIndex: 1,
        padding: 20,
      },
      buySuccess: {
        width: '90%',
        zIndex: 1,
        padding: 20,
      },
      orderTableText: {
        fontWeight: 'bold'
      },
    //end
    avatar: {
        width: '100%',
        height: '100%',
    },
    avatarInitial: {
        backgroundColor : '#2B79C9',
        padding : 10,
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    avatarInitialColor: {
        color: '#fff',
        fontSize: RF(3.5),
        justifyContent: 'center',
        textAlign: 'center',

        
    },

    //table
    tHead: {
        padding:10, 
        backgroundColor: '#f7f7f7',
    }

    //end
})