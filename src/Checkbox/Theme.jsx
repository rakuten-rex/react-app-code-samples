import React from 'react';
import Checkbox from '@rakuten-rex/checkbox';

export default function MyComponent() {
	return (
		<Checkbox
			id="theme-default"
			label="rabbit"
			name="pet"
			value="rabbit"
			style={{
				'--rex-checkbox-theme': '#CB0085',
				'--rex-checkbox-border': '#830056',
				'--rex-checkbox-label': '#A2006A',
				'--rex-checkbox-checked-label': '#5A003C',
				'--rex-checkbox-checked-border': '#CB0085',
				'--rex-checkbox-disabled-label': '#828282',
				'--rex-checkbox-disabled-border': '#686868',
				'--rex-checkbox-margin-top': '.5rem',
				'--rex-checkbox-margin-right': '3rem',
				'--rex-checkbox-margin-bottom': '.5rem',
				'--rex-checkbox-margin-left': '0rem'
			}}
		/>
	);
}
