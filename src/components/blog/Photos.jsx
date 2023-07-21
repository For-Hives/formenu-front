import image1 from '/public/food.png'
import image2 from '/public/food_2.png'
import image3 from '/public/food_3.png'
import image4 from '/public/food_4.png'
import image5 from '/public/food_5.png'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export default function Photos() {
	let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image, imageIndex) => (
					<div
						key={image.src}
						className={clsx(
							'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-slate-100 sm:w-72 sm:rounded-2xl',
							rotations[imageIndex % rotations.length]
						)}
					>
						<Image
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	)
}
