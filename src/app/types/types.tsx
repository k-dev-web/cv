export type TUser = {

    firstName: string,
    lastName: string,
    nameLabel: string,
    contactsLabel: string,
    contacts: TContacts[],
    skillsLabel: string,
    skills: string[],
    professionalSummaryLabel: string;
    professionalSummaryValue: string;
    workExperienceLabel: string;
    workExperienceValue: TWorkExperienceItem[];
    educationLabel: string;
    educationValue: TEducationItem[];
    languageLabel: string;
    languageValue: TLanguageItem[]
};

export type TContacts = { label: string, value: string }
export type TWorkExperienceItem = { date: string, nameOrganization: string, description: string }
export type TEducationItem = { date: string, nameOrganization: string, description: string }
export type TLanguageItem = { language: string, level: string }


