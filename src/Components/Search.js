import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Input, ItemImage } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

q    
export function MainSearch(){
    return(
        <>
        <div>
            <div alt="Search component Navbar">
                <div alt="container showing number of items">
                    <p> xx.x items</p>
                </div>
                <div></div>
            </div>
            <form>
                <Input placeholder='Vape Make'/>
                <Input placeholder='Vape Model'/>
                <Input placeholder='E-Juice'/>
                <Input placeholder='chargers and Apparal'/>
            <form/>
            <Card.Group itemsPerRow={3} style={{marginTop:20}}>
                <Card>
                    <Card.Content>
                        {ItemImage}

                    </Card.Content>
                </Card>
            </Card.Group>
            
        </div>
        </>
    )
}