import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ profile: { experience } }) => {
	return (
		<div class="profile-exp bg-white p-2">
			<h2 class="text-primary">Experiences</h2>
			{experience.length > 0 ? (
				<Fragment>
					{experience.map((exp) => {
						return (
							<div key={exp._id}>
								<h3>{exp.company}</h3>
								<p>
									<Moment date={exp.from} format="MMM YYYY" /> -{' '}
									{!exp.current ? (
										<Moment date={exp.to} format="MMM YYYY" />
									) : (
										'Now'
									)}
								</p>
								<p>
									<strong>Position:</strong> {exp.title}
								</p>
								{exp.description && (
									<p>
										<strong>Description:</strong>
										{exp.description}
									</p>
								)}
							</div>
						);
					})}
				</Fragment>
			) : (
				<h4>No experience credentials</h4>
			)}
		</div>
	);
};

ProfileExperience.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileExperience;
