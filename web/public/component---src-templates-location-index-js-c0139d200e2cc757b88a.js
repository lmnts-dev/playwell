(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{AKqm:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=a("1ehc"),r=a("su3e"),l=a("gLav"),c=a.n(l),s=a("32fm"),d=c.a.div.withConfig({displayName:"stylesscss__BlockStyle",componentId:"sc-1mjow5g-0"})(["display:flex;flex-direction:",";position:relative;flex-shrink:1;"," "," "," "," .block-content{z-index:2;margin:0 auto;width:100%;",";"," p{max-width:80%;}}.block-img{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;flex-direction:column;"," .img{flex:1;}}"," max-width:",";"," "," "," ",""],(function(e){return e.Flex?e.flex:"column"}),(function(e){return e.BgColor?"background: "+e.BgColor+";":null}),(function(e){return e.TextColor?"color: "+e.TextColor+";":null}),(function(e){return e.AlignItems?"align-items: "+e.AlignItems+";":null}),(function(e){return"centered"==e.Style&&Object(l.css)(["align-items:center;justify-content:center;margin:0 auto;p,h1,h2,h3,h4,h5,h6{text-align:center;width:100%;}.btn{margin:0 auto;}.block-content{display:flex;align-items:center;justify-content:center;flex-direction:column;}"])}),(function(e){return e.JustifyContent?"display:flex":null}),(function(e){return e.JustifyContent?"justify-content: "+e.JustifyContent+";":null}),(function(e){return e.BgTint?"opacity: "+e.BgTint+";":null}),(function(e){return e.Width?"width: "+100*e.Width+"%;":"flex: 1;"}),(function(e){return e.maxWidth?"calc("+s.b.Base.Grid.SiteWidth+" * "+e.maxWidth+")":s.b.Base.Grid.SiteWidth}),(function(e){return e.Padding?"padding-top: calc("+s.a.Size+" * "+e.Padding[0]+");":null}),(function(e){return e.Padding?"padding-right: calc("+s.a.Size+" * "+e.Padding[1]+");":null}),(function(e){return e.Padding?"padding-bottom: calc("+s.a.Size+" * "+e.Padding[2]+");":null}),(function(e){return e.Padding?"padding-left: calc("+s.a.Size+" * "+e.Padding[3]+");":null}));t.a=function(e){var t=e.children,a=e.className,i=e.Style,l=e.maxWidth,c=e.Width,s=e.Padding,m=e.AlignItems,p=e.BgMatch,g=e.BgQuery,h=e.BgAlt,u=e.BgTint,f=e.BgColor,x=e.TextColor,b=e.JustifyContent,w=e.Flex;return n.a.createElement(d,{className:a?a+" block":"block",Width:c,maxWidth:l,Style:i,Padding:s,AlignItems:m||!1,JustifyContent:b||!1,BgTint:u,BgColor:f,TextColor:x,Flex:w},t?n.a.createElement("div",{className:"block-content"},t):null,p?n.a.createElement("div",{className:"block-img-wrap"},n.a.createElement("div",{className:"block-img"},n.a.createElement(o.a,{src:p,AltText:h}))):null,g?n.a.createElement("div",{className:"block-img-wrap"},n.a.createElement("div",{className:"block-img"},n.a.createElement(r.a,{src:g,AltText:h}))):null)}},JM2a:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=a("1ehc"),r=a("uqQr"),l=a("gLav"),c=a.n(l),s=(a("oWnN"),a("32fm")),d=a("jL+2"),m=c.a.div.withConfig({displayName:"stylesscss__LegoListStyles",componentId:"sc-1s06zcz-0"})(["display:flex;flex-direction:row;align-items:flex-start;@media (max-width:","){display:block;max-width:calc("," * 7);margin:0 auto;}.item{text-align:center;margin-right:5%;flex:1;@media (max-width:","){margin-right:0;margin-bottom:calc("," / 2);}&:last-of-type{margin-right:0 !important;margin-bottom:0 !important;}span.ico{width:50%;height:auto;display:block;margin:0 auto;padding-left:10%;max-width:calc("," * 3);svg{width:100% !important;height:auto !important;}}.gatsby-image-wrapper{width:80%;margin:0 auto;margin-bottom:calc("," / 3);}.h6{font-weight:bold;padding:calc("," / 4) 0;}}"],d.a.Media.Width.Md+"px",s.a.Size,d.a.Media.Width.Md+"px",s.a.Size,s.a.Size,s.a.Size,s.a.Size);t.a=function(e){var t=e.blocks;return n.a.createElement(m,null,t.map((function(e,t){return n.a.createElement("div",{className:"item",key:t},e.image&&n.a.createElement(o.a,{src:e.image}),!e.image&&n.a.createElement(r.a,{Name:"basicLego",Color:!!e.legoColor&&e.legoColor}),n.a.createElement("div",{className:"h6"},e.title),n.a.createElement("p",null,e.text))})))}},ckps:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=a("RHEx"),r=a("gLav"),l=a.n(r),c=a("32fm"),s=a("jL+2"),d=a("uqQr"),m=a("Wo+V"),p=l.a.div.withConfig({displayName:"stylesscss__AccordionContainer",componentId:"fn09aa-0"})(["width:100%;"]);p.Inner=l.a.div.withConfig({displayName:"stylesscss__Inner",componentId:"fn09aa-1"})(["display:flex;flex-direction:column;.rotate{transform:rotate(90deg);}"]),p.Icon=l()(d.a).withConfig({displayName:"stylesscss__Icon",componentId:"fn09aa-2"})(["margin-left:auto;transition:transform 0.3s ease;svg{fill:",";}"],(function(e){return e.chevronColor})),p.Accordion=l.a.button.withConfig({displayName:"stylesscss__Accordion",componentId:"fn09aa-3"})(["align-items:center;background:transparent;color:",";cursor:pointer;display:flex;border:none;outline:none;padding:calc("," / 3) calc("," / 4);transition:background-color 0.6s ease;@media (min-width:","){padding:calc("," / 2) calc("," / 3);}&:last-child{margin-bottom:0;}&.active{color:",";}"],(function(e){return e.color}),c.a.Size,c.a.Size,s.a.Media.Width.Md+"px",c.a.Size,c.a.Size,(function(e){return e.colorActive})),p.Content=l()(o.a).withConfig({displayName:"stylesscss__Content",componentId:"fn09aa-4"})(["overflow:hidden;transition:max-height 0.6s ease;border-bottom:1px solid ",";"],(function(e){return e.borderColor})),p.Content.Inner=l.a.div.withConfig({displayName:"stylesscss__Inner",componentId:"fn09aa-5"})(["border-radius:calc("," / 3);margin-bottom:calc("," / 3);"],c.a.Radius,c.a.Size);var g=function(e){var t=e.children,a=e.title,r=e.chevronColor,l=e.color,c=e.borderColor,s=e.colorActive,d=Object(i.useState)(""),m=d[0],g=d[1],h=Object(i.useState)("0px"),u=h[0],f=h[1],x=Object(i.useState)("accordion-icon"),b=x[0],w=x[1],y=Object(i.useRef)(null);return n.a.createElement(p,null,n.a.createElement(p.Inner,null,n.a.createElement(p.Accordion,{className:""+m,onClick:function(){g(""===m?"active":""),f("active"===m?"0px":y.current.scrollHeight+"px"),w("active"===m?"accordion-icon":"accordion-icon rotate")},color:l,colorActive:s},n.a.createElement(o.c,{as:"span",fontWeight:500,fontSize:"1.6rem"},a),n.a.createElement(p.Icon,{Name:"carat",className:""+b,chevronColor:r})),n.a.createElement(p.Content,{ref:y,style:{maxHeight:""+u},borderColor:c},n.a.createElement(p.Content.Inner,null,t))))};g.defaultProps={chevronColor:c.b.Color.Nova,color:Object(m.a)(c.b.Color.Dino,.7),colorActive:c.b.Color.Dino,borderColor:Object(m.a)(c.b.Color.Sunlight,.5)};t.a=g},u00P:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=a("32fm"),r=a("gLav"),l=a.n(r),c=a("jL+2"),s=l.a.div.withConfig({displayName:"stylesscss__SplitSectionStyle",componentId:"bmibis-0"})(["width:100%;margin:0;"]);s.Inner=l.a.div.withConfig({displayName:"stylesscss__Inner",componentId:"bmibis-1"})(["display:flex;flex-direction:",";flex-wrap:wrap;justify-content:center;position:relative;@media (min-width:","){flex-wrap:nowrap;}.h1,.h2{font-weight:600;padding-bottom:calc("," / 3.5);}p{font-weight:500;}.block{justify-content:center;align-items:center;&:first-child{width:100%;@media (max-width:","){",";}@media (max-width:","){",";}@media (max-width:","){",";}@media (min-width:","){width:",";","}}&:last-child{width:100%;@media (max-width:","){",";}@media (max-width:","){",";}@media (max-width:","){",";}@media (min-width:","){width:",";","}}.block-content{max-width:calc("," / 3);width:100%;@media (max-width:","){max-width:none;}p{@media (max-width:","){max-width:none;}}}.block-img-wrap{width:100%;padding-bottom:100%;overflow:hidden;position:relative;.block-img{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100%;height:100%;}}}"],(function(e){return e.Flex?e.Flex:"row"}),c.a.Media.Width.Md+"px",o.a.Size,c.a.Media.Width.Lg+"px",(function(e){return e.Flex?null:"\n          padding-left: 95px;\n          padding-right: 95px;\n        "}),c.a.Media.Width.Md+"px",(function(e){return e.Flex?null:"\n          padding-left: 45px;\n          padding-right: 45px;\n        "}),c.a.Media.Width.Sm+"px",(function(e){return e.Flex?null:"\n          padding-left: 25px;\n          padding-right: 25px;\n        "}),c.a.Media.Width.Md+"px",(function(e){return e.Flex?"calc(50% + ("+o.a.Grid.Gutter.Left+"/ 2))":"calc(50% - ("+o.a.Grid.Gutter.Left+"/ 2))"}),(function(e){return e.Flex?null:"padding-left: calc("+o.a.Grid.Gutter.Left+" + "+o.a.Size+")"}),c.a.Media.Width.Lg+"px",(function(e){return e.Flex?"\n          padding-left: 95px;\n          padding-right: 95px;\n        ":null}),c.a.Media.Width.Md+"px",(function(e){return e.Flex?"\n          padding-left: 45px;\n          padding-right: 45px;\n        ":null}),c.a.Media.Width.Sm+"px",(function(e){return e.Flex?"\n          padding-left: 25px;\n          padding-right: 25px;\n        ":null}),c.a.Media.Width.Md+"px",(function(e){return e.Flex?"calc(50% + ("+o.a.Grid.Gutter.Left+"/ 2))":"calc(50% - ("+o.a.Grid.Gutter.Left+"/ 2))"}),(function(e){return e.Flex?null:"padding-left: calc("+o.a.Grid.Gutter.Left+" + "+o.a.Size+")"}),o.a.Site.Width,c.a.Media.Width.Md+"px",c.a.Media.Width.Sm+"px");var d=s;t.a=function(e){var t=e.children,a=e.Flex;return n.a.createElement(d,null,n.a.createElement(d.Inner,{Flex:a},t))}},yl9N:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=(a("Wbzz"),a("gLav")),r=a.n(o),l=a("32fm"),c=a("jL+2"),s=a("RHEx"),d=r.a.div.withConfig({displayName:"stylesscss__Container",componentId:"sc-72zkq1-0"})(["align-self:flex-end;text-align:left;position:relative;width:100%;height:0;top:calc("," * -2);@media (min-width:","){padding-left:",";}@media (min-width:","){padding-left:",";}span{color:",";font-size:1rem;font-weight:700 !important;display:block;margin-bottom:calc("," * 0.1);}"],l.b.Root.Size,c.a.Media.Width.Md+"px",(function(e){return e.indent?"calc("+l.a.Size+" * 1)":"0"}),c.a.Media.Width.Lg+"px",(function(e){return e.indent?"calc("+l.a.Size+" * 2.5)":"0"}),l.b.Color.Dino,l.b.Root.Size);d.Inner=r()(s.a).withConfig({displayName:"stylesscss__Inner",componentId:"sc-72zkq1-1"})(["width:100%;max-width:",";margin:0 auto;overflow-x:visible;position:relative;padding-right:",";padding-left:",";@media (min-width:","){padding-right:calc("," + "," * 0.25);padding-left:calc("," + "," * 0.25);}@media (min-width:","){padding-right:calc("," + "," * 1);padding-left:calc("," + "," * 1);}"],l.b.Base.Grid.SiteWidth,l.a.Grid.Gutter.Right,l.a.Grid.Gutter.Left,c.a.Media.Width.Md+"px",l.a.Grid.Gutter.Right,l.a.Size,l.a.Grid.Gutter.Right,l.a.Size,c.a.Media.Width.Lg+"px",l.a.Grid.Gutter.Right,l.a.Size,l.a.Grid.Gutter.Right,l.a.Size),d.Positioner=r.a.div.withConfig({displayName:"stylesscss__Positioner",componentId:"sc-72zkq1-2"})(["width:fit-content;text-align:center;position:relative;bottom:160px;z-index:9;@media (max-width:","){bottom:10vw;}@media (max-width:","){bottom:0;}"],l.b.Base.Grid.SiteWidth,c.a.Media.Width.Sm+"px"),d.Line=r.a.div.withConfig({displayName:"stylesscss__Line",componentId:"sc-72zkq1-3"})(["display:block;width:0;height:160px;margin:0 auto;@media (max-width:","){height:10vw;}&:after{content:'\\2023';position:absolute;bottom:0;left:calc(50% - 9px);transform:rotate(90deg) translateY(18%);transform-origin:0% 100%;color:",";font-size:31px;}&:before{position:absolute;top:calc("," / 3);bottom:0;width:1px;content:'';background-image:linear-gradient( "," 40%,rgba(255,255,255,0) 0% );background-position:right;background-size:1px 10px;background-repeat:repeat-y;}"],l.b.Base.Grid.SiteWidth,l.b.Color.Nova,l.b.Base.Size.Lg,l.b.Color.Nova);var m=function(e){var t=e.children,a=e.indent;return n.a.createElement(d,{indent:a},n.a.createElement(d.Inner,null,n.a.createElement(d.Positioner,null,n.a.createElement("span",null,t),n.a.createElement(d.Line,null))))};m.defaultProps={};t.a=m},zpH9:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=a("gLav"),r=a.n(o),l=a("32fm"),c=(a("jL+2"),a("RHEx")),s=r()(c.b).withConfig({displayName:"stylesscss__Container",componentId:"sc-15kr52s-0"})(["position:relative;justify-content:center;"]);s.Line=r.a.div.withConfig({displayName:"stylesscss__Line",componentId:"sc-15kr52s-1"})(["display:block;margin:0 auto;position:absolute;bottom:-50px;width:0;height:120px;z-index:9;&:before{position:absolute;top:calc("," / 3);bottom:0;width:1px;content:'';background-image:linear-gradient( "," 40%,rgba(255,255,255,0) 0% );background-position:right;background-size:1px 10px;background-repeat:repeat-y;}"],l.b.Base.Size.Lg,l.b.Color.Primary);t.a=function(){return n.a.createElement(s,null,n.a.createElement(s.Line,null))}},zxM3:function(e,t,a){"use strict";a.r(t);var i=a("gLav"),n=a.n(i),o=a("q1tI"),r=a.n(o),l=(a("Wbzz"),a("HYpt")),c=a("1ehc"),s=a("Gk++"),d=a("RHEx"),m=a("zpH9"),p=(a("yl9N"),a("JM2a")),g=(a("pJf4"),a("gu/5"),a("eoYm"),a("wPly")),h=a("32fm"),u=a("jL+2"),f=n()(d.a).withConfig({displayName:"stylesscss__Hero",componentId:"sc-1r2or0t-0"})(["background:",";padding-top:calc("," + "," * 2);padding-bottom:calc("," * 1.5);text-align:left;overflow:hidden;position:relative;"],h.b.Color.Background,h.b.Root.Nav.Size,h.b.Root.Size,h.b.Root.Size);f.Inner=n()(d.a).withConfig({displayName:"stylesscss__Inner",componentId:"sc-1r2or0t-1"})(["width:100%;max-width:",";margin:0 auto;position:relative;padding-right:",";padding-left:",";overflow-x:visible;@media (min-width:","){}"],h.b.Base.Grid.SiteWidth,h.a.Grid.Gutter.Right,h.a.Grid.Gutter.Left,u.a.Media.Width.Md+"px"),f.Tags=n.a.ul.withConfig({displayName:"stylesscss__Tags",componentId:"sc-1r2or0t-2"})(["display:flex;flex-wrap:wrap;width:100%;margin-bottom:calc("," / 8);li{color:",";text-transform:uppercase;letter-spacing:calc("," * 0.05);font-weight:500;font-size:0.8rem;padding:0 calc("," * 0);margin-bottom:calc("," * 0.8);@media (min-width:","){font-size:0.9rem;}&:after{content:'—';color:",";margin:0 calc("," / 6);}&:last-child{&:after{content:'';}}a{color:",";}}"],h.b.Root.Size,h.b.Color.Deepsea,h.b.Root.Size,h.b.Root.Rem,h.b.Root.Rem,u.a.Media.Width.Lg+"px",h.b.Color.Sunset,h.b.Root.Size,h.b.Color.Primary),f.Heading=n.a.h2.withConfig({displayName:"stylesscss__Heading",componentId:"sc-1r2or0t-3"})(["color:",";span{color:",";}"],h.b.Color.Primary,h.b.Color.Nova),n()(d.b).withConfig({displayName:"stylesscss__Spacer",componentId:"sc-19p9px8-0"})(["position:relative;justify-content:center;"]).Line=n.a.span.withConfig({displayName:"stylesscss__Line",componentId:"sc-19p9px8-1"})(["width:0;height:100px;position:absolute;bottom:-50px;border-left:1px dashed ",";z-index:9;"],h.b.Color.Primary);var x=n()(d.a).withConfig({displayName:"stylesscss__Scroll",componentId:"sc-19p9px8-2"})(["align-self:flex-end;text-align:left;position:relative;width:100%;height:0;max-width:",";margin:0 auto;padding-right:",";padding-left:",";z-index:9;span{color:",";font-size:1rem;font-weight:bold;display:block;margin-bottom:calc("," * 0.1);}"],h.b.Base.Grid.SiteWidth,h.a.Grid.Gutter.Right,h.a.Grid.Gutter.Left,h.b.Color.White,h.b.Root.Size);x.Positioner=n.a.div.withConfig({displayName:"stylesscss__Positioner",componentId:"sc-19p9px8-3"})(["width:fit-content;text-align:center;position:relative;bottom:100px;padding-left:",";"],h.a.Grid.Indent.X),x.Line=n.a.div.withConfig({displayName:"stylesscss__Line",componentId:"sc-19p9px8-4"})(["display:block;width:0;height:160px;margin:0 auto;&:after{content:'\\2023';position:absolute;bottom:0;left:calc(50% - 9px);transform:rotate(90deg) translateY(18%);transform-origin:0% 100%;color:",";font-size:31px;}&:before{position:absolute;top:calc("," / 3);bottom:0;width:1px;content:'';background-image:linear-gradient( "," 40%,rgba(255,255,255,0) 0% );background-position:right;background-size:1px 10px;background-repeat:repeat-y;}"],h.b.Color.Nova,h.b.Base.Size.Lg,h.b.Color.Nova);var b=n()(d.a).withConfig({displayName:"stylesscss__Decorator",componentId:"sc-19p9px8-5"})(["z-index:9;.decorator__hero{position:absolute;top:calc("," + "," * 1);&--top{top:calc("," + "," * 1);right:-100px;width:140px;@media (min-width:","){right:-120px;width:200px;}@media (min-width:","){right:-170px;width:340px;}}&--bottom{top:calc("," + "," * 3.3);right:-40px;width:120px;@media (min-width:","){right:-70px;width:200px;}@media (min-width:","){right:-30px;width:310px;}}}.decorator__footer{position:absolute;&--top{top:calc("," + "," * -2.5);left:-95px;width:140px;@media (min-width:","){left:-120px;width:200px;}@media (min-width:","){left:-25px;width:180px;}}&--bottom{left:50%;width:400px;@media (min-width:","){width:400px;}@media (min-width:","){width:400px;}}}"],h.b.Root.Nav.Size,h.b.Root.Size,h.b.Root.Nav.Size,h.b.Root.Size,u.a.Media.Width.Md+"px",u.a.Media.Width.Lg+"px",h.b.Root.Nav.Size,h.b.Root.Size,u.a.Media.Width.Md+"px",u.a.Media.Width.Lg+"px",h.b.Root.Nav.Size,h.b.Root.Size,u.a.Media.Width.Md+"px",u.a.Media.Width.Lg+"px",u.a.Media.Width.Md+"px",u.a.Media.Width.Lg+"px"),w=a("d0Ct"),y=function(e){e.cities;var t,a=e.pageContext,i=1==a.isCounty?Object(w.a)(a.parentState.name.toLowerCase())+"/"+Object(w.a)(a.cost_code_name.toLowerCase())+"/"+Object(w.a)(a.name.toLowerCase()):1==a.isCostCode?Object(w.a)(a.parentState.name.toLowerCase())+"/"+Object(w.a)(a.cost_code_name.toLowerCase()):Object(w.a)(a.name.toLowerCase());return r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement("div",{className:"decorator__hero decorator__hero--top"},r.a.createElement(c.a,{src:"cloud-big.png",AltText:"Cloud"})),r.a.createElement("div",{className:"decorator__hero decorator__hero--bottom"},r.a.createElement(c.a,{src:"cloud-big.png",AltText:"Cloud"}))),r.a.createElement(f.Inner,null,r.a.createElement(d.a,{width:1,px:h.a.Grid.Indent.X},r.a.createElement(f.Heading,null,"STEM Education &",r.a.createElement("br",null),"Engineering in ",r.a.createElement("span",null,0!=a?1==a.isCounty?((t=a.name).toLowerCase().includes("county")?t:t+" County")+", "+a.parentState.name:1==a.isCostCode?a.cost_code_name+", "+a.parentState.name:a.name:"a place near you")),r.a.createElement(d.a,{mr:1,mb:[1,0],display:"inline-block"},r.a.createElement(g.b,{Destination:"/programs/"+i,Label:"View Programs",BgColor:h.b.Color.Nova,TextColor:h.b.Color.White})),r.a.createElement(d.a,{display:"inline-block"},r.a.createElement(g.b,{Destination:"/locations/"+i+"#coordinators",Label:"Contact Manager",BgColor:h.b.Color.Blush,TextColor:h.b.Color.Primary})))))},C=a("ckps"),v=n()(d.a).withConfig({displayName:"stylesscss__Title",componentId:"sc-1xccjs9-0"})(["span{color:",";font-weight:600;@media (min-width:","){position:sticky;top:calc("," + "," * 1);}}"],h.b.Color.Dino,u.a.Media.Width.Sm+"px",h.b.Root.Nav.Size,h.b.Root.Size),E=n.a.div.withConfig({displayName:"stylesscss__Article",componentId:"sc-1xccjs9-1"})(["border-radius:calc("," / 2);display:flex;flex-wrap:wrap;flex-direction:row;background:",";padding:calc("," / 2);width:100%;@media (min-width:","){padding:calc("," / 3);}"],h.a.Radius,h.b.Color.White,h.a.Size,u.a.Media.Width.Sm+"px",h.a.Size);E.Info=n.a.div.withConfig({displayName:"stylesscss__Info",componentId:"sc-1xccjs9-2"})(["display:flex;padding-left:calc("," / 2);width:75%;@media (min-width:","){padding-left:calc("," / 3);width:85%;}"],h.a.Size,u.a.Media.Width.Sm+"px",h.a.Size),E.Figure=n.a.figure.withConfig({displayName:"stylesscss__Figure",componentId:"sc-1xccjs9-3"})(["margin:0;width:25%;height:25%;@media (min-width:","){width:15%;height:15%;}.gatsby-image-wrapper{border-radius:calc("," * 6);overflow:hidden;width:100%;height:100%;}"],u.a.Media.Width.Sm+"px",h.a.Radius),E.Info.Details=n.a.div.withConfig({displayName:"stylesscss__Details",componentId:"sc-1xccjs9-4"})(["color:",";display:block;font-weight:500;margin-bottom:calc("," / 4);width:100%;text-transform:capitalize;span{color:",";margin-left:calc("," / 2);}"],h.b.Color.Nova,h.a.Size,h.b.Color.Dino,h.a.Size),E.Info.Name=n.a.div.withConfig({displayName:"stylesscss__Name",componentId:"sc-1xccjs9-5"})(["color:",";display:block;font-size:1.6rem;font-weight:600;margin-top:calc("," / 1);width:100%;@media (min-width:","){margin-top:0;}"],h.b.Color.Deepsea,h.a.Size,u.a.Media.Width.Sm+"px"),E.Info.Contact=n.a.div.withConfig({displayName:"stylesscss__Contact",componentId:"sc-1xccjs9-6"})(["align-self:flex-end;display:flex;flex-wrap:wrap;flex-direction:column;justify-content:space-between;color:",";font-weight:500;margin-top:calc("," / 1);width:100%;@media (min-width:","){flex-direction:row;}span{margin-bottom:calc("," / 3);display:block;&:last-child{margin-bottom:0;}@media (min-width:","){margin-bottom:0;}a{color:",";}}"],h.b.Color.Nova,h.a.Size,u.a.Media.Width.Sm+"px",h.a.Size,u.a.Media.Width.Sm+"px",h.b.Color.Nova);var S=function(e){var t=e.pageContext,a=t.isCounty?t.name+", "+t.parentState.name:t.name;return r.a.createElement(s.a,{textAlign:"left"},r.a.createElement(d.b,{flexWrap:"wrap"},r.a.createElement(v,{width:[1,1,.5,.4],pr:[0,0,0,"calc(var(--Size) * 2)"],pb:"var(--Size)"},r.a.createElement("span",{className:"h2"},"Coordinators in ",a)),r.a.createElement(d.a,{width:[1,1,.5,.6]},t.managers.map((function(e){return r.a.createElement(C.a,{key:e.node.id,title:e.node.cost_code_name},r.a.createElement(E,null,r.a.createElement(E.Figure,null,r.a.createElement(c.a,{src:"avatar-yoda.jpg",AltText:"PlayWell program state coordinator"})),r.a.createElement(E.Info,null,r.a.createElement(d.b,{flexWrap:"wrap"},r.a.createElement(E.Info.Details,null,e.node.state),r.a.createElement(E.Info.Name,{fontSize:"1.6rem"},e.node.manager),r.a.createElement(E.Info.Contact,null,r.a.createElement("span",null,r.a.createElement("a",{href:"mailto:"+e.node.email},e.node.email)))))))})))))},_=(a("9eSz"),a("u00P")),z=a("AKqm"),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{Flex:"row"},r.a.createElement(z.a,{Style:"centered",BgColor:h.b.Color.White,BgMatch:"do-it-yourself.jpg",BgAlt:"Our Awesome Alt Tag",Width:.5,JustifyContent:"center"}),r.a.createElement(z.a,{Padding:[2,2,2,2],Width:.5,BgColor:h.b.Color.White,TextColor:h.b.Color.Nightsky},r.a.createElement(d.c,{as:"h6",color:"Galaxy"},"Do it yourself"),r.a.createElement(d.c,{as:"h2",color:"Sunset"},"Host Your Own Program")," ",r.a.createElement(d.c,{as:"p",className:"p-lg",color:"Galaxy"},"Through LEGO® inspired classes sparking “Aha!” moments, we help kids grasp fundamental principles of engineering and physics. The experience boosts their confidence, creativity and ability to collaborate."))),r.a.createElement(_.a,{Flex:"row-reverse"},r.a.createElement(z.a,{Style:"centered",BgColor:h.b.Color.White,BgMatch:"power-of-play.jpg",BgAlt:"Our Awesome Alt Tag",Width:.5}),r.a.createElement(z.a,{Padding:[2,2,2,2],Width:.5,BgColor:h.b.Color.White,TextColor:h.b.Color.Nightsky},r.a.createElement(d.c,{as:"h6",color:"Galaxy"},"Playing since 1997"),r.a.createElement(d.c,{as:"h2",color:"Sunset"},"Creativity, confidence & collaboration.")," ",r.a.createElement(d.c,{as:"p",className:"p-lg",color:"Galaxy"},"Through LEGO® inspired classes sparking “Aha!” moments, we help kids grasp fundamental principles of engineering and physics. The experience boosts their confidence, creativity and ability to collaborate."))))},I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{Flex:"row"},r.a.createElement(z.a,{Padding:[2,2,2,2],Width:.5,BgColor:h.b.Color.Primary,TextColor:h.b.Color.White},r.a.createElement(d.c,{as:"span",fontSize:[1,2,2],fontWeight:700,mb:1},"Playing anywhere"),r.a.createElement(d.c,{as:"h2"},"Find a program near you")," ",r.a.createElement(d.c,{as:"p",fontSize:[0,1,1],mt:[1,1,0],mb:1},"Our assessments measured three goals including: student's knowledge of STEM terms or concepts, ability to generalize information, and increasing positve feeling towards STEM subjects.")),r.a.createElement(z.a,{Padding:[4,2,4,2],Width:.5,BgColor:h.b.Color.Sunset,TextColor:h.b.Color.White},r.a.createElement(d.c,{as:"span",fontSize:[1,2,2],fontWeight:700,mb:1},"Do it yourself"),r.a.createElement(d.c,{as:"h2"},"Host Your Own Program")," ",r.a.createElement(d.c,{as:"p",fontSize:[0,1,1],mt:[1,1,0],mb:1},"Through LEGO® inspired classes sparking “Aha!” moments, we help kids grasp fundamental principles of engineering and physics. The experience boosts their confidence, creativity and ability to collaborate."))))},W=a("Wo+V"),k=(n()(d.a).withConfig({displayName:"stylesscss__Events",componentId:"sc-1iul9e0-0"})(["display:flex;flex-wrap:wrap;background:",";border-top:1px solid ",";padding-top:calc("," * 4);"],h.b.Color.Background,Object(W.a)(h.b.Color.Nova,.3),h.a.Grid.Gutter.Top),n()(s.a).withConfig({displayName:"stylesscss__QuoteContainer",componentId:"sc-1lb6qk6-0"})([""]));k.Quote=n()(d.c).withConfig({displayName:"stylesscss__Quote",componentId:"sc-1lb6qk6-1"})(["position:relative;font-weight:600;&:before{content:'\"'; color: ","; font-size: 3rem; position: absolute; top: -40px; left: -10px; @media (min-width: ",") { font-size: 4rem; left: -20px; } } &:after { content: '\"';color:",";font-size:3rem;position:absolute;bottom:-60px;right:-10px;@media (min-width:","){font-size:4rem;right:-20px;}}"],h.b.Color.Primary,u.a.Media.Width.Md+"px",h.b.Color.Primary,u.a.Media.Width.Md+"px");var M=function(e){var t=e.color,a=e.children;return r.a.createElement(k,null,r.a.createElement(d.a,{px:["10%","14%","16%","20%"]},r.a.createElement(k.Quote,{className:"h2",color:t},a)))};M.defaultProps={color:"Sunset"};var L=M,G=n()(s.a).withConfig({displayName:"stylesscss__Intro",componentId:"sc-1f6r94g-0"})([""]);G.Inner=n()(d.b).withConfig({displayName:"stylesscss__Inner",componentId:"sc-1f6r94g-1"})(["flex-direction:column;flex-wrap:wrap;margin:0 auto;max-width:",";"],h.b.Base.Grid.ReadingWidth);var P=function(e){var t=e.pageContext,a=t.isCounty?t.name+", "+t.parentState.name+"'s":t.name+"'s";return r.a.createElement(G,{bg:"Cream",textAlign:"center"},r.a.createElement(G.Inner,{pt:[2,2,4,4],pb:[1,1,2,2]},r.a.createElement(d.c,{as:"p",color:"Nova",className:"lead"},a," Leading STEM Education & Engineering Programs"),r.a.createElement(d.c,{as:"p",color:"Galaxy",className:"lead"},"Ut vehicula dictum tristique. Cras at sem nec risus sollicitudin varius. Proin ultrices metus arcu, ut lacinia libero ornare eget. Morbi orci mi, scelerisque a justo quis, euismod sollicitudin dui. Duis convallis magna eget eleifend tempor. Ut non lobortis metus. Donec sit amet vulputate risus. Vivamus et lacinia ante.")))},j=n()(s.a).withConfig({displayName:"stylesscss__Container",componentId:"sc-1xtnnof-0"})(["position:relative;"]);j.Overflow=n.a.div.withConfig({displayName:"stylesscss__Overflow",componentId:"sc-1xtnnof-1"})(["overflow:hidden;"]),j.Image=n.a.div.withConfig({displayName:"stylesscss__Image",componentId:"sc-1xtnnof-2"})(["width:547px;overflow:hidden;position:absolute;right:0;top:-300px;.img{width:587px;}"]);var B=function(){return r.a.createElement(j,{textAlign:"left",pt:[8,8,12,12],indent:!0},r.a.createElement(j.Image,null,r.a.createElement(c.a,{src:"lego-ladder.png",AltText:"Cloud"})),r.a.createElement(d.a,{width:[1,.6,.5,.4]},r.a.createElement(d.c,{className:"h6",as:"span",color:"Galaxy",fontWeight:700,mb:1},"Do it yourself"),r.a.createElement(d.c,{as:"h2",color:"Sunset"},"Build Your Own World of Opportunity"),r.a.createElement(d.c,{as:"p",color:"Galaxy",fontSize:[0,1,1],mt:[1,1,0],mb:1},"Bring your kid over or bring out your inner kid with some of our online activities to feed your imagination.")))},T={BgColor:h.b.Color.Background,PrimaryColor:h.b.Color.Dino,SecondaryColor:h.b.Color.Primary,TertiaryColor:h.b.Color.Primary},A=n()(b).withConfig({displayName:"Location___StyledDecorator",componentId:"sc-2lj5i0-0"})(["position:relative;"]);t.default=function(e){var t=e.pageContext;return r.a.createElement(l.a,T,r.a.createElement(y,{pageContext:t}),r.a.createElement(s.a,{pt:0,pb:0,fullWidth:!0},r.a.createElement(c.a,{src:"locations-hero.jpg",AltText:"STEM Education & Engineering in"})),r.a.createElement(m.a,null),r.a.createElement(P,{pageContext:t}),r.a.createElement(N,null),r.a.createElement(S,{pageContext:t,id:"coordinators"}),r.a.createElement(s.a,{bg:"White"},r.a.createElement(p.a,{blocks:[{title:"Creative Collaboration",text:"A greater sense of understanding and connection between your staff, as they will now know how others play, and in turn, how they work best.",legoColor:"orange"},{title:"New Perspectives",text:"A willingness to tackle problems from a play perspective, embracing failure as part of the process of finding the solution.",legoColor:"purple"},{title:"Staff Morale",text:"A rejuvenated staff who rediscovers what they find fun about their job and their organization.",legoColor:"blue"}]})),r.a.createElement(L,{color:"Sunset"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra enim sed magna vestibulum, nec imperdiet orci egestas. Sed in magna sapien."),r.a.createElement(I,null),r.a.createElement(x,null,r.a.createElement(x.Positioner,null,r.a.createElement("span",null,"Play"),r.a.createElement(x.Line,null))),r.a.createElement(A,null,r.a.createElement("div",{className:"decorator__footer decorator__footer--top"},r.a.createElement(c.a,{src:"cloud-small.png",AltText:"Cloud"}))),r.a.createElement(B,null))}}}]);
//# sourceMappingURL=component---src-templates-location-index-js-c0139d200e2cc757b88a.js.map