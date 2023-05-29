import "./UI/Buttons.css";

const Buttons = props => {

  return (
    <div className="btn">
      <button 
       onClick={props.prev}
       disabled={props.progress === 1}
      >
        Prev
      </button>

      <button
        onClick={props.next}
        disabled={props.progress === 4}
      >
        Next
      </button>
    </div>
  );
}

export default Buttons