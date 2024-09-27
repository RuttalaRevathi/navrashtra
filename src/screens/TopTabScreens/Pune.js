/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getPuneAction from '../../redux/actions/getPuneAction';


const PuneScreen = ({
    navigation,
    puneData,
    
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPuneAction('pune'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {puneData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="pune"
        />
    );
};

type Props = {
    puneData: Function,
};
const mapStateToProps = state => ({
    puneData: state.puneReducer?.puneData,
});
const mapDispatchToProps = {
    getPuneAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(PuneScreen);
