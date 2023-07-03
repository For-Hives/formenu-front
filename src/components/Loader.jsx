import React from 'react'

function Loader(props) {
	return (
		<>
			<div className={'relative h-screen w-screen overflow-hidden bg-white'}>
				<div className="loader">
					<span className="dot"></span>
					<div className="dots">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Loader
