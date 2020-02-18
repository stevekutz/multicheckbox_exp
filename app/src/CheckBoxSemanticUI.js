import React, {useEffect} from 'react';
import {useState} from 'reinspect';
// import {CheckboxGroup, CheckboxToggle} from 'react-rainbow-components';
import axios from 'axios';

import {Button, Card, Checkbox, Container, Grid, 
  Icon, Image, Input, Label, Menu, Message, 
  Segment,
  FeedUser,
  CardGroup,
  CardHeader} 
      from 'semantic-ui-react';

const CheckBoxSemanticUI = () => {
    const [data, setData] = useState({ hits: [] }, "data State");
    const [values, setValues] = useState({});
    const [checked, setChecked] = useState(true); 

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );

        console.log('>>> result is ',result);
        setData(result.data);
      };
      fetchData();
    }, []);

    const MyCheckbox = (dataVal) => {
      const [isToggleOn, setIsToggleOn] = React.useState(false);
      
      console.log('label is ', dataVal);
    
      return (
        
          <Checkbox 
            style = {{padding: '5px'}}
            //slider
            label = {dataVal.dataVal}
            onClick={() => 
              {
                setIsToggleOn(!isToggleOn)
              }
            }
        
          />
      )
      
    }

    /*
    const toggleStatus = e => {
        console.log('event >>> ', e);
    }
    */

    return (

            <Card style = {{width: '80%'}}>
        
            {data.hits.map((item, index) => (
                <MyCheckbox key = {index} dataVal = {item.title}/>                               
            ))}
    
            </Card>  

    )
  }

export default CheckBoxSemanticUI;
