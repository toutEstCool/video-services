import Image from 'next/image'
import HeaderAlerts from './components/header-components/header-alerts/header-alerts'
import HeaderInput from './components/header-components/header-input/header-input'
import HeaderNav from './components/header-components/header-nav/header-nav'
import HeaderProfile from './components/header-components/header-profile/header-profile'

export default function Header() {
	return (
		<header>
			<Image
				src='https://i.ibb.co/YTGhYPG/original-8f5e2c223c5b890a976c143e03ce4a57-1.jpg'
				height={23}
				width={25}
				alt='Logo'
			/>
			<HeaderNav />
			<HeaderInput />
			<HeaderAlerts />
			<HeaderProfile />
		</header>
	)
}
