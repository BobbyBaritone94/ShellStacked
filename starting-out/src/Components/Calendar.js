import React from 'react';
import Month from './Month';


function Calendar(props) {

const dateDictionary={
    Jan:31,
    Feb:28,
    Mar:31,
    Apr:30,
    May:31,
    Jun:30,
    Jul:31,
    Aug:31,
    Sep:30,
    Oct:31,
    Nov:30,
    Dec:31
}

    // const [grid,setGrid]= useState([])

    const makeMonths=()=>{

        let months=[]

        let i=0;
        for (const key in dateDictionary)
        {
           
            let value = dateDictionary[key]
            months.push(
                <Month name={key} numDays={value} monthNum={i} />
                // <div>
                //     <h3>{key}  {value}</h3>
                // </div>
            )
            i++;
        }


        return months;
    }
    
    
    return (
        <div>
            {makeMonths()}
        </div>
    );
}

export default Calendar;