/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getTechnologyAction from '../../redux/actions/getTechnologyAction';


const TechnologyScreen = ({
    navigation,
    technologyData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTechnologyAction('technology'));

    }, []);

    return (
        <CategoryUI
        data = {technologyData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="technology"
        />
    );
};

type Props = {
    technologyData: Function,
};
const mapStateToProps = state => ({
    technologyData: state.technologyReducer?.technologyData,
});
const mapDispatchToProps = {
    getTechnologyAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(TechnologyScreen);
