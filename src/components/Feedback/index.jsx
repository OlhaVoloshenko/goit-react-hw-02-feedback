import { Options } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function Feedback({ options, leaveFeedback }) {
  return (
    <>
      {options.map((option, id) => (
        <Options type="button" key={id} name={option} onClick={leaveFeedback}>
          {option}
        </Options>
      ))}
    </>
  );
}
Feedback.propTypes = {
  options: PropTypes.array,
  leaveFeedback: PropTypes.func,
};
