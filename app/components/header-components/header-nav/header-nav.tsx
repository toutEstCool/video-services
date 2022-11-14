'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './header-nav.module.scss'

import { HiChevronDown } from 'react-icons/hi'

export default function HeaderNav() {
	const navSortList = [
		{ path: '/', title: 'Главная' },
		{ title: 'Направления' },
	]

	const [activeNavItem, setActiveNavItem] = useState(0)

	return (
		<ul>
			{navSortList.map((obj, i) => (
				<li
					onClick={() => setActiveNavItem(i)}
					className={activeNavItem === i ? styles.active : ''}
				>
					{obj.path ? <Link href={obj.path}>{obj.title}</Link> : obj.title}
				</li>
			))}
		</ul>
	)
}
