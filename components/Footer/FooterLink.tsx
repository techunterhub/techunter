'use client';

import Link from 'next/link';

interface LinkData {
  title: string;
  route: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkData[];
}

const FooterLinks = () => {
  const sections: FooterLinksProps[] = [
    {
      title: 'Products',
      links: [
        {
          title: 'Github Profile Maker',
          route: '/github-profile-maker',
        },
        {
          title: 'Techunter GPT',
          route: '/techunter-gpt',
        },
      ],
    },
    {
      title: 'Technologies Used',
      links: [
        {
          title: 'Next JS',
          route: '/next-js',
        },
        {
          title: 'React JS',
          route: '/react-js',
        },
      ],
    },
    {
      title: 'Learn',
      links: [
        {
          title: 'Schedule a Demo',
          route: '/connect',
        },
        {
          title: 'Guides',
          route: '/guides',
        },
        {
          title: 'Blogs',
          route: '/blog',
        },
        {
          title: 'Tools',
          route: '/tools',
        },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        {
          title: 'Discord',
          route: '/discord',
        },
        {
          title: 'Github',
          route: '/github',
        },
        {
          title: 'Messenger',
          route: '/messenger',
        },
        {
          title: 'Telegram',
          route: '/telegram',
        },
      ],
    },
    {
      title: 'Partners',
      links: [
        {
          title: 'Become a Partner',
          route: '/partner-portal',
        },
      ],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 font-montserrat">
        {sections.map((section: FooterLinksProps, index: number) => (
          <div key={index}>
            <h3 className="text-lg font-bold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link:LinkData, i:number) => (
                <li key={i}>
                  <Link href={link.route} className="text-gray-700">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
