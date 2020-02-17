import React from 'react';
import {useState} from 'reinspect';
import {Input, List, Segment} from 'semantic-ui-react';

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
        <Segment style = {{border: "1px solid red"}}>
            <List style = {style.listContainer}>
                {data.map(item => {
                    return (
                        <List.Item key = {item.label} style = {style.itemStyle} onClick = {()=> toggle(item)}>
                            <Input  readOnly type = 'checkbox' checked = {item.checked || false }/>
                            {item.label}
                        </List.Item>         
                    );                
                })}       
            </List>
        </Segment>
    )

};

export default MultiCheck