export default {
    title: 'Primary Nav',
    name: 'primaryNav',
    type: 'object',
    fields: [
        {
            title: 'Link List',
            name: 'linkList',
            type: 'array',
            of: [{type: 'primaryNavItem'}]
        }
    ]
}