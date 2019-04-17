import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
    {console.log("WHERE ARE YOU PROPS?",props)}
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
