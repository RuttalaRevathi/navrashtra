/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import CategoryUI from '../../components/CategoryUI';
import {useDispatch} from 'react-redux';
import getIndiaAction from '../../redux/actions/getIndiaAction';

const IndiaScreen = ({navigation, indiaData, route}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndiaAction('india'));
  }, []);

  return (
    <CategoryUI
      data={indiaData}
      navigation={navigation}
      title={route.name}
      categoryName="india"
    />
  );
};

export default IndiaScreen;
