import { FC } from 'react'

const Percentage: FC<{ percentage: number }> = ({ percentage }) => {
	return <p className="fixed text-5xl">{`Percentage scrolled: ${percentage.toPrecision(2)}`} </p>
}
export default Percentage
