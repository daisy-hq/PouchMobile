import {EllipsisVertical} from 'lucide-react-native';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  content: any;
}

const DropdownMenu: FC<Props> = ({content}) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return <View style={styles.dropdown}>{content}</View>;
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={toggleDropdown}
      className="bg-red-200">
      {renderDropdown()}
      <EllipsisVertical size={20} className="flex-1" />
    </TouchableOpacity>
  );
};

export default DropdownMenu;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    // width: '90%',
    // paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    // flex: 1,
    // textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
    right: 20,
    padding: 12,
  },
});

// import React, {useState} from 'react';
// import {EllipsisVertical} from 'lucide-react-native';
// import {StyleSheet, View} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';

// const data = [
//   {label: 'Item 1', value: '1'},
//   {label: 'Item 2', value: '2'},
//   {label: 'Item 3', value: '3'},
//   {label: 'Item 4', value: '4'},
// ];

// const DropdownMenu = () => {
//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);

//   const renderLabel = () => {
//     if (value || isFocus) {
//       return <EllipsisVertical size={20} />;
//     }
//     return null;
//   };

//   return (
//     <View style={styles.container}>
//       {renderLabel()}
//       <Dropdown
//         style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
//         // placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         // inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={data}
//         // search
//         maxHeight={300}
//         labelField="label"
//         valueField="value"
//         // placeholder={!isFocus ? 'Select item' : '...'}
//         // searchPlaceholder="Search..."
//         value={value}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={item => null}
//         // onChange={item => {
//         //   setValue(item.value);
//         //   setIsFocus(false);
//         // }}
//         // renderLeftIcon={() => (
//         //   <AntDesign
//         //     style={styles.icon}
//         //     color={isFocus ? 'blue' : 'black'}
//         //     name="Safety"
//         //     size={20}
//         //   />
//         // )}
//       />
//     </View>
//   );
// };

// export default DropdownMenu;

// const styles = StyleSheet.create({
//   userIcon: {
//     height: 40,
//     width: 40,
//     objectFit: 'cover',
//     borderRadius: '50%',
//   },
//   container: {
//     backgroundColor: 'white',
//     padding: 16,
//     width: '100%',
//   },
//   dropdown: {
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//   },
//   icon: {
//     marginRight: 5,
//   },
//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });
