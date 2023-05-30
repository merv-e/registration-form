import "./UI/Buttons.css";

const Buttons = props => {

  return (
    <div className="btn">
        <button 
          type="text"
          onClick={props.prev}
          disabled={props.progress === 1}
        >Prev
        </button>
    {
      props.progress !== 4 
      ? (
          <button 
            type="text"
            onClick={props.next}
            disabled={props.progress === 4}
          >
            Next
          </button>
      )
      : (
          <button
            type="submit"
            className="register-btn"
          >Register   
          </button>
      )
    }
    </div>
  );
}

export default Buttons