import { useState } from "react";

const Hns = () =>
{
  const [ namespace, setNamespace ] = useState( `` )

  const [ message, setMessage ] = useState( `` )

  const resolve = e =>
  {
    e.preventDefault()

    if ( !namespace || namespace == '' ) 
    {
      setMessage('Could not find the requested name :(');

    }
    else 
    {
      location.href = `https://${namespace}.hns.is/`

    }
  
  }

  return (
    <>
    <form className="resolver">
      <input type="text" name="namespace" placeholder="Enter a handshake name (e.g. welcome.nb)" onChange={e => setNamespace( e.target.value )} />
      {message != '' && <div className="message">{message}</div>}
      <button className="btn" onClick={e => resolve( e )}>
        Go To
      </button>
    </form>
    <style>
    {`
      .resolver {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        width: 50vw;
        border: 1px solid rgba(0, 0, 0, 0.02);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
      }
    `}
    </style>
    </>
  )

}

export default Hns;