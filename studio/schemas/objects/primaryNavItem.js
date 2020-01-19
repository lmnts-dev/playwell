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
        },
        {
            title: 'Sub Nav Item',
            name: 'subNav',
            type: 'object',
            fields: [
                {
                    title: 'Focus Link List',
                    name: 'focusLinkList',
                    type: 'array',
                    of: [{
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
                                title: 'Focus',
                                name: 'focus',
                                type: 'boolean'
                            }
                        ]
                    }]
                },
                {
                    title: 'Minor Link List',
                    name: 'minorLinkList',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            {
                                title: 'Route',
                                name: 'route',
                                type: 'string',
                            },
                            {
                                title: 'Label',
                                name: 'label',
                                type: 'string'
                            },
                            {
                                title: 'Subheading',
                                name: 'subhead',
                                type: 'boolean'
                            }
                        ]
                    }]
                }
            ]
        }
    ]
}