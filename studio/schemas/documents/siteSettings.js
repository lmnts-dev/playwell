export default {
    title: 'Site Settings',
    name: 'siteSettings',
    type: 'document',
    fields: [
        {
            title: 'Site Navigation',
            name: 'nav',
            type: 'nav'
        },
        {
            title: 'Site Metadata',
            name: 'siteMetadata',
            type: 'siteMetadata'
        }
    ],
    preview: {
        select: {
            title: 'siteMetadata.siteTitle'
        }
    }
}