import React from 'react';

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


function MultiCheck({options, onChange}) {
    const [data, setData] = React.useState(options);

    const toggle = item => {
        data.map((_, key) => {
            if(data[key].label === item.label) data[key].checked = !item.checked;
        });

    }

    setData([...data]);
    onChange(data);



};

export default MultiCheck