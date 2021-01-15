import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({ profile: { education } }) => {
	return (
		<div class="profile-edu bg-white p-2">
			<h2 class="text-primary">Education</h2>
			{education.length > 0 ? (
				<Fragment>
					{education.map((edu) => {
						return (
							<div key={edu._id}>
								<h3>{edu.school}</h3>
								<p>
									<Moment date={edu.from} format="MMM YYYY" /> -{' '}
									{!edu.current ? (
										<Moment date={edu.to} format="MMM YYYY" />
									) : (
										'Now'
									)}
								</p>
								<p>
									<strong>Degree:</strong> {edu.degree}
								</p>
								<p>
									<strong>Field of Study:</strong> {edu.fieldofstudy}
								</p>
								{edu.description && (
									<p>
										<strong>Description:</strong>
										{edu.description}
									</p>
								)}
							</div>
						);
					})}
				</Fragment>
			) : (
				<h4>No education credentials</h4>
			)}
		</div>
	);
};

ProfileEducation.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
