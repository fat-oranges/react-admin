import ContentMain from '@/components/content-main'
import ContentTop from '@/components/content-top'
import React, { memo } from 'react'
import { ContentWrapper } from './style'


const Content = memo(() => {
  return (
    <ContentWrapper className='main-content'>
      <ContentTop/>
      <ContentMain/>
    </ContentWrapper>
  )
})

export default Content