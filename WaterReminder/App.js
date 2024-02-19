import React, { useState,useEffect,useRef} from 'react';

import { View,StyleSheet,Animated,Text } from 'react-native';

const Twirl =(props)=>{
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}
export default()  =>  {
  return(
    
     <View style={styles.container}>
      <Twirl><Text style={[styles.red]}>jebać szatana</Text></Twirl>
      

    </View>
    
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor: '#4485b8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
    
  },
  red:{
    fontSize: 50,
    color:'red',
  }
})