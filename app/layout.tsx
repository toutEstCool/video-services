import '../styles/globals.css'
import Header from './heder'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<head />
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
