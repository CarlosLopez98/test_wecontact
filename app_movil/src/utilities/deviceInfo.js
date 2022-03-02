const deviceInfo = {
  getDeviceId: () => Expo.Constants.deviceId || Expo.Constants.installationId,
};

export default deviceInfo;