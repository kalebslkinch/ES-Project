import React, { useEffect } from 'react'
import cookie from 'js-cookie'
import { useInView } from 'react-intersection-observer'
import Header from './../components/home/Header'
import prisma from '../lib/prisma'
import WWOContent from '../components/home/whatweoffer/WWOContent'

const Index = ({
	testimonials
}: {
	testimonials: {
		id: string
		name: string
		image: string
		message: string
	}[]
}) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
		triggerOnce: true
	})

	const checkCookie = async () => {
		if (cookie.get('OrderDone') !== (undefined || null)) {
			cookie.remove('OrderDone')
		} else {
			return
		}
		return
	}

	useEffect(() => {
		checkCookie()
	}, [])

	return (
		<div className="overflow-hidden bg-gradient-to-r from-pink-400 via-green-300 to-blue-400">
			<Header />
			<div ref={ref} className="flex w-screen items-center justify-center bg-[#f7f7f5] py-6 lg:py-16 ">
				<WWOContent testimonials={testimonials} inView={inView} />
			</div>
		</div>
	)
}

export default Index

export const getStaticProps = async () => {
	const testimonials = await prisma.testimonials.findMany()
	return {
		props: {
			testimonials
		}
	}
}
