// Code Keypad Component Here

function Keypad (){
    function inputHandler(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type='password' onChange={inputHandler}/> 
        </div>
    )
}

export default Keypad;