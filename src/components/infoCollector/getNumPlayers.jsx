

const GetNumPlayers = ()=>{
    return (
        <>
        <input type="number" min={0} max={10} className="get-num-players" placeholder="0" autoFocus />
        
        </>
    )
}

export {GetNumPlayers}