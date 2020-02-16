import React from 'react';
import {useState} from 'reinspect';


const style = {
    listContainer: {
        listStyle: 'none',
        paddingLeft: 0
    },
    itemStyle: {
        cursor: 'pointer',
        padding: 5

    }


}

// const options = [{label: 'First Item'}, {label: 'Second Item'}];

function MultiCheck({options, onChange}) {
    // const [data, setData] = React.useState(options, 'data state');
    const [data, setData] = useState(options, "Options State");


    const toggle = item => {
        data.map((_, key) => {
            if(data[key].label === item.label) data[key].checked = !item.checked;
        });
        setData([...data]);
        onChange(data);
    }



    return (
        <ul style = {style.listContainer}>
            {data.map(item => {
                return (
                    <li key = {item.label} style = {style.itemStyle} onClick = {()=> toggle(item)}>
                        <input  readOnly type = 'checkbox' checked = {item.checked || false }/>
                        {item.label}
                    </li>         
                );                
            })}       
        </ul>
    )

};

export default MultiCheck