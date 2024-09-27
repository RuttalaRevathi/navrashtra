/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getViralAction } from '../../redux/actions/getViralAction';


const ViralScreen = ({
    navigation,
    viralData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getViralAction('viral'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {viralData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="viral"
        />
    );
};

type Props = {
    viralData: Function,
};
const mapStateToProps = state => ({
    viralData: state.viralReducer?.viralData,
});
const mapDispatchToProps = {
    getViralAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ViralScreen);
