/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import CategoryUI from '../../components/CategoryUI';
import { BaseUrl, CategoryUrl, India } from '../../utilities/urls';
import { useDispatch } from 'react-redux';
import getIndiaAction from '../../redux/actions/getIndiaAction';

const IndiaScreen = ({ navigation, indiaData, route }: Props) => {
    // const [indiaData, setIndiaData] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIndiaAction('india'));

    }, []);
    // const getIndiaAction = async () => {
    //     try {
    //         const response = await fetch(BaseUrl + CategoryUrl + India);
    //         const responseJson = await response.json();
    //         setIndiaData(responseJson);
    //     } catch (error) {
    //         console.error('Error fetching India data:', error);
    //     }
    // };

    // useEffect(() => {
    //     getIndiaAction();
    // }, []);
    console.log(indiaData, "india data from india screen");

    return (
        <CategoryUI
            data={indiaData}
            navigation={navigation}
            title={route.name}
            categoryName="india"
        />
    );
};

type Props = {
    navigation: Function; // Replace `any` with the correct type
    route: Function;      // Replace `any` with the correct type
};

export default IndiaScreen;
