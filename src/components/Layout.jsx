import parse, { domToReact } from 'html-react-parser'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const options = {
    replace: domNode => {
        if (domNode?.type === 'tag') {
            const { name, attribs } = domNode

            if (name === 'img') {
                const { src, alt, width, height } = attribs
                return <Image src={src} alt={alt} width={500} height={500} />
            }

            if (name === 'a') {
                const { href } = attribs
                return (
                    <Link href={href} className={'underline'}>
                        {domToReact(domNode.children, options)}
                    </Link>
                )
            }
        }

        return domNode
    },
}

export function Layout({ className, value }) {
    const parsedContent = parse(value, options)

    return (
        <div className={`${className ?? ''} layout-custom`}>{parsedContent}</div>
    )
}
