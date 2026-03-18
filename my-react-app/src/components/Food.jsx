function Food(){
    const food01 = 'Orange'
    const food02 = 'Banana'
    // const handleClick = ()=>{
    //     window.alert('Apple is Clicked')
    //     console.log(this.innerHTML)
    // }
   const handleClick = (e)=>{
        window.alert('Apple is Clicked')
        console.log(e.target.innerHTML)
    }
    return(
        <ul>
            <li onClick={handleClick}>Apple</li>
            <li> {food01} </li>
            <li> {food02.toUpperCase()} </li>
        </ul>
    )
}

export default Food