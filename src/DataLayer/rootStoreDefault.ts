export const userStoreDefault = {
  email: undefined,
  familyName: undefined,
  givenName: undefined,
  loginSource: undefined,
  phone: undefined,
  picture: undefined,
  roles: undefined,
  status: undefined,
  uid: undefined,
  uidExternal: undefined,
  userName: undefined,
  webToken: null,
}

export const rootStoreDefault = {
  analyticsID: null,
  componentsState: {
    questionsSlideNumber: 0,
    isModalFrameVisible: false,
    isSideNavVisible: false,
    isLoaderOverlayVisible: false,
    isDocumentAdded: false,
    isCourseStarted: false,
    isOAuthFacebookScriptLoaded: false,
    isOAuthVKontakteScriptLoaded: false,
    isOAuthGoogleScriptLoaded: false,
    oAuthStage: null,
    modalFrames: [
      {
        childName: 'AuthUser',
        isActive: true,
        childProps: {
          scenario: { branch: 'signInManually', step: '' },
        },
      },
    ],
  },
  courses: [],
  documents: [],
  globalVars: {
    numberQuestionsInSlide: 2,
  },
  forms: {
    userNameAuth: '',
    emailAuth: '',
    passwordAuth: '',
    passwordAuth2: '',
    searchInput: '',
    firstName: '',
    middleName: '',
    lastName: '',
    sendTo: '',
    sendCc: '',
  },
  isLoaded: {
    isLoadedGlobalVars: false,
    isLoadedCourses: false,
    mediaLoading: {},
  },
  language: 'ru',
  user: userStoreDefault,
}
