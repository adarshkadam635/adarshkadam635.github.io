import type { Metadata, Viewport } from 'next';
import { Fraunces } from 'next/font/google';
import { siteDescription, siteKeywords, siteName, siteTitle, siteUrl } from '@/lib/site';
import { certifications, education, experiences, profile, projects, skills } from '@/data/portfolio';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display', style: ['italic', 'normal'], weight: ['500', '600'] });

const ogImageAlt = 'Adarsh Kadam — AI Engineer specializing in Agentic AI, Generative AI and RAG systems';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Adarsh Kadam'
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: 'technology',
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  alternates: {
    canonical: '/'
  },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
    firstName: 'Adarsh',
    lastName: 'Kadam',
    username: 'adarshkadam635',
    images: [{ url: '/og.png', width: 1200, height: 630, type: 'image/png', alt: ogImageAlt }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/og.png', alt: ogImageAlt }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: '#020617',
  colorScheme: 'dark'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personId = `${siteUrl}/#person`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: profile.name,
        url: siteUrl,
        image: `${siteUrl}/profile.png`,
        jobTitle: 'AI Engineer',
        description: profile.summary,
        email: profile.contact.email,
        telephone: profile.contact.phone,
        address: { '@type': 'PostalAddress', addressCountry: 'IN' },
        sameAs: [profile.contact.linkedin, profile.contact.github],
        knowsAbout: Object.values(skills).flat(),
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: education.institution,
          address: { '@type': 'PostalAddress', addressLocality: education.location }
        },
        worksFor: experiences.map((experience) => ({ '@type': 'Organization', name: experience.company })),
        hasCredential: certifications.map((credential) => ({
          '@type': 'EducationalOccupationalCredential',
          name: credential
        }))
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: 'en',
        publisher: { '@id': personId }
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': personId },
        mainEntity: { '@id': personId }
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#projects`,
        name: 'AI engineering projects by Adarsh Kadam',
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            url: `${siteUrl}/#projects`,
            genre: project.category,
            keywords: project.tech.join(', '),
            author: { '@id': personId }
          }
        }))
      }
    ]
  };

  return (
    <html lang="en" className={fraunces.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
