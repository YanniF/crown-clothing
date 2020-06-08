import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItem.scss';

const MenuItem = ({ section, history, match }) => {
	return (
		<div className={`menu-item ${section.size || ''}`} onClick={() => history.push(`${match.url}${section.linkUrl}`)}>
			<div className="background-image" style={{ backgroundImage: `url(${section.imageUrl})` }} />
			<div className="content">
				<h2 className="title">{section.title.toUpperCase()}</h2>
				<div className="subtitle">SHOP NOW</div>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
