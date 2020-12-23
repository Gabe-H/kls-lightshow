import jsonData from './data/whitelist.json';

const loadData = () => JSON.parse(JSON.stringify(jsonData));
const whiteEmails = loadData().emails

export default function checkEmail(testSession) {
  if (testSession) {
    var testEmail = testSession.user.email
    var isWhiteEmail = false
  
    for (var whiteEmail of whiteEmails) {
      if (testEmail == whiteEmail)
        isWhiteEmail = true
    }
    return isWhiteEmail

  } else {
    return false
  }
}