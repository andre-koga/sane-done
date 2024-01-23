import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'code',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
