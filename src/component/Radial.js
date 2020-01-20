import React, {Component} from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default class Radial extends Component {

  render() {
    const percentage = 90;    
    return ( 
      <>
        <div className="col-8 m-auto text-center">    
            <CircularProgressbar value={percentage} text="$ 150"  strokeWidth={5} styles={buildStyles({ rotation: 0.5 + (1 - percentage / 100) / 2, textColor: "#685BAD", pathColor: "#685BAD"})}/>    
            
        </div> 
        <p className="point mt-4"><img alt="" src="./assets/images/up.png" />1020 <img alt="" src="./assets/images/down.png"/>1020</p>
        </>
    );
  }
}
