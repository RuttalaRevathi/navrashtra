/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getSportsAction from '../../redux/actions/getSportsAction';
import CategoryUI from '../../components/CategoryUI';


const SportsScreen = ({
    navigation,
    sportsData,
    sportsLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSportsAction('sports'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {sportsData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="sports"
        />
    );
};

type Props = {
    sportsData: Function,
    sportsLoading: Boolean,
};
const mapStateToProps = state => ({
    sportsData: state.sportsReducer?.sportsData,
    sportsLoading: state.sportsReducer?.sportsLoading,
});
const mapDispatchToProps = {
    getSportsAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(SportsScreen);
