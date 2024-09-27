/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getReligionAction from '../../redux/actions/getReligionAction';


const ReligionScreen = ({
    navigation,
    religionData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReligionAction('religion'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {religionData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="religion"
        />
    );
};

type Props = {
    religionData: Function,
};
const mapStateToProps = state => ({
    religionData: state.religionReducer?.religionData,
});
const mapDispatchToProps = {
    getReligionAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ReligionScreen);
