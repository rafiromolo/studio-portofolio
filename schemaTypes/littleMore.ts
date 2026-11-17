import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'littleMore',
  title: 'Little More',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Topic',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categorySlug',
      title: 'Category slug',
      type: 'string',
      //   options: {source: 'category'},
    }),
    defineField({
      name: 'categoryDescription',
      title: 'Category description',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order within category',
      type: 'number',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'categoryColor',
      title: 'Category Color',
      type: 'object',
      fields: [
        {
          name: 'background',
          title: 'Background Color',
          type: 'string',
          validation: (Rule) =>
            Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
              name: 'hex color',
            }),
        },
        {
          name: 'foreground',
          title: 'Foreground Color',
          type: 'string',
          validation: (Rule) =>
            Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
              name: 'hex color',
            }),
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
})
