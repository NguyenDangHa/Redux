import {
  StyleSheet
} from 'react-native';
export default StyleSheet.create({
  itemList: {
    backgroundColor: '#f0e68c',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    marginBottom:80
  },
  textItem: {
    fontSize: 18,
    alignItems: 'center',
    letterSpacing: 0.51,
    color: 'rgb(255,130,0)',
    fontWeight: 'bold'
  },
  textItem2: {
    fontSize: 18,
    alignItems: 'center',
    letterSpacing: 0.51,
    color: 'rgb(255,255,255)',
    fontWeight: 'bold'
  },
  imageView: {
    width: 300,
    height: 350,
    margin: 10
  },
  btnUpdate: {
    width: 150,
    backgroundColor: '#b0e0e6',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  btnDelete: {
    width: 130,
    backgroundColor: 'rgb(186,12,47)',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  btnGoHome:{
    width: 130,
    height:46,
    backgroundColor: 'rgb(186,12,47)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButtonItem: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginLeft: 5
  },
  viewButtonItem: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 20,
    margin: 10
  },
  btnAdd: {
    width: 300,
    height: 40,
    backgroundColor: 'rgb(186,12,47)',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:10
  },
  textAddPro:{
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center',
    color:'rgb(255,255,255)',
    fontWeight:'bold',
  },
  container:{ 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textButton:{
    textAlign:'center',
    justifyContent:'center',
    color:'rgb(255,255,255)',
    fontWeight:'bold',
    fontSize:17
  }
});
