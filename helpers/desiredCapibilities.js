exports.options = {
	 desiredCapabilities: {
			platformName: "Android",
			platformVersion: "8.0",
			deviceName: "Android Emulator",
			appPackage: "com.example.android.uamp",
			appActivity: "com.example.android.uamp.ui.MusicPlayerActivity",
			automationName: "UiAutomator2",
			avdReadyTimeout: '2000'
	 },
	 host: 'localhost',
	 port: 4723
};