export default {
  name: 'county',
  title: 'County',
  type: 'document',
  __experimental_actions: [
    'update',
    'publish'
  ],
  fields: [
    {
      title: 'County ID',
      name: 'countyId',
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
      title: 'Cost Code',
      name: 'costCode',
      type: 'reference',
      to: [{type: 'costCode'}],
      hidden: true
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}