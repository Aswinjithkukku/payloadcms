import richText from '../../fields/richText'
import { Block, Field } from 'payload/types'

const textTypeFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'underline',
    label: 'Need underline?',
    type: 'checkbox',
    defaultValue: true,
  },
]

const badgeTypeFields: Field[] = [
  {
    name: 'badgeNumber',
    label: 'Number on Badge',
    type: 'number',
    required: true,
  },
  {
    name: 'heading',
    label: 'Head Title',
    type: 'text',
  },
  {
    name: 'description',
    label: 'Description',
    type: 'text',
  },
]

const columnFields: Field[] = [
  {
    name: 'typeOfSection',
    label: 'Type of section',
    type: 'select',
    options: [
      {
        value: 'textType',
        label: 'Text Version',
      },
      {
        value: 'badgeType',
        label: 'Badge Version',
      },
    ],
    defaultValue: 'textType',
    required: true,
  },
  {
    name: 'textFields',
    label: 'Section',
    type: 'group',
    admin: {
      condition: (_, data) => data?.typeOfSection === 'textType',
    },
    fields: textTypeFields,
  },
  {
    name: 'badgeFields',
    label: 'Section',
    type: 'group',
    admin: {
      condition: (_, data) => data?.typeOfSection === 'badgeType',
    },
    fields: badgeTypeFields,
  },
  {
    name: 'keyPoints',
    type: 'array',
    minRows: 3,
    maxRows: 3,
    fields: [
      richText(),
      {
        name: 'icon',
        type: 'upload',
        relationTo: 'icons',
        required: true,
      },
    ],
  },
]

export const PromotionBlock: Block = {
  slug: 'promotionBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
      maxRows: 2
    },
  ],
}
