function List() {
    const fruits = [{id:1,name:"apple",cal:89},
                     {id:1,name:"banana",cal:9},
                     {id:1,name:"orange",cal:84} ,
                     {id:1,name:"mango",cal:86},
                     {id:1,name:"pineapple",cal:8}
                    ];

    const lowcal = fruits.filter(fruits => fruits.cal <100 );
    //fruits.sort((a,b)=> a.name.localeCompare(b.name)) //Alphatabcal
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)) //Alphatabcal Reverse

    //fruits.sort((a,b)=> a.cal - b.cal) //Numeric
    //fruits.sort((a,b)=> b.cal - a.cal) //Numeric Reverse


    const ListItem = lowcal.map(lowcal => <li key={lowcal.id}>{lowcal.name}   <b>{lowcal.cal}</b></li>)
    return(<ol>{ListItem}</ol>);
}
export default List