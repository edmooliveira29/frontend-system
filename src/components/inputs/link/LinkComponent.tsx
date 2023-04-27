import * as React from 'react';
import Link from '@mui/material/Link';

const preventDefault = (event: React.SyntheticEvent) => {
	event.preventDefault();
};

export function LinkComponent(props: {hrefLink: string; text?: string; size?: number}) {
	return (
		<Link
			href={props.hrefLink}
			underline='hover'
			fontSize={props.size}
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				typography: 'body1',
				'& > :not(style) + :not(style)': {
					ml: 5,
				},
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '8px 5px',
			}}
			onClick={preventDefault}
		>
			{props?.text}
		</Link>
	);
}
