// import React, {Component} from "react";
// import MyHeader from "../components/MyHeaderDesign"
// import {View,Text,StyleSheet} from "react-native";
// import Lottie_ChildLegislation from "../components/Lottie_ChildLegislation"
// import { Table, TableWrapper, Row, Rows, Col,Image,SafeAreaView, ScrollView } from 'react-native-table-component';




// export default class ChildLegislation extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['', 'Nature Of Complaint', 'Applicable Section(s) punishments under ITAA 2008', 'Applicable Section(s) punishments under other laws'],
//       tableData: [
//         ['MobilePhone Lost/Stolen', '', 'Section 379 IPC upto three years of Imprisonmnet or fine or both'],
//         ['a', 'b', 'c'],
//         ['1', '2', '3'],
//         ['a', 'b', 'c']
//       ]
//     }
//   }
//   render(){
//     const state = this.state;
//   return(
//     <View>
//      <View style = {styles.container}>
//     <View style={{ flex: 0.12 }}>
//     <MyHeader title ="Child Legislation"/>
//     </View>
//     <Lottie_ChildLegislation/>
//      </View>
//     <View>
//     <Text style = {styles.title}> ITAA 2008, IPC and Special & Local Laws </Text>
//     <View style={styles.container1}>
//         <Table>
//           <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
//           <TableWrapper style={styles.wrapper}>
//             <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
//           </TableWrapper>
//         </Table>
//       </View>
//       </View>
//       </View>

   

   
    
//   )
//   }

  
// }

// const styles = StyleSheet.create({
//  container: {
//     flex: 1,
//     backgroundColor: "#00E5F7",
//     alignItems: "center",
//     justifyContent: "center"
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: "300",
//     paddingBottom: 30,
//     color: "white"
//   },
//   container1: { flex: 1, padding: 100, paddingTop: 30, backgroundColor: '#fff' },
//   head: {  height: 100,  backgroundColor: '#f1f8ff'  },
//   wrapper: { flexDirection: 'row',  },
//   row: {  height: 100, width : 100, backgroundColor: '#f1f8ff' },
//   text: { textAlign: 'center', color : "black" },
// })