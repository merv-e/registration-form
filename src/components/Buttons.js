import "./UI/Buttons.css";

const Buttons = ({onSubmit}) => {
  return (
    <div className="btn">
      <button>Prev</button>
      <button 
       onClick={onSubmit}
      >Next
      </button>
    </div>
  );
}

export default Buttons