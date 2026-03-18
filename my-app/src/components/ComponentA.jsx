import ComponentB from "./ComponentB"

function ComponentA(){
    return (
        <div className="box-div">
            <h3>ComponentA</h3>
            <ComponentB/>
        </div>
    )
}
export default ComponentA