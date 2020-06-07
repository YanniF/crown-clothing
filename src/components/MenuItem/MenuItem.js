import React from 'react';

import './menuItem.scss';

const MenuItem = ({ section }) => {
	return (
		<div className={`menu-item ${section.size || ''}`}>
			<div className="background-image" style={{ backgroundImage: `url(${section.imageUrl})` }} />
			<div className="content">
				<h2 className="title">{section.title.toUpperCase()}</h2>
				<div className="subtitle">SHOP NOW</div>
			</div>
		</div>
	);
};

export default MenuItem;
