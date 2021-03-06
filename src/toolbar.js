/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class Toolbar extends Component {

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { doInsert, buttons } = this.props;

		return (
			<>
				{ buttons.map(button => <button type="button" className='button' style={{ "margin-top": "10px", "margin-right": "4px" }} key={ button } onMouseDown={ doInsert }> { button } </button>) }
			</>
		);
	}
}

export default Toolbar;
