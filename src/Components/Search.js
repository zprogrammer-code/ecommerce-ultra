import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Input} from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';0
import { Grid } from 'semantic-ui-react';
import '/home/zprogrammercode/ecommerce-ultra/src/Components/Components.css';

q    
export default function MainSearch(){
    const [APIData, setAPIData] = useState([]);

    useEffect((){
        axios.get('data.url')
        .than((response) => {
            setAPIData(response.data)
        });
    });

    const initialState = {
        loading: false,
        results: [],
        value: '',
      }

    return(
        
         <Grid>
            <Grid.Row className='searchComponentgNavbar'>
                <div alt="container showing number of items">
                    <p> xx.x items</p>
                </div>
                <div>
                    <label>Results</label>
                </div>
            </Grid.Row>
            <Grid.Column>
            <form> 
                <Input placeholder='Vape Make'/>
                <Input placeholder='Vape Model'/>
                <Input placeholder='E-Juice'/>
                <Input placeholder='chargers and Apparal'/>
            </form>
            </Grid.Column>
            <Grid.Column>
        
                <Card.Group itemsPerRow={3} style={{marginTop:20}}>
                    {APIData.map((item)=> {
                        return(   
                                <Card>
                                    <Card.Content>
                                        {item.Image}
                                        {item.className}
                                        {item.Data}
                                        {item.price}
                                    </Card.Content>
                                </Card>
                            )
                        })}
                 
                </Card.Group>
            
            </Grid.Column>
        </Grid>
    
    );
}