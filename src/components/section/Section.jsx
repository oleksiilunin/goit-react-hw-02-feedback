import PropTypes from 'prop-types';

import { SectionTitle } from './Section.styled';
import { SectionWrapper } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;
