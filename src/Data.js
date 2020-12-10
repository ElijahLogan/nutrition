import React, { Component, Fragment } from 'react';
import * as d3 from 'd3';

class Data extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef(); 
    this.dataset = [14.86, 18.65, 200.08, 11.55, 244.09]
  
  }


  componentDidMount(){

    //  the size of the overall svg element
    let height = 200,width = 720;

//  the width of each bar and the offset between each bar
    let barWidth = 40,barOffset = 20;

    let size = 500;
    let svg = d3.select('div.roc')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .style('background', '#dff0d8');

    let rect_width = 95;
    svg.selectAll('rect')
       .data(this.dataset)
       .enter()
       .append('rect')
       .attr('y',(d) => height - d)
       .attr('x', (d, i) =>  i*(barWidth + barOffset))
       .attr('fill', 'teal');

  }




  render() {
    return (

<div className="roc">
<p> hello</p>
    </div>
    );
  }
}

export default Data;

