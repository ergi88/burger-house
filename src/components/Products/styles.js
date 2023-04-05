import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  sidebar: {
    width: 200,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    position: 'relative'
  },
  root: {
    flexGrow: 1,
  },
  productGridContainer:{
        padding: theme.spacing(3),
        backgroundImage:
        "url('https://as1.ftcdn.net/v2/jpg/02/08/52/58/1000_F_208525886_ph0EXbxxueCFT5IXPBDgWfFkIUdkfBaL.jpg')",
       
  },
  titulli:{
    fontSize:50,
    color:'white'
  },
  sllogani:{
    fontSize:20,
    color:'white'
  },
  scrollToProducts:{
    fontSize:20,
    color:'white',
    border:'1px solid white',
    marginTop:10,
    backgroundColor:'transparent',borderRadius:5
   }
   ,drawerOpen:{
       }
  ,informativePart:{
    flexGrow:1,
    height:800,
    backgroundColor:'red',
    backgroundImage:
    "url('https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89595.jpg?w=1480&t=st=1657459709~exp=1657460309~hmac=e2c3adef9a12607433366301b96f298fa1cc3cdf916570c813dbe8ae8945a452')",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  informationPartContainer:{
    marginLeft:-750
  }
  ,productsTitle:{
    flexGrow:1,
    height:70,
    backgroundColor:'black',
    color:'white'
   ,    display:'flex',
   alignItems:'center',
   justifyContent:'space-between',
   paddingLeft:20,
   paddingRight:20,
   fontSize:20
  }
}));
