import React, { useState, useRef } from 'react';
import useSquidGame from './useSquidGame';
import validate from './validate';
export default function Game() {
  const [data, setData] = useState({
    checked: false,
    bet: '',
    players : [10,10],
  });
  const { isLoading, gameStatus } = useSquidGame(validate);
  const myRefCheck = useRef(null);
  const myRefBet = useRef(null);
  const onSubmit = e => {
    e.preventDefault();
    setData({
      checked: myRefCheck.current.checked,
      bet: myRefBet.current.value,
      players : [10,10]
    });
    validate(data.checked, data.bet);
    console.log(validate(data.checked, data.bet));
    myRefBet.current.value=""
  };
  if (isLoading) return <span>loading.....</span>;
  if(gameStatus!="IN_PROGRESS") return <p>{gameStatus}</p>
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>
          Your Bet :{' '}
          <input ref={myRefBet} type="text" placeholder="bet" required></input>
        </label>
        <label>
          IsOdd : <input ref={myRefCheck} type="checkbox"></input>
        </label>
        <input type="submit" value="Submit"></input>
        <br />
        <code> History : {JSON.stringify(data, null, 2)}</code>
      </form>
    </div>
  );
}
