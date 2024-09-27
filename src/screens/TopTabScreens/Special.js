/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getSpecialAction } from '../../redux/actions/getSpecialAction';


const SpecialScreen = ({
    navigation,
    specialData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecialAction('special-coverage'));

    }, []);
    
    return (
        <CategoryUI
        data = {specialData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="special-coverage"
        />
    );
};

type Props = {
    specialData: Function,
};
const mapStateToProps = state => ({
    specialData: state.specialReducer?.specialData,
});
const mapDispatchToProps = {
    getSpecialAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(SpecialScreen);
