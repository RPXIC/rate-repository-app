import React from 'react';
import { Picker } from '@react-native-picker/picker';

const OrderPicker = ({ order, setOrder }) => {

  const handleChange = (value, index) => {
    switch (index) {
      case 0:
        return setOrder({ ...order, defaultSelected: index, orderBy: "CREATED_AT", orderDirection: "DESC" })
      case 1:
        return setOrder({ ...order, defaultSelected: index, orderBy: "RATING_AVERAGE", orderDirection: "DESC" })
      case 2:
        return setOrder({ ...order, defaultSelected: index, orderBy: "RATING_AVERAGE", orderDirection: "ASC" })
      default:
        break;
    }
  }

  return (
    <>
      <Picker
        mode='dropdown'
        selectedValue={order.defaultSelected}
        onValueChange={(itemValue, itemIndex) => handleChange(itemValue, itemIndex)}>
        <Picker.Item label="Latest repositories" value={0} />
        <Picker.Item label="Highest rated repositories" value={1} />
        <Picker.Item label="Lowest rated repositories" value={2} />
      </Picker>
    </>
  )
}

export default OrderPicker