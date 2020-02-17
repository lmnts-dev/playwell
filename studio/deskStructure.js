import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdViewList from 'react-icons/lib/md/view-list'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
          .title('States')
          .icon(MdViewList)
          .schemaType('state')
          .child(S.documentTypeList('state').title('States')
      ),
      S.listItem()
        .title('Counties by State')
        .icon(MdViewList)
        .child(
          S.documentTypeList('state')
            .title('Counties by State')
            .child(stateId =>
              S.documentList()
                .title('Counties')
                .filter('_type == "county" && _id in *[_type == "state" && _id == $stateId][0]{"counties": counties[]._ref}.counties')
                .params({stateId})
            )
        ),
        S.listItem()
        .title('Cost Codes by State')
        .icon(MdViewList)
        .child(
          S.documentTypeList('state')
            .title('Cost Codes by State')
            .child(stateId =>
              S.documentList()
                .title('Cost Codes')
                .filter('_type == "costCode" && _id in *[_type == "county" && _id in *[_type == "state" && _id == $stateId][0]{"counties": counties[]._ref}.counties].costCode._ref')
                .params({stateId})
            )
        ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'state', 'county', 'costCode'].includes(listItem.getId()))
    ]
    )