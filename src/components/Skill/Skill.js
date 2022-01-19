import React from "react";
import {Knowledge, Bar} from "./Skill.styled";

export default function Skill({name, level}) {
  return (
    <div>
      <span>
        {name}
      </span>
      {level && (
        <Knowledge>
          <Bar className={level}/>
        </Knowledge>
      )}
    </div>
  );
}
