export default {
  name: 'costCode',
  title: 'Cost Code',
  type: 'document',
  __experimental_actions: [
    'update',
    'publish'
  ],
  fields: [
    {
      title: 'Cost Code ID',
      name: 'costCodeId',
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
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'coverImage'
    }
  }
}