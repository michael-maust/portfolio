export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
      rows: '10',
    },

    {
      name: 'expandedDescription',
      title: 'Expanded Description',
      type: 'string',
      rows: '10',
    },

    {
      name: 'demoLink',
      title: 'Demo Link',
      type: 'string',
    },

    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },

    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ["work-in-progress", "no-code", "finished", "featured"]
      }

    },

    
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'string',
    },
   
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'LL',
    calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },

    



  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
