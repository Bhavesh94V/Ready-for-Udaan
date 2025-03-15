import React from 'react'
import AboutUs from './AboutUs'
import Service from './Service'
import AboutArea from './AboutArea '
import LogosSection from './LogosSection '
import Blog from './Blog'
import Testimonial from './Testimonial'
import CounterSection from './CounterSection'
import VerticalSlider from './VerticalSlider'

export default function HomePage() {
    return (
        <div>
            <VerticalSlider></VerticalSlider>
            <AboutUs></AboutUs>
            <Service></Service>
            <CounterSection></CounterSection>
            <AboutArea></AboutArea>
            <LogosSection></LogosSection>
            <Blog></Blog>
            <Testimonial></Testimonial>
        </div>
    )
}
