const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        unique: true
    },
    preferences : {
        type : Object,
        required: true
    },
    preferencesTheme : {
        type : String,
        enum : ['light', 'dark'],
        default: 'light'
    },
    preferencesLanguage : {
        type : String,
        default: 'en'
    },
    preferencesNotifications : {
        type : Object
    },
    preferencesNotificationsEmail : {
        type : Boolean,
        default: true
    },
    preferencesNotificationsSMS : {
        type : Boolean,
        default: true
    },
});

const userPreference = mongoose.model('userPreferece', userSchema);
module.exports = userPreference;