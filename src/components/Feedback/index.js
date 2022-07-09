import { Options } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function Feedback({ options, LeaveFeedback }) {
  return (
    <>
      {options.map((opt, idx) => (
        <Options type="button" key={idx} name={opt} onClick={LeaveFeedback}>
          {opt}
        </Options>
      ))}
    </>
  );
}
Feedback.propTypes = {
  options: PropTypes.array,
  LeaveFeedback: PropTypes.func,
};
