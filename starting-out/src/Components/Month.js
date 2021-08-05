import React from 'react';

function Month(props) {


    const makeDays=()=>{
        let arr=[]
        let newDate= new Date(2021,props.monthNum,1)
        console.log(newDate.getDay())
        for(let i = 0; i<props.numDays; i++)
        {
            arr.push(
                <p>{i+1}</p>
            )
        }
        return arr
    }

    const numGrid=()=>{
        let arr=[]
        
            arr.push(
                <div className="monthDayGrid">
                    {makeDays()}
                </div>
            )
        return arr;
    }



    return (
        <div>
            <h3>{props.name}</h3>
            <div className="monthDayGrid">
                <p>Su</p>
                <p>Mo</p>
                <p>Tu</p>
                <p>We</p>
                <p>Th</p>
                <p>Fr</p>
                <p>Sa</p>
            </div>
            {numGrid()}
          
        </div>
    );
}

export default Month;