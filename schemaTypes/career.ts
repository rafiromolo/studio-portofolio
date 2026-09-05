import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'career',
    title: 'Career',
    type: 'document',
    fields: [
        // defineField({
        //     name: 'slug',
        //     title: 'Slug',
        //     type: 'string',
        //     validation: (Rule) => Rule.required(),
        // }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'period',
            title: 'Period',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isCurrent',
            title: 'Masih Bekerja?',
            type: 'boolean',
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{type: 'block'}],
        }),
    ]
})