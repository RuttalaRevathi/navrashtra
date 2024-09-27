/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getCareerAction } from '../../redux/actions/getCareerAction';


const CareerScreen = ({
    navigation,
    careerData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCareerAction('career'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {careerData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="career"
        />
    );
};

type Props = {
    careerData: Function,
};
const mapStateToProps = state => ({
    careerData: state.carrerReducer?.careerData,
});
const mapDispatchToProps = {
    getCareerAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CareerScreen);
