import axios from 'axios';
const MAIL_API_BACK_URL = "http://localhost:3001/sendmail";
class sendMailService {
    sendMail(maildetail){
        console.log(maildetail);
        return axios.post(MAIL_API_BACK_URL, maildetail);
    }
}
export default new sendMailService();