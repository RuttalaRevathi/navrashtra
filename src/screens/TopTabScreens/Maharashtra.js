/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import CategoryUI from '../../components/CategoryUI';
import { BaseUrl, CategoryUrl, Maharashtra } from '../../utilities/urls';
import { useFocusEffect } from '@react-navigation/native';

const MaharashtraScreen = ({ navigation, route }) => {
    const [maharashtraData, setMaharashtraData] = useState(null);

    const fetchMaharashtraData = async () => {
        try {
            const response = await fetch(BaseUrl + CategoryUrl + Maharashtra);
            const responseJson = await response.json();
            setMaharashtraData(responseJson);
        } catch (error) {
            console.error('Error fetching Maharashtra data in screen:', error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchMaharashtraData();
        }, [])
    );

    return (
        <CategoryUI
            data={maharashtraData}
            navigation={navigation}
            title={route.name}
            categoryName="maharashtra"
        />
    );
};

export default MaharashtraScreen;
