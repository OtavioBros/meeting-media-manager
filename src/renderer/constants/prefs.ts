const PREFS = {
  app: {
    autoOpenFolderWhenDone: false,
    autoQuitWhenDone: false,
    autoRunAtBoot: false,
    autoStartSync: false,
    congregationName: null,
    disableHardwareAcceleration: false,
    localAppLang: null,
    localOutputPath: null,
    obs: {
      enable: false,
      port: null,
      password: null,
      mediaScene: null,
      cameraScene: null,
      useV4: true,
    },
    offline: false,
    outputFolderDateFormat: 'YYYY-MM-DD',
    theme: 'system',
  },
  cong: {
    server: null,
    port: null,
    user: null,
    password: null,
    dir: null,
  },
  media: {
    enableMediaDisplayButton: false,
    enableMp4Conversion: false,
    enablePp: false,
    enableVlcPlaylistCreation: false,
    excludeLffi: false,
    excludeLffiImages: false,
    excludeTh: false,
    hideMediaLogo: false,
    hideWinAfterMedia: false,
    keepOriginalsAfterConversion: false,
    lang: null,
    langUpdatedLast: null,
    maxRes: '720p',
    mediaWinShortcut: 'Alt+Z',
    ppBackward: null,
    ppForward: null,
    preferredOutput: 'window',
    presentShortcut: 'Alt+D',
  },
  meeting: {
    enableMusicButton: false,
    enableMusicFadeOut: false,
    musicFadeOutTime: 5,
    musicFadeOutType: 'smart',
    musicVolume: 100,
    mwDay: null,
    mwStartTime: null,
    shuffleShortcut: 'Alt+K',
    specialCong: false,
    weDay: null,
    weStartTime: null,
  },
}

const FORCABLE = [
  'app.congregationName',
  'app.obs.cameraScene',
  'app.obs.enable',
  'app.obs.mediaScene',
  'app.obs.password',
  'app.obs.port',
  'app.outputFolderDateFormat',
  'media.enableMediaDisplayButton',
  'media.enableMp4Conversion',
  'media.enablePp',
  'media.enableVlcPlaylistCreation',
  'media.excludeLffi',
  'media.excludeLffiImages',
  'media.excludeTh',
  'media.hideMediaLogo',
  'media.keepOriginalsAfterConversion',
  'media.lang',
  'media.maxRes',
  'media.ppBackward',
  'media.ppForward',
  'media.preferredOutput',
  'meeting.enableMusicButton',
  'meeting.enableMusicFadeOut',
  'meeting.musicFadeOutTime',
  'meeting.musicFadeOutType',
  'meeting.musicVolume',
  'meeting.mwDay',
  'meeting.mwStartTime',
  'meeting.weDay',
  'meeting.weStartTime',
]

module.exports = {
  PREFS,
  FORCABLE,
}