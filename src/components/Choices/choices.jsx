import "./styles.css";

const Choices = () => {
  // if button is clicked, store correct/incorrect as a boolean. have an array state...start w/ 0, add 1 when it is right, subtract 1 when incorrect

  const clickedButton1 = () => {
    return console.log(`you clicked #1`);
  };

  const clickedButton2 = () => {
    return console.log(`you clicked #2`);
  };

  const clickedButton3 = () => {
    return console.log(`you clicked #3`);
  };

  const clickedButton4 = () => {
    return console.log(`you clicked #4`);
  };
  return (
    <div className="question">
      This is going to be a question......?
      <div className="answers-group">
        <button className="answers-1" onClick={clickedButton1}>
          answer 1
        </button>
        <button className="answers-2" onClick={clickedButton2}>
          answer 2
        </button>
        <button className="answers-3" onClick={clickedButton3}>
          answer 3
        </button>
        <button className="answers-4" onClick={clickedButton4}>
          answer 4
        </button>
      </div>
    </div>
  );
};

export default Choices;
