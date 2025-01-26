import {EllipsisVertical} from 'lucide-react-native';
import React, {FC, useState} from 'react';
import {TouchableOpacity, View, TouchableHighlight} from 'react-native';

interface Props {
  content: React.ReactNode[];
}

const DropdownMenu: FC<Props> = ({content}) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleActionPress = (action: () => void) => {
    setVisible(false);
    action();
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <View className="z-10 min-w-[180px] border bg-white border-gray-200 p-4 rounded-lg absolute top-[50px] right-[10px] shadow-md gap-6">
          {content.map((item, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => {
                if (React.isValidElement(item) && item.props.onPress) {
                  handleActionPress(item.props.onPress);
                } else {
                  setVisible(false);
                }
              }}
              // underlayColor="#e0e0e0"
            >
              {item}
            </TouchableHighlight>
          ))}
        </View>
      );
    }
    return null;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleDropdown}
        className="p-2 border border-white rounded-xl">
        <EllipsisVertical size={20} color={'white'} />
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );
};

export default DropdownMenu;
