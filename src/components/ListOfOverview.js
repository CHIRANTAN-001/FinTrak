import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { overviewListStyle } from '../assests/styles/componentStyles/overviewListStyle'
import { useNavigation } from '@react-navigation/native'



const ListOfOverview = ({ month, year, totalBalance, remainingBalance }) => {

  const navigation = useNavigation();

  const handleNavigateMontlyExpense = () => {
    navigation.navigate('MonthlyOverview', {
      month: month,
      year: year,
    })
  }

  return (
    <TouchableOpacity activeOpacity={1}>
      <View className='py-2'>
        <View className='justify-center align-middle' style={[overviewListStyle.view]}>
          <View className='flex-row justify-between px-4'>
            <View className='flex-col justify-between'>
              <View className='flex-row'>
                <Text className='py-3' style={[overviewListStyle.total]}>Total: </Text>
                <Text className='py-3' style={[overviewListStyle.totalAmount]}>₹{totalBalance}</Text>
              </View>
              <View className='flex-row'>
                <Text className='py-3' style={[overviewListStyle.left]}>Left:   </Text>
                <Text className='py-3' style={[overviewListStyle.remainingAmount]}>₹{remainingBalance}</Text>
              </View>
            </View>
            <View className='flex-col justify-evenly'>
              <Text className='' style={[overviewListStyle.date]}>{month}, {year}</Text>
              <TouchableOpacity onPress={handleNavigateMontlyExpense}>
                <Text className='pt-3' style={[overviewListStyle.seeMore]}>See More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ListOfOverview