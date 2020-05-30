import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecognition extends Component {
  render(){
    const boxArray = this.props.box
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' alt='' src={this.props.imageUrl} width='500px' heigh='auto'/>
           {boxArray.map((boxvalue,index)=>{
           
             return (
               
              <div 
              className='bounding-box' 
              style={{top: boxvalue.topRow, 
              right: boxvalue.rightCol, 
              bottom: boxvalue.bottomRow, 
              left: boxvalue.leftCol}}
              key={index}>
              </div>

             )
           })}         
          
        </div>
      </div>
    );
  }
  
}

export default FaceRecognition;