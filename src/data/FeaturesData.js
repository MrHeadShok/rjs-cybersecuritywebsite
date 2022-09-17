import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { RiEmotionHappyFill } from 'react-icons/ri';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData=[
    {
        name:'Cost effective',
        description:'We offer tailored prices to our clients, bundles come at a lower rate.',
        icon: iconStyle(BiDollar),
        imgClass:'one'
    },
    {
        name:"Highest security",
        description:"Hire us, worry less with our high end security tech.",
        icon: iconStyle(BsFillShieldLockFill),
        imgClass:'two'
    },
    {
        name:'24/7 support',
        description:'We are reachable every day and hour of the year.',
        icon:iconStyle(BiSupport),
        imgClass:'three'
    },
    {
        name:'scalable',
        description:'No matter where you are we will find a way to connect, our servers are present world wide.',
        icon:iconStyle(AiOutlineCloudUpload),
        imgClass:'four'
    },
    {
        name:'Easy to use',
        description:'Our system is easily deployed and used.',
        icon:iconStyle(IoIosOptions),
        imgClass:'five'
    },
    {
        name:'Customer Satisfaction',
        description:'We will make sure you are happy with your purchase.',
        icon:iconStyle(RiEmotionHappyFill),
        imgClass:'six'
    }
]