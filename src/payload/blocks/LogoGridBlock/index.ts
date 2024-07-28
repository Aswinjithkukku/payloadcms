import type { Block } from 'payload/types'

export const LogoGridBlock: Block = {
  slug: 'logoGridBlock',
  fields: [
    {
      name: 'logos',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'partnerLogos',
          required: true,
        },
      ],
    },
  ],
}
