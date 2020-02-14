export default {
    title: 'Sub Nav',
    name: 'subNav',
    type: 'object',
    fields: [
        {
            title: 'Focus Link List',
            name: 'focusLinkList',
            type: 'array',
            of: [{type: 'focusLinkListItem'}]
        },
        {
            title: 'Minor Link List',
            name: 'minorLinkList',
            type: 'array',
            of: [{ type: 'minorLinkListItem'}]
        }
    ]
}