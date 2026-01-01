function Button(){
    const ClickByName = (name) =>{
        console.log(' ${name} Hello')
    }

    return(
        <Button onClick={()=>ClickByName("amit")}>Click Me!</Button>
    );
}