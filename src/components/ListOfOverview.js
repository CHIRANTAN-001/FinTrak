import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { overviewListStyle } from '../assests/styles/componentStyles/overviewListStyle'


const ListOfOverview = ({ date, totalBalance, remainingBalance, totalAmount, spentAmount }) => {
    return (
        <TouchableOpacity activeOpacity={1}>
            {/* <View className='py-2'>
                <View className='justify-center align-middle' style={[overviewListStyle.view]}>
                    <View className='flex-row justify-between px-4'>
                        <View className='flex-col justify-between'>
                            <View className='flex-row'>
                                <Text className='py-3' style={[overviewListStyle.total]}>Total: </Text>
                                <Text className='py-3' style={[overviewListStyle.totalAmount]}>₹{ totalAmount }</Text>
                            </View>
                            <View className='flex-row'>
                                <Text className='py-3' style={[overviewListStyle.left]}>Left:   </Text>
                                <Text className='py-3' style={[overviewListStyle.remainingAmount]}>₹{spentAmount }</Text>
                            </View>
                        </View>
                        <View>
                            <Text className='py-3' style={[overviewListStyle.date]}>{date}</Text>
                        </View>
                    </View>
                </View>
            </View> */}
            {/* <View className='py-2'>
        <View
          className='justify-center align-middle'
          style={[listStyle.expense]}
        >
          <View className='flex-col px-4'>
            <View className='flex-row justify-between '>
              <Text style={[listStyle.title]}>Sep, 2023</Text>
              <Text style={[listStyle.amount]}>
                10000
              </Text>
            </View>
            <View className='pt-2'>
              <Text style={[listStyle.date]}>Sep, 2023</Text>
            </View>
          </View>
        </View>
      </View> */}
        </TouchableOpacity>
    )
}

export default ListOfOverview