import React from 'react';
import { Avatar, Box, Link, Stack, TextField, Typography } from '@mui/material';
import avatar from '../assets/images/avatar3.png';
import { useData } from './hooks/useData';

export function App() {
  const user = useData().userValues;

  return (
    <Stack

      direction="row"
      id="app-stack"
      border="2px black"

    >
      <Stack width="30%"
             height="inherit"
             sx={{ background: 'linear-gradient(1deg, #778899, #9E9E9E)' }}
             padding="2%"
             alignItems="left"
             gap={2}
      >
        <Box

          justifyContent="center"
          display="flex">
          <Avatar sx={{
            width: '100%',
            height: 'auto',
            boxShadow: '0 4px 8px rgba(177 247 255 / 80%)',
          }}
                  src={avatar}
          />
        </Box>
        <TextField variant="standard" color="secondary"
                   label={user.nameLabel}
                   value={`${user.firstName} ${user.lastName}`}
                   aria-readonly="true"
        />
        <Stack gap={1}>
          <TextField variant="standard"
                     color="secondary"
                     aria-readonly="true"
                     value={user.contactsLabel}
          />
          {
            user.contacts.map((contact, index) =>
              <TextField key={`contacts-${index}`}
                         label={contact.label}
                         value={contact.value}
                         variant="outlined"
                         color="secondary"
                         aria-readonly="true"
                         InputLabelProps={{
                           variant: 'standard',
                         }}
              />,
            )
          }

        </Stack>
        <Stack gap={1}>
          <TextField variant="standard"
                     color="secondary"
                     aria-readonly="true"
                     value={user.skillsLabel}
          />
          <Stack direction="row"
                 useFlexGap
                 flexWrap="wrap"
                 marginLeft="10%"
                 spacing={{ xs: 1, sm: 2 }}>
            {user.skills.map((skill, index) =>
              <Box display="list-item" color="white" width="40%">
                <Typography key={`skills-${index}`}
                            color="text.secondary"

                            variant="caption"

                >
                  {skill}
                </Typography></Box>)}
          </Stack>
        </Stack>
        <Stack gap={1}>
          <TextField variant="standard"
                     color="secondary"
                     aria-readonly="true"
                     value="Other"
          />
          <Stack direction="row"
                 useFlexGap
                 flexWrap="wrap"
                 spacing={{ xs: 1, sm: 2 }}>
            <TextField
              label="repositories test projects"
              value="https://github.com/k-dev-web"
              InputProps={{
                endAdornment: (
                  <Link
                    href="https://github.com/k-dev-web?tab=repositories"
                    target="_blank"
                  >👉</Link>
                ),

              }}
              variant="outlined"
              color="secondary"
              aria-readonly="true"
              InputLabelProps={{
                variant: 'standard',
              }}
              fullWidth
            />
            <TextField
              label="web version cv"
              value="https://cv-2023.onrender.com"
              InputProps={{
                endAdornment: (
                  <Link
                    href="https://cv-2023.onrender.com/"
                    target="_blank"
                  >👉</Link>
                ),

              }}
              variant="outlined"
              color="secondary"
              aria-readonly="true"
              InputLabelProps={{
                variant: 'standard',
              }}
              fullWidth
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack width="70%"
             height="100%"
             padding="5%"
             gap={0.5}
      >
        <Box display="contents">
          <TextField variant="standard"
                     color="primary"
                     aria-readonly="true"
                     value={user.professionalSummaryLabel}
          />
          <Typography variant="caption" padding="2%">
            {user.professionalSummaryValue}
          </Typography>
        </Box>
        <Box display="contents">
          <TextField variant="standard"
                     color="primary"
                     aria-readonly="true"
                     value={user.workExperienceLabel}

          />
          {
            user.workExperienceValue.map((workExperience, index) =>
              <Stack key={`experience-${index}`} display="flex" direction="row"
                     justifyContent="space-between" padding="1% 2% 0 2%"
                     useFlexGap
                     flexWrap="wrap">
                <Typography variant="subtitle2" fontWeight="bold" left={0}>
                  {workExperience.nameOrganization}
                </Typography>
                <Typography variant="caption">
                  {workExperience.date}
                </Typography>
                <Typography variant="caption" width="100%">
                  {workExperience.description}
                </Typography>

              </Stack>)
          }


        </Box>
        <Box display="contents">
          <TextField variant="standard"
                     color="primary"
                     aria-readonly="true"
                     value={user.educationLabel}

          />
          {
            user.educationValue.map((education, index) =>
              <Stack key={`education-${index}`} display="flex" direction="row"
                     justifyContent="space-between" padding="1% 2% 0 2%"
                     useFlexGap
                     flexWrap="wrap">
                <Typography variant="subtitle2" fontWeight="bold" left={0} width="80%">
                  {education.nameOrganization}
                </Typography>
                <Typography variant="caption">
                  {education.date}
                </Typography>
                <Typography variant="caption" width="100%">
                  {education.description}
                </Typography>

              </Stack>)
          }


        </Box>
        <Box display="contents">
          <TextField variant="standard"
                     color="primary"
                     aria-readonly="true"
                     value={user.languageLabel}

          />
          <Box padding="1% 2% 0 2%">
            {
              user.languageValue.map((language, index) =>
                <Box key={`language-${index}`} display="list-item">
                  <Stack direction="row" gap={0.5} alignItems="center">

                    <Typography variant="subtitle2" left={0}>
                      {language.language}
                    </Typography>
                    <Box height="1px" width="10px" bgcolor="#000"></Box>
                    <Typography variant="caption">
                      {language.level}
                    </Typography>
                  </Stack>

                </Box>)
            }</Box>
        </Box>
      </Stack>
    </Stack>

  );
}


