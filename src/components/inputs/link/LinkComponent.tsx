import * as React from 'react';
import { Link } from 'react-router-dom'

export function LinkComponent(props: {onClick: string; text?: string; size?: number}) {
	return (
		<Link
			to=''
			style={{
				fontSize: '10px !important',
				display: 'flex',
				flexWrap: 'wrap',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '8px 5px',
				
			}}
		>
			{props?.text}
		</Link>
	);
}
