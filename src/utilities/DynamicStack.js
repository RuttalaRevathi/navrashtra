import React from "react";
import CategoryScreen from "../screens/Category";

const DynamicStack = ({Stack, screens, mergedArray, initialRoute}) => {
  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{headerShown: false}}>
      {mergedArray.length > 0 &&
        mergedArray.map(item => (
          <Stack.Screen key={item.title} name={item.title}>
            {props => <CategoryScreen {...props} item={item} />}
          </Stack.Screen>
        ))}
      {screens?.map(({name, component}, index) => (
        <Stack.Screen key={index} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export default DynamicStack;
