import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import useViewModel from './ViewModel';
import RolesItem from './Item';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const RolesScreen = () => {

    const { user } = useViewModel();
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;


    const [mode, setMode] = useState<any>('horizontal-stack');
    const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left');
    return (
        <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                {/*  <FlatList
                data={user?.roles}
                renderItem={({ item }) => <RolesItem
                    rol={item}
                    height={420}
                    width={width - 20}
                />}
                keyExtractor={(item) => item.id}
            /> */}

                <Carousel
                    loop={false}
                    width={width}
                    height={height / 1.5}
                    autoPlay={false}
                    data={user?.roles}
                    scrollAnimationDuration={1000}
                    /* onSnapToItem={(index) => console.log('CURRENT INDEX', index)} */

                    renderItem={({ item }) => <RolesItem
                        rol={item}
                        height={420}
                        width={width - 20}
                    />}

                    modeConfig={{
                        snapDirection,
                        stackInterval: 30
                    }}

                    mode={mode}
                />
            </View>
        </GestureHandlerRootView>
    )
}
