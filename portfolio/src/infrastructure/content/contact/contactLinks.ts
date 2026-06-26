import type { ContactLink } from '@/domain/contact/types/ContactLink'

export const contactLinks: ContactLink[] = [
    {
        label: 'GitHub',
        url: 'https://github.com/YOUR_USERNAME',
        description: 'Open source projects and contributions'
    },

    {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/YOUR_USERNAME',
        description: 'Professional profile'
    },

    {
        label: 'Email',
        url: 'mailto:your@email.com',
        description: 'Direct contact'
    }
]