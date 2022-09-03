import "./styles.css";

const Choices = () => {
  // if button is clicked, store correct/incorrect as a boolean. have an array state...start w/ 0, add 1 when it is right, subtract 1 when incorrect
  // once answered, display next question
  // idea: maybe make animation as next question appears?

  // const correctCount = 0;
  // const incorrectCount = 0;
  // const [quizComplete, setQuizComplete] = useState(false)

  const questions = [
    {
      question:
        "How many whiskers does the average cat have on each side of its face?",
      answers: [12, 4, 6, 10],
      correctAnswerIndex: 0,
      id: 1,
    },
    {
      question: "When does a cat purr?",
      answers: [
        "When it cares for it's kittens",
        "When it feels content",
        "When it needs comfort",
        "All of the above",
      ],
      correctAnswerIndex: 3,
      id: 2,
    },
    {
      question: "What is the average number of kittens in a litter?",
      answers: ["1 to 2", "3 to 5", "8 to 10", "12 to 14"],
      correctAnswerIndex: 1,
      id: 3,
    },
    {
      question: "Which part of a cat is as unique as a human fingerprint?",
      answers: ["Nose Pad", "Paw Pads", "Tongue", "Claws"],
      correctAnswerIndex: 0,
      id: 4,
    },
    {
      question: "A cat can't taste _____ flavors.",
      answers: ["Sour", "Bitter", "Salty", "Sweet"],
      correctAnswerIndex: 3,
      id: 5,
    },
    {
      question: "Are you going to adopt a cat?",
      answers: ["No", "Depends", "Maybe", "hell yes!"],
      correctAnswerIndex: 3,
      id: 6,
    },
    {
      question: "Do you like cats?",
      answers: ["No", "Depends", "Maybe", "hell yes!"],
      correctAnswerIndex: 3,
      id: 7,
    },
  ];

  // Setting the game to start with the first question
  let i = 0;
  // const selectedAnswer =

  // const clickedButton1 = () => {
  //   if (selectedAnswer.indexOf() === questions.correctAnswerIndex) {
  //     return i + 1;
  //   }
  // };

  const clickedButton1 = () => {
    return console.log(`you clicked the button`);
  };

  console.log(questions[0].question);

  // once answer is selected, index number increases.
  return (
    <div className="question">
      {questions[i].question}
      <div className="answers-group">
        {questions[i].answers.map((a) => {
          return (
            <button className="answers-1" onClick={clickedButton1}>
              {a}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Choices;
