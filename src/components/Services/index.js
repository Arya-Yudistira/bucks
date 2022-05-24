import React from 'react'
import icon1 from '../../images/svg-1.svg'
import icon2 from '../../images/svg-4.svg'
import icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon1}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We Help Reduce your fees and increase your revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon2}/>
                <ServicesH2>Mobile Banking</ServicesH2>
                <ServicesP>We Help Reduce your fees and increase your revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon3}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We Help Reduce your fees and increase your revenue</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services