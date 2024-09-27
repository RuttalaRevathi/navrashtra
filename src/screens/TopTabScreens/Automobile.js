/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getAutomobileAction from '../../redux/actions/getAutomobileAction';


const AutomobileScreen = ({
    navigation,
    route,
    automobileData,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAutomobileAction('automobile'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {automobileData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="automobile"
        />
    );
};

type Props = {
    automobileData: Function,
};
const mapStateToProps = state => ({
    automobileData: state.automobileReducer?.automobileData,
});
const mapDispatchToProps = {
    getAutomobileAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(AutomobileScreen);
