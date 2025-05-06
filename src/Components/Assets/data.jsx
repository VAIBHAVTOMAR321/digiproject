import lady from '../Assets/laddy1.jpg'
import lady2 from '../Assets/ladyy.jpg'
import { FaCentos } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";

export const navlinks = [
    { id:1 , title : 'Home', link: '#home'},
    { id:1 , title : 'About', link: '#about'},
    { id:1 , title : 'Service', link: '#service'},
]
export const about = [
    {
        number : '01.',
        head : 'Digital Marketing',
        text : 'Drive traffics, leads and conversion with our tailored strategies'
    },
    {
        number : '02.',
        head : 'Email Marketing',
        text : 'Nurture leads and foster customers relationships through personalized campaigns',
    },
    {
        number : '03.',
        head : 'SEO Optimization',
        text : 'Increase your search visibility and rank heigher on search engines'
    },
    {
        number : '04.',
        head : 'Social Media Management',
        text : 'Build a strong online presence and engage your audience',
    }
];

export const services = [
    {
        icon: <FaCentos />,
        head : 'Website Design & Development',
        desc : 'Creating custom websites tailored to business needs, including UI/UX design, frontend and backend development, and mobile responsiveness.',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'E-commerce Development',
        desc : ' Building online stores with secure payment gateways, inventory management, and seamless customer experiences using platforms like Shopify, WooCommerce, or custom solutions.',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Web Application Development',
        desc : 'Developing interactive and dynamic web applications, such as dashboards, booking systems, or SaaS platforms, using modern frameworks and technologies.',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'SEO & Digital Marketing',
        desc : 'Optimizing websites for search engines, improving rankings, and running online marketing campaigns through PPC, content marketing, and social media strategies.',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Website Maintenance & Support',
        desc : 'Providing ongoing updates, security patches, performance optimization, and technical support to ensure smooth website operation.',
        action : 'Explore',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Web Hosting & Domain Services',
        desc : 'Offering domain registration, secure hosting solutions, server management, and cloud-based hosting services for high availability and scalability.',
        action : 'Explore',
        link : <GrLinkNext />,
    },
];

export const more = [
    {
        head : 'Business Has Only Two Function - Marketing And Innovation',
        desc : 'Marketing is the process of creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large. Innovation is the process of translating an idea or invention into a good or service that creates value or for which customers will pay.',
    }
];

export const feedback =[
    {
      image: lady,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Optimize images, minimize HTTP requests, and use caching techniques to ensure fast loading times. A slow website can drive users away.',
    },
    {
      image: lady2,
      icon : <RiDoubleQuotesL />,
      name: 'CodeCraftX',
      company: 'Company',
      comment: 'Ensure your website is fully responsive and works seamlessly on different screen sizes. Test on multiple devices to improve the user experience.',
    },
    {
      image: lady,
      icon : <RiDoubleQuotesL />,
      name: 'PixelNexus',
      company: 'Company',
      comment: 'Implement proper meta tags, alt attributes for images, and structured data to improve search engine visibility. A well-optimized site attracts more organic traffic.',
    },
  
  ];

export const menuItems = [
    {
      title: 'How do i get mobile app',
      content: 'If you are asking how to get a mobile app for your website, here are three common approaches: Build a mobile app from scratch: This involves creating a new app using a programming language like Java, Swift, or React Native.Use a mobile app builder: These are tools that allow you to create an app without coding.Convert your website into an app: This involves using a tool to convert your website into a mobile app.'
    },
    {
      title: 'How do i contact support',
      content: 'You can contact our support team via email at support@example.com or call us at (123) 456-7890. Our support team is available 24/7 to assist you with any issues or questions you may have.'
    },
    {
        title: 'Ho do i track my growth',
        content: 'You can track your growth using our built-in analytics tools. These tools provide insights into your website traffic, user behavior, and conversion rates. Additionally, you can integrate third-party analytics platforms like Google Analytics for more detailed reports.'
      },
      {
        title: 'Does WEB AND WANDER SOLUTION have paid services',
        content: 'Yes, WEB AND WANDER SOLUTION offers a range of paid services including advanced SEO optimization, premium support, and custom development solutions. You can find more details about our paid services on our pricing page.'
      },
      {
        title: 'How fast do i see result after using Infigio',
        content: 'The time it takes to see results can vary depending on the specific services you are using and your business goals. Generally, you can expect to see initial improvements within a few weeks, with more significant results over the course of several months.'
      },
    {
      title: 'Can i use WEB AND WANDER SOLUTION for free',
      content: 'Yes, WEB AND WANDER SOLUTION offers a free plan that includes basic features to help you get started. You can upgrade to a paid plan at any time to access additional features and services.'
    }
  ];