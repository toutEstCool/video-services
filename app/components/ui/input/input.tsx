import { FC } from 'react'
import { IInputProps } from './inputProps'
import styles from './input.module.scss'

export const Input: FC<IInputProps> = ({
	placeholder,
	type,
	...props
}: IInputProps) => {
	return (
		<input
			className={styles.input}
			{...props}
			placeholder={placeholder}
			type={type}
		/>
	)
}
