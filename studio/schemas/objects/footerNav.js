export default {
    title: 'Footer Nav',
    name: 'footerNav',
    type: 'object',
    fields: [
        {
            title: 'Link List',
            name: 'linkList',
            type: 'array',
            of: [{type: 'footerNavItem'}]
        }
    ]
}