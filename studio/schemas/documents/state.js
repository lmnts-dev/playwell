export default {
  name: 'state',
  title: 'State',
  type: 'document',
  __experimental_actions: [
    'update',
    'publish'
  ],
  fields: [
    {
      title: 'State ID',
      name: 'stateId',
      type: 'string',
      hidden: true
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      hidden: true
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
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
      of: [
        {
          type: 'reference',
          to: [{type: 'county'}]
        }
      ],
      hidden: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'coverImage'
    },
  }
}