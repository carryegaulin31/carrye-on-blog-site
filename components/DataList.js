import dataStyles from '../styles/data.module.css'
import React from 'react';
import DataItem from './DataItem';

const DataList = ({data}) => {
    return (
        <div className={dataStyles.grid}> 
              {data.map((post) => (
    // eslint-disable-next-line react/jsx-key
               <DataItem data={post}/>
              ))}
           
        </div>
    );
}

export default DataList;
