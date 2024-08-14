import NetComLogo from '../assets/images/NetComLogo.png';
import Search from '../assets/images/search-icon.png';
import NotificationImg from '../assets/images/notification-icon.png';
import CartImg from '../assets/images/cart-icon.png';
import ProfileImg from '../assets/images/profileIcon.png';
import Dashboard from '../assets/images/dashboard-img.png';
import TrainingClasses from '../assets/images/training-class.png';
import ELearning from '../assets/images/e-learning.png';
import RightArrow from '../assets/images/right_arrow.svg';
import DownArrow from '../assets/images/arrow_down.svg';
import MenuIcon from '../assets/images/menu.svg';
import CloseIcon from '../assets/images/close_icon.svg';
import ArrowBack from '../assets/images/arrow_back.svg';
import UserImg from '../assets/images/user_img.svg'
import TickMark from '../assets/images/tick.png'
import QrScaner from '../assets/images/qrscan.png'
import Certification from '../assets/images/certification.png'
import SharedImg from '../assets/images/shared.png'
import DownArrowWhite from '../assets/images/arrow_down_white.svg';

const commonImgObj = {
    companyLogo: NetComLogo,
    searchImg: Search,
    notificationImg: NotificationImg,
    cartImg: CartImg,
    profileImg: ProfileImg,
    rightArrowIcon: RightArrow,
    downArrowIcon: DownArrow,
    menuIcon: MenuIcon,
    closeIcon: CloseIcon,
    arrowBackIcon: ArrowBack,
    SharedImg: SharedImg,
    DownArrowWhite: DownArrowWhite
}

const sideMenuItems = [
    {
        id: 1,
        img: Dashboard,
        title: 'Dashboard',
        active: true,
        arrowFlag: false,
        path: '/dashboard'
    },
    {
        id: 2,
        img: ELearning,
        title: 'Training Classes',
        active: false,
        arrowFlag: false,
        path: '/training-classes'
    },
    {
        id: 3,
        img: ELearning,
        title: 'e-Learning',
        active: false,
        arrowFlag: false,
        path: '/e-learning'
    },
    {
        id: 4,
        img: ELearning,
        title: 'Course Catalog',
        active: false,
        arrowFlag: true,
        path: '/course-catalog'
    },
    {
        id: 5,
        img: ELearning,
        title: 'Resources',
        active: false,
        arrowFlag: false,
        path: '/resources'
    },
    {
        id: 6,
        img: ELearning,
        title: 'Training Calendar',
        active: false,
        arrowFlag: false,
        path: '/training-calendar'
    },
];

const helperMenuItems = [
    {
        id: 7,
        img: ELearning,
        title: 'Help center',
        active: false,
        arrowFlag: false,
        path: '/dashboard'
    },
    {
        id: 8,
        img: ELearning,
        title: 'Settings',
        active: false,
        arrowFlag: false,
        path: '/training-classes'
    }
];

const trainingClassObj = {
    breadcrumbsItems: {
        backText: 'Completed class',
        content: 'DP-100T01: Designing and Implementing a Data Science Solution on Azure (Data Scientist)'
    },
    subtitleHighlight: [
        {
            name: 'Microsoft',
            color: '#ADD8E6'
        },
        {
            name: 'Public class',
            color: '#FFE7D0'
        }

    ],
    completeDetails: {
        date: 'Completed On : 24 Feb, 2023',
        img: UserImg,
        userName: 'Richard B'
    },
    title: 'DP-100T01: Designing and Implementing a Data Science Solution on Azure(Data Scientist)',
    previewStatus: {
        img: TickMark,
        text: 'Your Attendance:100%'
    },
    toggleBtnLists: [
        {
            id: 1,
            title: 'Last Day Evaluation',
            active: true,
            drowArrowFlag: false
        }, {
            id: 2,
            title: 'Buy Exam',
            active: false,
            drowArrowFlag: false
        },
        {
            id: 3,
            title: 'Access Digital Assets',
            active: false,
            drowArrowFlag: false
        },
        {
            id: 4,
            title: 'Class Recordings',
            active: false,
            drowArrowFlag: false
        },
        {
            id: 5,
            title: 'Additional Resources',
            active: false,
            drowArrowFlag: true
        }
    ]
}


const downloadCardObj = [
    {
        title: 'Claim your Badge',
        subtitle: 'Scan QR to download on Mobile Phone',
        img: QrScaner,
        btnText: 'Download',
        sharedImgFlag: false
    },
    {
        title: 'Download Certificate',
        subtitle: 'Download your certificate or share it to your social.',
        img: Certification,
        btnText: 'Download',
        sharedImgFlag: true
    }
]




export { commonImgObj, sideMenuItems, helperMenuItems, trainingClassObj, downloadCardObj }