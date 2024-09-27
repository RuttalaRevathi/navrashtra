/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getMoviesAction from '../../redux/actions/getMoviesAction';


const MoviesScreen = ({
    navigation,
    moviesData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAction('movies'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {moviesData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="movies"
        />
    );
};

type Props = {
    moviesData: Function,
};
const mapStateToProps = state => ({
    moviesData: state.moviesReducer?.moviesData,
});
const mapDispatchToProps = {
    getMoviesAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);
