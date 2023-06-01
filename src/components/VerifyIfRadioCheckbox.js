import RadioCheckbox from "./RadioCheckbox";
import { questions } from "./helpers";

const VerifyIfRadioCheckbox = (props) => {
  return (
    <>
      {questions
        .filter((q) => q.progressNo === props.progress)
        .map((question) => (
          <RadioCheckbox
            id={question.id}
            name={question.name}
            progressNo={question.progressNo}
            values={question.values}
          />
        ))}
    </>
  );
};

export default VerifyIfRadioCheckbox;


