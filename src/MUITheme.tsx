import {createTheme} from '@mui/material';


export const theme = createTheme({
    palette: {
        primary: {
            main: '#3cccdb',
        },
        secondary: {
            main: '#2BA8B2',
        },
        info: {
            main: '#A1DFFB',
        },
        error: {
            main: '#C33124',
        },
        warning: {
            main: '#F98365',
        },
        success: {
            main: '#88DF3E',
        },
        text: {
            primary: '#000000',
            secondary: '#ffffff',

        },
    },
    components: {
        MuiTextField: {
            variants: [
                {
                    props: {variant: 'standard', color: 'secondary'},
                    style: {
                        label: {
                            color: '#3cccdb'
                        },
                        '.MuiInputBase-colorSecondary': {
                            ':before': {
                                borderColor: '#fff'
                            },
                            input: {
                                color: '#fff'
                            }
                        }
                    },
                },
                {
                    props: {variant: 'standard', color: 'primary'},
                    style: {
                        label: {
                            color: '#3cccdb'
                        },
                        '.MuiInputBase-colorPrimary': {
                            ':before': {
                                borderColor: '#000'
                            },
                            input: {
                                fontSize: '1.5rem',
                                color: '#000'
                            }
                        }
                    },
                },
                {
                    props: {variant: 'outlined', color: 'secondary'},
                    style: {
                        height: '2.5rem',
                        label: {
                            color: '#3cccdb',
                            fontSize: '0.9rem'
                        },
                        '.MuiInputBase-colorSecondary': {
                            fontSize: '0.8rem',
                            input: {color: '#fff'},
                            fieldset: {
                                border: 'none'
                            }
                        }
                    },
                },


            ],
            styleOverrides: {
                root: {},
            },

        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    img: {
                        width: '150px',
                        height: '150px'
                    }
                },
            },
        }


    },
});
