import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import DogList from '../DogList/DogList';
import FilterFacts from '../FilterFacts/FilterFacts';

function RoutesComp({dogs}){
    return(
        <Routes>
            <Route path='/dogs' exact element={<DogList dogs={dogs}></DogList>}></Route>
            <Route path='/dogs/:name' exact element={<FilterFacts dogs={dogs}></FilterFacts>}></Route>
            <Route element={<Navigate to='/dogs'></Navigate>}></Route>
        </Routes>
    )
}

export default RoutesComp;