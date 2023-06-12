import * as React from 'react'
import Link from '@mui/material/Link'

const preventDefault = (event: React.SyntheticEvent) => {
	event.preventDefault()
}

export function LinkComponent(props: { hrefLink: string; text?: string; size?: string, alingment?: string }) {
	return (
		<Link
			display='flex'
			flexWrap='wrap'
			href={props.hrefLink}
			underline='hover'
			fontSize={props.size}
			color='#666666'
			flexDirection='row'
			justifyContent='center'
			alignItems='center'

			onClick={preventDefault}
		>
			{props?.text}
		</Link>
	)
}
