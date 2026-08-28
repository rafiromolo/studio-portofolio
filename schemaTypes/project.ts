import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Judul Project',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'coverImage',
            title: 'Gambar Sampul',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Deskripsi Singkat',
            type: 'text',
            rows: 3,
            description: 'Muncul di card projects',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'body',
            title: 'Deskripsi Project',
            type: 'array',
            of: [
                {type: 'block'},
                {type: 'image', options: {hotspot: true}},
            ],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Tanggal Publish',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'tech',
            title: 'Technology',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'liveUrl',
            title: 'Live URL',
            type: 'url',
        }),
    ],
    preview: {
        select: {title: 'title', media: 'coverImage', subtitle: 'publishedAt'},
    }
})