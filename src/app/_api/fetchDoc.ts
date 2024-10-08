import payload from 'payload'

import type { Config } from '../../payload/payload-types'

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

  const doc = await payload
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
  // @ts-ignore
  return doc
}
