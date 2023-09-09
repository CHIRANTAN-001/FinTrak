// import { View, Text } from 'react-native'
// import React, { useEffect } from 'react'
// import SplashScreenSvg from '../../assests/svg/SplashScreenSvg';
// import { Image, SafeAreaView } from 'react-native';

// const SplashScreen = ({ navigation }) => {
    
//     useEffect(() => { 
//         splashNav();
//     }, [])
    
//     const splashNav = () => { 
//         const intervalNav = setInterval(() => { 
//             navigation.navigate('AuthHomeScreen')
//             clearInterval(intervalNav);
//         }, 2500)
//     }

//     return (
//       <SafeAreaView classname='flex-1 flex justify-center align-middle'>
//             <View className='h-[100%] w-full'>
//                 <View>
//                     <SplashScreenSvg />
//                 </View>
//             </View>      
//       </SafeAreaView>
      
//   )
// }

// export default SplashScreen