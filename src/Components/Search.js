import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Input} from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import '/home/zprogrammercode/ecommerce-ultra/src/Components/Components.css';

q    
export function MainSearch(){
    const [APIData, setAPIData] = useState([]);
    const [searchInput, setsearchInput] = useState('');
    useEffect((){
        axios.get('data.url')
        .than((response) => {
            setAPIData(response.data)
        })
    })
    return(
        <>
        <div className='searchComponentContainer'>
            <div className='searchComponentgNavbar'>
                <div alt="container showing number of items">
                    <p> xx.x items</p>
                </div>
                <div>
                    <label>Results</label>
                </div>
            </div>
            <form> 
                <Input placeholder='Vape Make'/>
                <Input placeholder='Vape Model'/>
                <Input placeholder='E-Juice'/>
                <Input placeholder='chargers and Apparal'/>
            </form>
            <div>
                {/*grid*/}
            <Card.Group itemsPerRow={3} style={{marginTop:20}}>
            {APIData.map((item)=> {
                
            })}
                <Card>
                    <Card.Content>
                        {item.Image}
                        {item.className}
                        {item.Data}
                        {item.price}
                    </Card.Content>
                </Card>
            </Card.Group>
            
        </div>
        </div>
    </>
    );
}