import { useRef } from "react";

function MyComponent(){

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)

  const handleClick1 = ()=>{
      inputRef1.current.focus()
      inputRef1.current.style.background = 'yellow'
      // ..........
      inputRef2.current.style.background = ''
      inputRef3.current.style.background = ''
  }

  const handleClick2 = ()=>{
      inputRef2.current.focus()
      inputRef2.current.style.background = 'yellow'
      // ..........
      inputRef1.current.style.background = ''
      inputRef3.current.style.background = ''
  }

  // ....... OR .......
  function handleClick3(){
      inputRef3.current.focus()
      inputRef3.current.style.background = 'yellow'
      // ..........
      inputRef1.current.style.background = ''
      inputRef2.current.style.background = ''
  }


  return(
    <div>
      input1: <input ref={inputRef1} onClick={handleClick1} type="text"/><br/>
      input2: <input ref={inputRef2} onClick={handleClick2} type="text"/><br/>
      input3: <input ref={inputRef3} onClick={handleClick3} type="text"/><br/>
    </div>
  )
}
export default MyComponent