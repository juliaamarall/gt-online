export function Main( {list} ) {

    const pokeList = [ list ]
    return(
        <main>
        
        {list?.map((pokemon, index) => (
          <div key={index} className='card'>
            <img src={pokemon.sprites.front_default} alt="imagem" />
           <p>{pokemon.forms[0].name}
             <div>
                {pokemon.types.map((item, index) => (
                    <span key={index}>{item.type.name} </span>
                ))}
             </div>
           </p>
          </div>
        ))}
      
    </main>
    )
}