/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getCrimeAction } from '../../redux/actions/getCrimeAction';


const CrimeScreen = ({
    navigation,
    crimeData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCrimeAction('crime'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {crimeData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="crime"
        />
    );
};

type Props = {
    crimeData: Function,
};
const mapStateToProps = state => ({
    crimeData: state.crimeReducer?.crimeData,
});
const mapDispatchToProps = {
    getCrimeAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CrimeScreen);
