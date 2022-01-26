import { useState, useContext } from "react";

const Form = () =>
{
  const [ __date, setDate ] = useState( `` );

  const [ __title, setTitle ] = useState( `` );

  const [ __description, setDescription ] = useState( `` );

  const [ __color, setColor ] = useState( `` );

  const [message, setMessage] = useState( `` );

  const submitHandler = e =>
  {
    e.preventDefault();

    let err = []

    if ( __date == '' ) err.push( "Please enter a valid date! {dd-mm-yyyy}" );

    if ( __title == '' ) err.push( "Please enter a title for your event!" );

    if ( __description == '' ) err.push( "Please enter a description to the event" );

    if ( __color == '' ) err.push( "Please enter a valid color (value)!" );

    if ( err ) setMessage ( [ ...err ] );
  	
  	return;

  }

  return (
    <form className="pageStyles.form">
      <input
      	type="text"
      	className="pageStyles.textInput"
      	name="date"
      	id="date"
      	placeholder="12-10-1989" 
      	onChange={e => setDate( e.target.value )}
      />
      <input
      	type="text"
      	className="pageStyles.textInput"
      	name="title"
      	id="title"
      	placeholder="Afspraak" 
      	onChange={e => setTitle( e.target.value )}
      />
      <input
      	type="text"
      	className="pageStyles.textInput"
      	name="description"
      	id="description"
      	placeholder="Beschrijving" 
      	onChange={e => setDescription( e.target.value )}
      />
      <input
      	type="text"
      	className="pageStyles.textInput"
      	name="color"
      	id="color"
      	placeholder="Red"
      	onChange={e => setColor( e.target.value )}
      />
      {/*{message != '' && <div className="message">{message}</div>}*/}
      {message != '' && message.map( ( line, i ) => <div key={i} className={message}>{line}</div> )}
      <button className="pageStyles.submitButton" onClick={e => submitHandler( e )}>
        Create Event
      </button>
    </form>
  );
};

export default Form;
