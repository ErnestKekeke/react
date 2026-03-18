import ComponentC from "./ComponentC"

function ComponentB(){
    return (
        <div className="box-div">
            <h3>ComponentB</h3>
            <ComponentC/>
        </div>
    )
}
export default ComponentB