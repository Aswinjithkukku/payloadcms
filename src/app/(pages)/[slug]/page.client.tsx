'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { Blocks } from '../../_components/Blocks'
import { Page } from '../../../payload/payload-types'

const PageTemplate: React.FC<{ page: Page }> = ({ page }) => {
  const { data } = useLivePreview({
    serverURL: 'http://localhost:3000',
    depth: 2,
    initialData: page,
  })

  return (
    <React.Fragment>
      {/* <Hero {...hero} /> */}
      <Blocks
        blocks={data.layout}
        disableTopPadding={
          !data?.hero || data?.hero?.type === 'none' || data?.hero?.type === 'lowImpact'
        }
      />
    </React.Fragment>
  )
}

export default PageTemplate
