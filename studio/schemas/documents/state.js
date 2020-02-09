export default {
  name: 'state',
  title: 'State',
  type: 'document',
  fields: [
    {
      name: 'playwellStateId',
      title: 'Playwell State ID',
      description: 'State ID used to map to Playwell API data.',
      type: 'string',
      hidden: true
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string'
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
  ]
}