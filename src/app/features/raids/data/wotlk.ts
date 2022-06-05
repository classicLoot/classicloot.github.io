import { NbMenuItem } from "@nebular/theme";

export const wotlkRaidsMenu: NbMenuItem[] = [
    {
        title: 'Naxxramas',
        expanded: true,
        children: [
            {
                title: '10-man',
                link: '/raids/Naxx10'
            },
            {
                title: '25-man',
                link: '/raids/Naxx25'
            },
        ]
    },
    {
        title: 'The Eye of Eternity',
        expanded: true,
        children: [
            {
                title: '10-man',
                link: '/raids/TheEyeOfEternity10'
            },
            {
                title: '25-man',
                link: '/raids/TheEyeOfEternity25'
            },
        ]
    },
    {
        title: 'Obsidian Sanctum',
        expanded: true,
        children: [
            {
                title: '10-man',
                link: '/raids/ObsidianSanctum10'
            },
            {
                title: '25-man',
                link: '/raids/ObsidianSanctum25'
            },
        ]
    }
];