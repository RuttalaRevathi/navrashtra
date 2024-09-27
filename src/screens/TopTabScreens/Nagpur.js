/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getNagpurAction from '../../redux/actions/getNagpurAction';


const NagpurScreen = ({
    navigation,
    nagpurData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNagpurAction('nagpur'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {nagpurData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="nagpur"
        />
    );
};

type Props = {
    nagpurData: Function,
};
const mapStateToProps = state => ({
    nagpurData: state.nagpurReducer?.nagpurData,
});
const mapDispatchToProps = {
    getNagpurAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NagpurScreen);
