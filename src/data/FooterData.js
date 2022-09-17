import {RiFacebookCircleFill, RiGithubFill, RiLinkedinFill} from 'react-icons/ri'

const iconStyle = (Icon) => <Icon/>;

export const footerSocialData=[
    {
        name: "Facebook",
        icon: iconStyle(RiFacebookCircleFill),
        link: "https://m.facebook.com/people/Belkahla-Taieb/100010384453813/?comment_id=Y29tbWVudDo0ODYzNjQ4Mjc3MDA0MjEzXzQ4NjQzMDUwOTAyNzE4NjU%3D"
    },
    {
        name:"Github",
        icon: iconStyle(RiGithubFill),
        link:"https://github.com/MrHeadShok"
    },
    {
        name:"LinkedIn",
        icon: iconStyle(RiLinkedinFill),
        link:"https://www.linkedin.com/in/belkahla-taieb-709b09171/"
    }
]

export const footerData=[
    {
        title: "Product",
        links:['Profile', 'Team', 'Bundles']
    },
    {
        title: "Main",
        links:['About us', 'Support', 'FAQ']
    },
    {
        title: "Legal",
        links:['Privacy policy', 'Cookies Policy', 'GDPR']
    },
]