export const sidebarLinks = [
  {
    icon: '/icons/data.png',
    route: '/admin',
    label: 'Participation',
  },
  {
    icon: '/icons/stats.png',
    route: '/admin/chart-data',
    label: 'Statistiques',
  },
  {
    icon: '/icons/game.png',
    route: '/admin/final-game',
    label: 'Grand jeux',
  },
  {
    icon: '/icons/email.png',
    route: '/admin/emailing',
    label: 'Emailing',
  },
];

export const topCategoryStyles = {
  'Food and Drink': {
    bg: 'bg-blue-25',
    circleBg: 'bg-blue-100',
    text: {
      main: 'text-blue-900',
      count: 'text-blue-700',
    },
    progress: {
      bg: 'bg-blue-100',
      indicator: 'bg-blue-700',
    },
    icon: '/icons/monitor.svg',
  },
  Travel: {
    bg: 'bg-success-25',
    circleBg: 'bg-success-100',
    text: {
      main: 'text-success-900',
      count: 'text-success-700',
    },
    progress: {
      bg: 'bg-success-100',
      indicator: 'bg-success-700',
    },
    icon: '/icons/coins.svg',
  },
  default: {
    bg: 'bg-pink-25',
    circleBg: 'bg-pink-100',
    text: {
      main: 'text-pink-900',
      count: 'text-pink-700',
    },
    progress: {
      bg: 'bg-pink-100',
      indicator: 'bg-pink-700',
    },
    icon: '/icons/shopping-bag.svg',
  },
};

export const participationStatusStyles = {
  WAITING: {
    borderColor: 'border-[#3f95e1]',
    backgroundColor: 'bg-[#3e95e1]',
    textColor: 'text-[#3f95e1]',
    chipBackgroundColor: 'bg-[#f5faff]',
  },
  CANCELLED: {
    borderColor: 'border-red-700',
    backgroundColor: 'bg-red-700',
    textColor: 'text-red-700',
    chipBackgroundColor: 'bg-[#fef2f2]',
  },
  PARTICIPATION: {
    borderColor: 'border-[#F2F4F7]',
    backgroundColor: 'bg-gray-500',
    textColor: 'text-[#344054]',
    chipBackgroundColor: 'bg-[#F2F4F7]',
  },
  CONCLUDED: {
    borderColor: 'border-[#12B76A]',
    backgroundColor: 'bg-[#12B76A]',
    textColor: 'text-[#027A48]',
    chipBackgroundColor: 'bg-[#ECFDF3]',
  },
  GIFT_GIVEN: {
    borderColor: 'border-[#12B76A]',
    backgroundColor: 'bg-[#12B76A]',
    textColor: 'text-[#027A48]',
    chipBackgroundColor: 'bg-[#ECFDF3]',
  },
  CURRENT_PARTICIPATION: {
    borderColor: 'border-[#12B76A]',
    backgroundColor: 'bg-[#12B76A]',
    textColor: 'text-[#027A48]',
    chipBackgroundColor: 'bg-[#ECFDF3]',
  },
  default: {
    borderColor: '',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-700',
    chipBackgroundColor: 'bg-inherit',
  },
};

export const emailTemplates = [
  `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
<!--[if gte mso 15]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Le grand jour du tirage approche🤩</title>
<!--[if !mso]><!--><link rel="stylesheet" type="text/css" id="newGoogleFontsStatic" href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i"><!--<![endif]--><style>          img{-ms-interpolation-mode:bicubic;} 
          table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} 
          .mceStandardButton, .mceStandardButton td, .mceStandardButton td a{mso-hide:all !important;} 
          p, a, li, td, blockquote{mso-line-height-rule:exactly;} 
          p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;} 
          @media only screen and (max-width: 480px){
            body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} 
          }
          .mcnPreviewText{display: none !important;} 
          .bodyCell{margin:0 auto; padding:0; width:100%;}
          .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font{line-height:100%;} 
          .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} 
          a[x-apple-data-detectors]{color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;} 
            body{height:100%; margin:0; padding:0; width:100%; background: #ffffff;}
            p{margin:0; padding:0;} 
            table{border-collapse:collapse;} 
            td, p, a{word-break:break-word;} 
            h1, h2, h3, h4, h5, h6{display:block; margin:0; padding:0;} 
            img, a img{border:0; height:auto; outline:none; text-decoration:none;} 
            a[href^="tel"], a[href^="sms"]{color:inherit; cursor:default; text-decoration:none;} 
            li p {margin: 0 !important;}
            .ProseMirror a {
                pointer-events: none;
            }
            @media only screen and (max-width: 640px){
                .mceClusterLayout td{padding: 4px !important;} 
            }
            @media only screen and (max-width: 480px){
                body{width:100% !important; min-width:100% !important; } 
                body.mobile-native {
                    -webkit-user-select: none; user-select: none; transition: transform 0.2s ease-in; transform-origin: top center;
                }
                body.mobile-native.selection-allowed a, body.mobile-native.selection-allowed .ProseMirror {
                    user-select: auto;
                    -webkit-user-select: auto;
                }
                colgroup{display: none;}
                img{height: auto !important;}
                .mceWidthContainer{max-width: 660px !important;}
                .mceColumn{display: block !important; width: 100% !important;}
                .mceColumn-forceSpan{display: table-cell !important; width: auto !important;}
                .mceColumn-forceSpan .mceButton a{min-width:0 !important;}
                .mceBlockContainer{padding-right:16px !important; padding-left:16px !important;} 
                .mceTextBlockContainer{padding-right:16px !important; padding-left:16px !important;} 
                .mceBlockContainerE2E{padding-right:0px; padding-left:0px;} 
                .mceSpacing-24{padding-right:16px !important; padding-left:16px !important;}
                .mceImage, .mceLogo{width: 100% !important; height: auto !important;} 
                .mceFooterSection .mceText, .mceFooterSection .mceText p{font-size: 16px !important; line-height: 140% !important;}
            }
            div[contenteditable="true"] {outline: 0;}
            .ProseMirror h1.empty-node:only-child::before,
            .ProseMirror h2.empty-node:only-child::before,
            .ProseMirror h3.empty-node:only-child::before,
            .ProseMirror h4.empty-node:only-child::before {
                content: 'Heading';
            }
            .ProseMirror p.empty-node:only-child::before, .ProseMirror:empty::before {
                content: 'Start typing...';
            }            .mceImageBorder {display: inline-block;}            .mceImageBorder img {border: 0 !important;}body, #bodyTable { background-color: rgb(234, 236, 226); }.mceText, .mcnTextContent, .mceLabel { font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; }.mceText, .mcnTextContent, .mceLabel { color: rgb(0, 0, 0); }.mceText h2 { margin-bottom: 0px; }.mceText p { margin-bottom: 0px; }.mceText ul { margin-bottom: 0px; }.mceText label { margin-bottom: 0px; }.mceText input { margin-bottom: 0px; }.mceSpacing-24 .mceInput + .mceErrorMessage { margin-top: -12px; }.mceText h2 { margin-bottom: 0px; }.mceText p { margin-bottom: 0px; }.mceText ul { margin-bottom: 0px; }.mceText label { margin-bottom: 0px; }.mceText input { margin-bottom: 0px; }.mceSpacing-12 .mceInput + .mceErrorMessage { margin-top: -6px; }.mceInput { background-color: transparent; border: 2px solid rgb(208, 208, 208); width: 60%; color: rgb(77, 77, 77); display: block; }.mceInput[type="radio"], .mceInput[type="checkbox"] { float: left; margin-right: 12px; display: inline; width: auto !important; }.mceLabel > .mceInput { margin-bottom: 0px; margin-top: 2px; }.mceLabel { display: block; }.mceText p, .mcnTextContent p { color: rgb(0, 0, 0); font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; font-size: 16px; font-weight: normal; line-height: 150%; text-align: center; direction: ltr; }.mceText h2, .mcnTextContent h2 { color: rgb(0, 0, 0); font-family: "Playfair Display", Georgia, "Times New Roman", serif; font-size: 25px; font-weight: bold; line-height: 150%; text-align: center; direction: ltr; }.mceText a, .mcnTextContent a { color: rgb(0, 108, 115); font-style: normal; font-weight: normal; text-decoration: underline; direction: ltr; }@media only screen and (max-width: 480px) {            .mceText p { margin: 0px; font-size: 16px !important; line-height: 150% !important; }          }@media only screen and (max-width: 480px) {            .mceText h2 { font-size: 25px !important; line-height: 150% !important; }          }@media only screen and (max-width: 480px) {            .mceBlockContainer { padding-left: 16px !important; padding-right: 16px !important; }          }@media only screen and (max-width: 480px) {            .mceButtonContainer { width: fit-content !important; max-width: fit-content !important; }.mceButtonLink { padding: 18px 28px !important; font-size: 16px !important; }          }#dataBlockId-10 p, #dataBlockId-10 h1, #dataBlockId-10 h2, #dataBlockId-10 h3, #dataBlockId-10 h4, #dataBlockId-10 ul { text-align: center; }</style></head><body><!----><!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">Jeux concours thétiptop</span><!--<![endif]--><!----><center><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="background-color: rgb(234, 236, 226);"><tbody><tr> <td class="bodyCell" align="center" valign="top"> <table id="root" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody data-block-id="14" class="mceWrapper"><tr><td align="center" valign="top" class="mceWrapperOuter"><!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]--><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px" role="presentation"><tbody><tr><td style="background-color:#d2c3b1;background-position:center;background-repeat:no-repeat;background-size:cover" class="mceWrapperInner" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="13"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0" class="mceColumn" data-block-id="-7" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" valign="top"><table width="100%" style="border:0;border-radius:0;border-collapse:separate"><tbody><tr><td style="padding-left:24px;padding-right:24px;padding-top:0;padding-bottom:0" class="mceTextBlockContainer"><div data-block-id="16" class="mceText" id="dataBlockId-16" style="width:100%"><p><br></p><h2><span style="font-size: 22px">Participez à notre jeu-concours exclusif et tentez de gagner un an de thé bio !</span></h2><p class="last-child"><br></p></div></td></tr></tbody></table></td></tr><tr><td style="background-color:#d2c3b1;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px" class="mceBlockContainer" align="center" valign="top"><a href="https://dsp5-archi-022a-4-5-g2.fr/home" style="display:block" target="_blank" data-block-id="3"><span class="mceImageBorder" style="border:0;border-radius:0;vertical-align:top;margin:0"><img width="97.5" height="auto" style="width:97.5px;height:auto;max-width:97.5px !important;border-radius:0;display:block" alt="" src="https://mcusercontent.com/d19bd991443c350c1aed0ea4d/images/f0bbec4d-5da0-570b-49af-00b147f7b233.png" role="presentation" class="imageDropZone mceLogo"></span></a></td></tr><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" class="mceBlockContainer" align="center" valign="top"><span class="mceImageBorder" style="border:0;border-radius:0;vertical-align:top;margin:0"><img data-block-id="4" width="660" height="auto" style="width:660px;height:auto;max-width:660px !important;border-radius:0;display:block" alt="" src="https://mcusercontent.com/d19bd991443c350c1aed0ea4d/images/66584f43-d942-fb6b-d376-77f69d7d6151.png" role="presentation" class="imageDropZone mceImage"></span></td></tr><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" valign="top"><table width="100%" style="border:0;border-radius:0;border-collapse:separate"><tbody><tr><td style="padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px" class="mceTextBlockContainer"><div data-block-id="5" class="mceText" id="dataBlockId-5" style="width:100%"><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><p style="text-align: left;">Chers ,</p><p style="text-align: left;">Nous avons le plaisir de vous annoncer l'ouverture de Thetiptop, votre nouvelle boutique de thé bio à Nice ! Pour célébrer cet événement, nous vous invitons à participer à notre jeu-concours exclusif.</p><p style="text-align: left;">Comment participer ?Du 01/09/2024 au 30/09/2024, pour chaque achat supérieur à 49€ chez Thé Tip Top, vous recevrez un ticket avec un code unique. Entrez ce code sur notre application pour participer à notre tirage au sort et tenter de gagner des cadeaux incroyables !</p><p style="text-align: left;">À gagner :</p><ul><li><p style="text-align: left;">Boîtes de thé bio détox ou infusion</p></li><li><p style="text-align: left;">Boîtes de thé signature</p></li><li><p style="text-align: left;">Coffrets découverte</p></li><li><p style="text-align: left;">Infuseurs à thé</p></li></ul><p style="text-align: left;">Vous avez encore 30 jours après la fin du concours pour vérifier vos gains en ligne.</p><p style="text-align: left;">Grand tirage au sort final :Un an de thé d'une valeur de 360€ sera tiré au sort sous contrôle d'huissier !</p><p style="text-align: left;">Ne manquez pas cette opportunité unique de découvrir notre gamme de thés bio et de repartir avec des cadeaux exclusifs !</p><p style="text-align: left;">N'attendez plus, participez dès maintenant en magasin et tentez votre chance !</p><p style="text-align: left;"><br></p><p style="text-align: left;">Thetiptop<br>Votre Boutique de Thé Bio à Nice</p><p style="text-align: left;"><br></p><p style="text-align: left;" class="last-child"><br></p></div></td></tr></tbody></table></td></tr><tr><td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px" class="mceBlockContainer" align="center" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" data-block-id="6" class="mceButtonContainer"><tbody><tr><!--[if !mso]><!--></tr><tr class="mceStandardButton"><td style="background-color:#2f481b;border-radius:50px;text-align:center" class="mceButton" valign="top"><a href="https://dsp5-archi-022a-4-5-g2.fr/home" target="_blank" class="mceButtonLink" style="background-color:#2f481b;border-radius:50px;border:2px solid #2f481b;color:#ffffff;display:block;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:normal;font-style:normal;padding:16px 28px;text-decoration:none;min-width:30px;text-align:center;direction:ltr;letter-spacing:0px" rel="noreferrer">Je participe</a></td></tr><tr><!--<![endif]--></tr><tr> <!--[if mso]> <td align="center"> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://dsp5-archi-022a-4-5-g2.fr/home" style="v-text-anchor:middle; width:141.03px; height:53.6px;" arcsize="35%" strokecolor="#2f481b" strokeweight="2px" fillcolor="#2f481b"> <v:stroke dashstyle="solid"/> <w:anchorlock /> <center style=" color: #ffffff; display: block; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16; font-style: normal; font-weight: normal; letter-spacing: 0px; text-decoration: none; text-align: center; direction: ltr;" > Je participe </center> </v:roundrect> </td> <![endif]--> </tr></tbody></table></td></tr><tr><td style="background-color:transparent" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="7"><tbody><tr><td class="mceSpacerBlock" height="20" valign="top"></td></tr></tbody></table></td></tr><tr><td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceLayoutContainer" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="8"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="24" width="100%" role="presentation"><tbody><tr><td class="mceColumn" data-block-id="-6" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td valign="top"><span><!--[if mso]> </tr> </table> <![endif]--></span><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" class="mceSocialFollowBlock" data-block-id="-5"><tbody><tr><td align="center" valign="middle" data-mso-table-row=""><span> <!--[if mso]> <table align="left" border="0" cellspacing= "0" cellpadding="0"> <tr> <![endif]--> </span><span> <!--[if mso]> <td align="center" valign="top"> <![endif]--> </span><table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;float:left" role="presentation" data-mso-td=""><tbody><tr><td style="padding-top:3px;padding-bottom:3px;padding-left:12px;padding-right:12px" class="mceSocialFollowIcon" align="center" width="40" valign="top"><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img class="mceSocialFollowImage" width="40" height="40" alt="Facebook icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/facebook-filled-dark-40.png"></a></td></tr></tbody></table><span> <!--[if mso]> </td> <![endif]--> </span><span> <!--[if mso]> <td align="center" valign="top"> <![endif]--> </span><table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;float:left" role="presentation" data-mso-td=""><tbody><tr><td style="padding-top:3px;padding-bottom:3px;padding-left:12px;padding-right:12px" class="mceSocialFollowIcon" align="center" width="40" valign="top"><a href="https://instagram.com/" target="_blank" rel="noreferrer"><img class="mceSocialFollowImage" width="40" height="40" alt="Instagram icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/instagram-filled-dark-40.png"></a></td></tr></tbody></table><span> <!--[if mso]> </td> <![endif]--> </span><span> <!--[if mso]> <td align="center" valign="top"> <![endif]--> </span><table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;float:left" role="presentation" data-mso-td=""><tbody><tr><td style="padding-top:3px;padding-bottom:3px;padding-left:12px;padding-right:12px" class="mceSocialFollowIcon" align="center" width="40" valign="top"><a href="https://x.com/" target="_blank" rel="noreferrer"><img class="mceSocialFollowImage" width="40" height="40" alt="Twitter icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/twitter-filled-dark-40.png"></a></td></tr></tbody></table><span> <!--[if mso]> </td> <![endif]--> </span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" valign="top"><table width="100%" style="border:0;border-radius:0;border-collapse:separate"><tbody><tr><td style="padding-left:24px;padding-right:24px;padding-top:54px;padding-bottom:12px" class="mceTextBlockContainer"><div data-block-id="1" class="mceText" id="dataBlockId-1" style="width:100%"><p class="last-child"><a href="https://mailchi.mp/d9d5cb7e6813/le-grand-jour-du-tirage-approche?e=[UNIQID]">Affichez cet e-mail dans votre navigateur</a></p></div></td></tr></tbody></table></td></tr><tr><td style="background-color:#d2c3b1;padding-top:8px;padding-bottom:8px;padding-right:8px;padding-left:8px" class="mceLayoutContainer" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="12" id="section_83dafdd65387a22b7ff919543cbe3064" class="mceFooterSection"><tbody><tr class="mceRow"><td style="background-color:#d2c3b1;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px" valign="top"><table border="0" cellpadding="0" cellspacing="12" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0" class="mceColumn" data-block-id="-3" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" align="center" valign="top"><table width="100%" style="border:0;border-radius:0;border-collapse:separate"><tbody><tr><td style="padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:12px" class="mceTextBlockContainer"><div data-block-id="10" class="mceText" id="dataBlockId-10" style="display:inline-block;width:100%"><p class="last-child"><em><span style="font-size: 12px">Copyright (C) 2024 Didireality. Tous droits réservés.</span></em><br><span style="font-size: 12px">Nous vous envoyons cet e-mail, car vous vous êtes abonné via notre site Web.</span><br><br><span style="font-size: 12px">Notre adresse postale est la suivante :</span><br><span style="font-size: 12px">Didireality Paris Paris 94300 France</span><br><br><span style="font-size: 12px">Vous souhaitez modifier les paramètres pour ce type d'e-mails ?</span><br><span style="font-size: 12px">Vous pouvez </span><a href="https://thetip-top.us17.list-manage.com/profile?u=d19bd991443c350c1aed0ea4d&id=da60ccf48b&e=[UNIQID]&c=fdf7791541"><span style="font-size: 12px">mettre à jour vos préférences</span></a><span style="font-size: 12px"> ou </span><a href="https://thetip-top.us17.list-manage.com/unsubscribe?u=d19bd991443c350c1aed0ea4d&id=da60ccf48b&t=b&e=[UNIQID]&c=fdf7791541"><span style="font-size: 12px">vous désabonner</span></a></p></div></td></tr></tbody></table></td></tr><tr><td class="mceLayoutContainer" align="center" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="-2"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td class="mceColumn" data-block-id="-8" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td align="center" valign="top"><div><div data-block-id="11"><a href="http://eepurl.com/iYxKEc" target="_blank" rel="noopener noreferrer"><img style="max-width:100%" width="137" height="53" alt="Email Marketing Powered by Mailchimp" title="Mailchimp Email Marketing" src="https://cdn-images.mailchimp.com/monkey_rewards/intuit-mc-rewards-2.png"></a></div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table> </td> </tr></tbody></table></center></body></html>`
]