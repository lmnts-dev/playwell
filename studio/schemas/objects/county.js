export default {
  name: 'county',
  title: 'County',
  type: 'object',
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
      title: 'Cost Code',
      name: 'costCode',
      type: 'reference',
      to: [{type: 'costCode'}]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}