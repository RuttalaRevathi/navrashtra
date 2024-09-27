/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getMumbaiAction from '../../redux/actions/getMumbaiAction';


const MumbaiScreen = ({
    navigation,
    mumbaiData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMumbaiAction('mumbai'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {mumbaiData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="mumbai"
        />
    );
};

type Props = {
    mumbaiData: Function,
};
const mapStateToProps = state => ({
    mumbaiData: state.mumbaiReducer?.mumbaiData,
});
const mapDispatchToProps = {
    getMumbaiAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MumbaiScreen);
