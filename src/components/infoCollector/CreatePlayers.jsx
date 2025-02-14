

const CreatePlayers = ({children,textIni})=>{
    
    return (
        <>
        
        <input type="text" className="create-players" placeholder={textIni}/>
        {children}
        </>
    )
}

export {CreatePlayers}