import type { Config } from '../../payload/payload-types'

import payload from 'payload'

export const fetchDoc = async <T>(args: {
  collection: keyof Config['collections']
  slug?: string
  id?: string
  draft?: boolean
}): Promise<T> => {
  const { collection, slug } = args || {}

  // if (!queryMap[collection]) throw new Error(`Collection ${collection} not found`)

  // let token: RequestCookie | undefined

  // if (draft) {
  //   const { cookies } = await import('next/headers')
  //   token = cookies().get(payloadToken)
  // }

  const doc: T = await payload
    .find({
      collection,
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    ?.then(res => {
      return res.docs[0]
    })

  return doc
}
