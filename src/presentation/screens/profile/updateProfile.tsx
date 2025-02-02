import {View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {BaseLayout} from '@src/presentation/constants/layouts';
import {P} from '@src/presentation/constants/text';
import {LabelInputField} from '@src/presentation/components/labelInputField';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

const openGallery = () => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
  };

  launchImageLibrary(options, response => {
    console.log(response);
  });
};

const UpdateProfile = () => {
  const [name, setName] = useState('Sandara Boateng');
  const [email, setEmail] = useState('exampleSandy@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('030 444 9045');

  return (
    <BaseLayout>
      <View>
        <View className="items-center">
          <View className="w-32 h-32 ">
            <Image
              className="w-full h-full object-cover rounded-full"
              source={require('../../../assets/images/commons/avatar.png')}
            />
          </View>
          <Pressable onPress={openGallery}>
            <P className="text-blue-800 mt-1">Upload Photo</P>
          </Pressable>
        </View>
        <View className="mt-3">
          <LabelInputField
            label="Name"
            placeholder=""
            value={name}
            onChangeText={setName}
            className="bg-transparent border-b border-b-gray-300 p-3"
          />
          <LabelInputField
            label="Email"
            placeholder=""
            value={email}
            onChangeText={setEmail}
            className="bg-transparent border-b border-b-gray-300 p-3"
          />
          <LabelInputField
            label="Mobile"
            placeholder=""
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            className="bg-transparent border-b border-b-gray-300 p-3"
          />
        </View>
      </View>
    </BaseLayout>
  );
};

export default UpdateProfile;
