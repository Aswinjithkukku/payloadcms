import type { Block, Field } from 'payload/types'

export const validateHexColor = (value: string) => {
  if (typeof value !== 'string') {
    return `${value} is not a valid hex color`
  }

  const isValidHex = /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)

  return isValidHex || `${value} is not a valid hex color`
}

const textTypeFields: Field[] = [
  {
    name: 'backgroundColor',
    label: 'Background Color',
    type: 'text',
    validate: validateHexColor,
  },
  {
    name: 'heroLightHeading',
    label: 'Light Heading',
    type: 'text',
    required: true,
  },
  {
    name: 'heroMainHeading',
    label: 'Main Heading',
    type: 'text',
    required: true,
  },
  {
    name: 'heroDescription',
    label: 'Description',
    type: 'text',
  },
  {
    name: 'buttonLabel',
    label: 'Button Label',
    type: 'text',
  },
]

const imageTypeFields: Field[] = [
  {
    name: 'backgroundColor',
    label: 'Background Color',
    type: 'text',
    validate: validateHexColor,
  },
  {
    name: 'primaryImage',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'secondaryImage',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'text',
    label: 'Text',
    type: 'text',
  },
]

const columnFields: Field[] = [
  {
    name: 'typeOfHeroSection',
    label: 'Type Of Hero',
    type: 'select',
    options: [
      {
        value: 'textType',
        label: 'Text Version',
      },
      {
        value: 'imageType',
        label: 'Image Version',
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
      condition: (_, data) => data?.typeOfHeroSection === 'textType',
    },
    fields: textTypeFields,
  },
  {
    name: 'imageFields',
    label: 'Section',
    type: 'group',
    admin: {
      condition: (_, data) => data?.typeOfHeroSection === 'imageType',
    },
    fields: imageTypeFields,
  },
]

export const HeroBlock: Block = {
  slug: 'heroBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
      maxRows: 2
    },
  ],
}
