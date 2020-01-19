export default {
    name: 'navItem',
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
            type: 'object',
            fields: [
                {
                    title: 'Primary Color',
                    name: 'primaryColor',
                    type: 'string'
                },
                {
                    title: 'Active Color',
                    name: 'activeColor',
                    type: 'string'
                }
            ]
        }
    ]
}