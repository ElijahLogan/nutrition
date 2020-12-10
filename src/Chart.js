import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import Papa from 'papaparse';
import Calendar from './Calendar';
import nutriContext from './NutriContext';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryPie} from 'victory';



const data2012 = [
{'x':'Carb', 'y':74},
{'x':'Fat', 'y':39.24},
{'x':'Protein', 'y':42}
]
const Chart = () => {



  const { data} = useContext(nutriContext);

  console.log(data)

    
  
 return (
      <div>
        <div>        <Calendar/>
</div>
        <h1>04-26-2019</h1>
        <VictoryPie data = {data2012}
          colorScale={["tomato", "orange","cyan"]}>
        </VictoryPie>
      </div>
    )
  
}

export default Chart;