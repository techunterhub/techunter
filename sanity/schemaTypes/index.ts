import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockTypeContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType],
}