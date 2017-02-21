/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';

/**
 * The internal dependencies.
 */
import AssociationListItem from 'fields/components/association/list-item';

/**
 * Render a list of item that can be associated.
 *
 * @param  {Object}        props
 * @param  {String}        props.prefix
 * @param  {Object[]}      props.items
 * @param  {Number[]}      props.associated
 * @param  {Function}      props.onItemClick
 * @return {React.Element}
 */
export const AssociationList = ({ prefix, items, associated, visible, onItemClick }) => {
	return <ul className="carbon-relationship-list">
		{
			items.map((item, index) => {
				return <AssociationListItem
					key={index}
					prefix={prefix}
					index={index}
					item={item}
					associated={associated}
					visible={visible}
					onClick={onItemClick} />
			})
		}
	</ul>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
AssociationList.propTypes = {
	prefix: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	associated: PropTypes.bool,
	visible: PropTypes.bool,
	onItemClick: PropTypes.func.isRequired,
};

/**
 * The default values.
 *
 * @type {Object}
 */
AssociationList.defaultProps = {
	prefix: '',
	selected: [],
	associated: false,
	visible: true,
};

export default AssociationList;
