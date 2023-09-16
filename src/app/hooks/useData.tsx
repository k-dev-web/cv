import type {TUser} from "../types/types";

const userValues: TUser = {
    firstName: 'Konstantin',
    lastName: 'Korchagin',
    nameLabel: 'Name',
    contactsLabel: 'Contacts',
    contacts: [
        {
            label: 'mobile',
            value: '+380950230490'
        },
        {
            label: 'mail',
            value: 'redjonaldo@gmail.com'
        },
        {
            label: 'skype',
            value: 'redjonald'
        },
        {
            label: 'telegram',
            value: 'https://t.me/KWebDevelop'
        }
    ],
    skillsLabel: 'Additional Skills',
    skills: [
        'javascript',
        'typescript',
        'NodeJs',
        'Nest',
        'Angular',
        'React',
        'Ionic',
        'Postgres',
        'MySQL',
        'MongoDB'
    ],
    professionalSummaryLabel: 'Professional Summary',
    professionalSummaryValue: 'I’m a full stack web and mobile developer. I possess junior ' +
        'skills in Node js, Ionic, Angular, React, PostgreSQL, MySQL etc. I have a 3+ years of experience' +
        ' in developing and maintaining applications',
    educationLabel: 'Education',
    educationValue: [
        {
            date: '2016-2019',
            nameOrganization: 'STEP Computer Academy in Zaporizhia Region, Ukraine',
            description: 'Software development'
        },
        {
            date: '2005-2010',
            nameOrganization: 'Kiev Institute of Business and Technology',
            description: ' Bachelor\'s degree, Business Management'
        }
    ],
    languageLabel: 'Languages',
    languageValue: [
        {
            language: 'English',
            level: 'Pre-Intermediate/Intermediate'
        }, {
            language: 'Ukrainian',
            level: 'Advanced/Fluent'
        },
        {
            language: 'Russian',
            level: 'Advanced/Fluent'
        }
    ],
    workExperienceLabel: 'Work Experience',
    workExperienceValue: [
        {
            date: '2023',
            nameOrganization: 'freelance',
            description: 'Worked a front-end dev with using React Mui.' +
                ' Working in this project i`m refactored old logic and template, create and styling new custom component'
        },
        {
            date: '2022', nameOrganization: 'freelance',
            description: 'Worked on a front-end this project with using js, node, and build him with gulp on old packages.' +
                ' Working on all components application, integrating google map and create custom layouts logic and element'
        },
        {
            date: '2019-2023',
            nameOrganization: 'freelance',
            description: 'Creating Web and mobile applications with using javascript/typescript frameworks front and backends'
        },
        {
            date: '2015-2019',
            nameOrganization: 'Zaporozhye Region, Ukraine, EpicentrK',
            description: 'Sales Assistent. Seller of non-food products. Acceptance, maintenance and' +
                'arrangement of the products according to the planning schedule. Working' +
                'with buyers.'
        }
    ]
};

export function useData(): { userValues: TUser } {
    return {userValues};
}
