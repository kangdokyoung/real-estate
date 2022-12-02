import React from "react";
import Chart from "react-google-charts";

const Graph = ()=>{

    const data = [
        ["Name", "Counst"],
        ["성동구", 1000],
        ["강진구", 1170],
        ["강남구", 660],
        ["송파구", 1030],
      ];

      const option = {
        chart: {
          title: "구역별 통계",
        },
      };

    return(
        <Chart 
            chartType="Bar"
            width="80%"
            height="400px"
            data={data}
            options={option}
        />  
    )
}

export default Graph;