import PropTypes, {arrayOf} from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<ul className="feedback__list">
			{options.map(option => {
				return (
					<li key = {option}>
						<button
							key = {option}
							className = "feedback__button"
							data-rating = {option}
							onClick = {onLeaveFeedback}
						>
							{option}
						</button>
					</li>
					)
				}
			)}
		</ul>
	)
}

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;