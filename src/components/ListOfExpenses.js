import React from 'react'
import { Text, FlatList, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { listStyle } from '../assests/styles/componentStyles/listStyle';

function formatDate(inputDate) {
    const dateParts = inputDate.split(' ');
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = dateParts[2];
    const monthIndex = parseInt(monthNames.indexOf(dateParts[1]));
    const year = dateParts[3];
    return `${day} ${monthNames[monthIndex]}, ${year}`;
}

const ListOfExpenses = ({ title, date, amount }) => {
    const color = amount >= 0 ? '#1e6953' : 'red'
    const price = amount >= 0 ? `+${amount.toFixed(2)}` : amount.toFixed(2)
    // { borderColor: amount >= 0 ? '#1e6953' : 'red' }
    return (
        <TouchableOpacity activeOpacity = { 1 }>
            <View className='py-2'>
                <View
                    className='justify-center align-middle'
                    style={[listStyle.expense]}
                >
                    <View className='flex-col px-4'>
                        <View className='flex-row justify-between '>
                            <Text style={[listStyle.title]}>{title}</Text>
                            <Text style={[listStyle.amount, { color: color }]}>
                                {price}
                            </Text>
                        </View>
                        <View className='pt-2'>
                            <Text style={[listStyle.date]}>{formatDate(date)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListOfExpenses