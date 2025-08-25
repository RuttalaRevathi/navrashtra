import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';

export const useMergedMenuData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, []);
  const menuData =
    useSelector(state => state.topMenuDataReducer.topMenuData) || [];
  const mergedArray = [];

  menuData.forEach(item => {
    if (item.subItems) {
      mergedArray.push(item);
      item.subItems.forEach(subItem => {
        mergedArray.push({
          ...subItem,
        });
      });
    } else {
      mergedArray.push(item);
    }
  });

  return mergedArray;
};
