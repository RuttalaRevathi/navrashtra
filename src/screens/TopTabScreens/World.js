/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getWorldAction from '../../redux/actions/getWorldAction';
import { BaseUrl, CategoryUrl, World } from '../../utilities/urls';


const WorldScreen = ({
    navigation,
   
    route,
}: Props) => {

    const [worldData, setWorldData] = useState(null);

    const fetchworldData = async () => {
        try {
            const response = await fetch(BaseUrl + CategoryUrl + World);
            const responseJson = await response.json();
            setWorldData(responseJson);
        } catch (error) {
            console.error('Error fetching world data in screen:', error);
        }
    };

    useEffect(
        React.useCallback(() => {
            fetchworldData();
        }, [])
    );

    return (
        <CategoryUI
        data = {worldData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="world"
        />
    );
};


export default WorldScreen;
