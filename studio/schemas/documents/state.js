export default {
  name: 'state',
  title: 'State',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      hidden: true
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Subheadline',
      name: 'subheadline',
      type: 'string'
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'image'
    },
    {
      title: 'Counties',
      name: 'counties',
      type: 'array',
      of: [{type: 'county'}]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}