/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getLifestyleAction from '../../redux/actions/getLifestyleAction';
import { BaseUrl, CategoryUrl, Lifestyle } from '../../utilities/urls';


const LifestyleScreen = ({
    navigation,
    route,
}: Props) => {

    const [lifestyleData, setLifestyleData] = useState(null);

    const fetchLifestyleData = async () => {
        try {
            const response = await fetch(BaseUrl + CategoryUrl + Lifestyle);
            const responseJson = await response.json();
         
            setLifestyleData(responseJson);
        } catch (error) {
            console.error('Error fetching lifestyle data in screen:', error);
        }
    };

    useEffect(
        React.useCallback(() => {
            fetchLifestyleData();
        }, [])
    );

    return (
        <CategoryUI
        data = {lifestyleData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="lifestyle"
        />
    );
};


export default LifestyleScreen;
