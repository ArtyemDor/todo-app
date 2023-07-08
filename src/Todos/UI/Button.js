import styles from './Button.module.css'

const Button = ({ children, title, onClick, disabled = false }) => {
	return (
		<button
			title={title}
			className={styles.button}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
