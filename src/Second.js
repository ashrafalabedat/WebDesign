import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Menu from '@material-ui/core/Menu';
import MenuItem  from '@material-ui/core/MenuItem';

  
class Second extends Component{

    constructor(props){
        super(props)

    }


    render(){
        return <div>
            
            <section  className="header">

         
       		  <IconButton aria-label="fa fa-home" className="home" onClick={this.props.changePageEvent} className="btn btn-primary"> 
       <SvgIcon>
       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      

       </SvgIcon>
    </IconButton> 


    <Button variant="outlined" color="default"  className="btn" href="C:\Users\V\Desktop\index.php">
       sign Up 
      </Button>
       
      <p className="hello">Search for any photo you want</p>
     
      
      
      <br></br> 
      <br></br>
      <br></br> 
      <br></br>
      <br></br>
      </section>

      <section  className="menu">
           
       
      
      <Button  color="default"  href="" >
      Related-websites
      </Button>
    
      <Button  color="default"  href="https://www.google.com/" >
        google
      </Button>
      <Button  color="default"  href="http://www.picofile.com/" >
      picofile
      </Button>
      
      
           <Button  color="default"  href="" >
           about
           </Button> 
           </section>
          
      <section className="mainbody2">
     
      <div class="box1">
      <Grid container spacing={1}>
    <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403560826/DSC_0119.jpg"/>
       
        

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403568118/DSC_015519.jpg"/>
       
          

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403568150/852.jpg"/>
       
         

      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray"  color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403568184/DSC_01119.jpg "/>
       

      </Box>
      </Grid>
      
     
    
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s13.picofile.com/file/8403568200/DSC_01519.jpg"/>
       
       
      </Box>
      </Grid>
      <Grid item xs={12} sm={4} >
      <Box bgcolor="lightgray" color="background.paper" p={2}>

          <img className="img1" alt="complex" src="http://s12.picofile.com/file/8403568142/8.jpg"/>
       
       
      </Box>
      </Grid>
    </Grid>


    <Button variant="contained" color="Default" onClick={this.props.changePageEvent} className="btn btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M5.854 5.646a.5.5 0 0 1 0 .708L3.207 9l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M13.5 2.5a.5.5 0 0 1 .5.5v4a2.5 2.5 0 0 1-2.5 2.5H3a.5.5 0 0 1 0-1h8.5A1.5 1.5 0 0 0 13 7V3a.5.5 0 0 1 .5-.5z"/>
</svg></Button>
    
</div>


      </section>    
  
    
      <section className="footer">
    
    <div>
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Eu7KIQ2BXbFiPMJtoMbQfyyti2_HkMX5EXIDUoFEfThswbRZ&usqp=CAU" />
      <br></br>
      about us:we are a small team worker from Iran,University of guilan.
      </div>
      <p>Contact:pixcel.team@yahoo.com</p>
      </section>  
          
          </div>;
    }
}
export default Second;
