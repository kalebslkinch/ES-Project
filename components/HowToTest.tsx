import { FC, useState } from 'react'
import { Row } from './EasyComponents/Flex'
import Check from './svg/Check'
import Copy from './svg/Copy'

const HowToTest: FC<{ title: string; information: string }> = ({ title, information }) => {
	const [done, setDone] = useState(false)

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text)

		setDone(true)

		setTimeout(() => {
			setDone(false)
		}, 2000)
	}

	return (
		<Row className="group space-x-2">
			<>
				<span>{title}</span>

				<button onClick={() => copyToClipboard(information)} className="text-blue-600">
					{information}
				</button>

				{!done && <Copy className="h-6 w-6 text-white  group-hover:text-black" />}

				{done && <Check className="h-6 w-6 text-green-700" />}
			</>
		</Row>
	)
}

export default HowToTest
