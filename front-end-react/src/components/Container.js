import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from './Card'
import Sidebar from './Sidebar'
import { useState } from 'react';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';

export default function SimpleContainer(props) {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div">
        
        {props.test ? <h4>Top Recommendations</h4>: ''}
        {props.test[0] === 'Short' ?  <h4>Day Trader Pattern Detected</h4> :  '' }
        {props.test[0] === 'Long' ?  <h4>Long Term Investor Pattern Detected</h4> :  '' }

        {props.test ? props.test[1].map((companies, index) => {
          return (<div>
            <br />
            {/* <img src={companies.image} alt="" />
            <div>{companies.symbol}</div>
            <div>{companies.companyName}</div> */}
            <div style={{margin: '0 auto', display: 'inline-block'}} >

            <Card boxShadow={3} titles={companies.companyName} image={companies.image} description={companies.description} website={companies.website} symbol={companies.symbol}  apiCallFav={companies.uwu} target="_blank"/>

            </div>
            <br />
          </div>
            
          )
        }): ''}
        
        
        </Typography>
        {/* <Sidebar/> */}
        
      </Container>
    </React.Fragment>
  );
}