export default {
    name: 'primaryNavItem',
    title: 'Primary Navigation Item',
    type: 'object',
    fields: [
        {
            title: 'Route',
            name: 'route',
            type: 'string'
        },
        {
            title: 'Label',
            name: 'label',
            type: 'string'
        },
        {
            title: 'Theme',
            name: 'theme',
            type: 'theme',
        },
        {
            title: 'Sub Nav Item',
            name: 'subNav',
            type: 'subNav',
        }
    ]
}