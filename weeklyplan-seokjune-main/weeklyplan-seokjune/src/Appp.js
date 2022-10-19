import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Appp(){
    const [state, setStates] = useState({
        response: '',
        post: '',
        responseToPost: '',
      });

      const onClickButton = async e=> {
        e.preventDefault();
        const response = await fetch('/api/db',{
            method: 'GET',
        });
        const body = await response.text();

        setStates({responseToPost: body});
      }

      const onClickDeleteButton = async e => {
        e.preventDefault();
        const response = await fetch('/api/delete', {
            method: 'GET',
        });
        const body = await response.text();

        setStates({responseToPost: body});
      }

      const onClickInsertButton = async e => {
        e.preventDefault();
        const response = await fetch('/api/insert',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({post:  state.post}),
        });
        const body = await response.text();

        setStates({responseToPost: body});
      }

    return(
        <>
            <div className="Appp">
                <header className="App-header">
                    <img src={logo} className="Appp-log" alt="logo"/>
                    <p>
                        고석준
                    </p>
                    <form onSubmit={onClickInsertButton}>
                        <input 
                            type="text"
                            value={state.post}
                            onChange={e => setStates({post: e.target.value})}
                        />
                        <button type="submit">삽입하기</button>
                    </form>
                    <button onClick={onClickButton}>데이터 보기</button>
                    <button onClick={onClickDeleteButton}>모든 데이터 삭제</button>
                    <p>
                        {state.responseToPost}
                    </p>
                </header>
            </div>
        </>
    );
}

export default Appp;
