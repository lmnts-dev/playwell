export default {
    title: 'Site Metadata',
    name: 'siteMetadata',
    type: 'object',
    fields: [
        {
            title: 'Site Title',
            name: 'siteTitle',
            type: 'string'
        },
        {
            title: 'Site Title Short',
            name: 'siteTitleShort',
            type: 'string'
        },
        {
            title: 'Site Description',
            name: 'siteDescription',
            type: 'string'
        },
        {
            title: 'Site Base Keywords',
            name: 'siteBaseKeywords',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
        {
            title: 'Site URL',
            name: 'siteUrl',
            type: 'url'
        },
        {
            title: 'Theme Color',
            name: 'themeColor',
            type: 'string'
        },
        {
            title: 'Secondary Color',
            name: 'secondaryColor',
            type: 'string'
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'string'
        },
        {
            title: 'Path Prefix',
            name: 'pathPrefix',
            type: 'string'
        },
        {
            title: 'Logo',
            name: 'logo',
            type: 'image'
        },
        {
            title: 'Logo Light',
            name: 'logoLight',
            type: 'image'
        },
        {
            title: 'Logo Dark',
            name: 'logoDark',
            type: 'image'
        },
        {
            title: 'Social',
            name: 'social',
            type: 'social'
        },
    ]
}