Trong bài viết này, tôi muốn cho bạn thấy cách build front và back-end của một website sử dụng NodeJS làm back-end. Chúng ta sẽ dùng node để tạo các endpoint, và setup một database bằng format JSON. Sau đó, tạo 1 ứng dụng trên front-end sử dụng React để post và database, cũng như là truy vấn data từ nó.
Ví dụ, tôi sẽ tạo 1 guestbook để user có thể submit tên của họ kèm 1 tin nhắn. Bởi vì user sẽ không cần phải login, hoặc nhận bất kỳ data nào, tôi sẽ không cần phải lưu trữ bất kỳ cái gì. Sau đây lác cách chúng ta sẽ làm:
Về cơ bản là làm tất cả trên cùng 1 page, bao gồm 1 cái form để submit message vào guestbook. Để làm nó hoạt động, chúng ta sẽ bắt đầu bằng việc tạo ra các endpoint cho các request POST và GET rồi setup database, deploy nó, vì vậy có thể tạo thành ứng dụng React và kéo data từ API về.
Sau đây là danh sách các thứ tôi sẽ làm. Bạn có thể làm cách khác. Nhưng cách này hợp lý đối với tôi, bởi vì mỗi bước sẽ làm nền tảng cho bước tiếp theo. Trong suốt bài tập này, tôi sẽ đi từng bước chi tiết.
Để xem kết quả, đây là link của nó
http://ethan.jarrell.webdeveloper.surge.sh/GuestBook
BƯỚC 1:
Database bao gồm 2 item:
Tên của user
Message của user
Nếu bạn chưa xong, hãy install MongoDB và chạy nó trên cổng 27017. Sau đó, chúng ta sẽ tạo database trên command line.
> Show dbs
> Use signatures
switched to db signatures
> show collections
> db.createCollection(guest_signatures)
Xong, đổi sang text editor và tạo các model cho database
BƯỚC 2:
Dùng command line để bắt đầu tạo 1 ứng dụng nhanh. Tạo 1 thư mục mới, dùng npm init để tạo app, nó sẽ tự động tạo file pkg.JSON
Đây là app cơ bản nhất, chúng ta chỉ cần 2 file khác, một file dùng làm các route. Tôi cũng sẽ include tất cả các dependency trong file này. File còn lãi dùng cho các model/schema. Chúng ta sẽ giải quyết file về model trước. Nó nên giống thế này:
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const signatureSchema = new Schema({
  guestSignature: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  message: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})
const Signature = mongoose.model('Signature', signatureSchema);
module.exports = Signature;
BƯỚC 3:
Trước khi tạo endpoint ở đây, hãy list ra danh sách các dependency bên trên cùng của file. Chúng ta cũng không cần quá nhiều.
//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./models/signature.js')
const app = express();
const url = 'mongodb://localhost:27017/signatures';
//=========================//
Bạn không cần phải connect với mongoose, vì vậy thoải mái dùng MongoClient nếu thích. Chúng ta cũng dùng Signature schema được tạo ở bước trước.
Xong, giờ tạo các endpoint. Chỉ cần 1 model để read và write vào, vì vậy chúng ta sẽ có 2 endpoint
Ở thư mục root "/", chúng ta sẽ redirect đến API
API, chúng ta gọi "/api/signatures" để read/write vào
Chúng ta sẽ gọi GET và POST từ API endpoint sử dụng find() và create(). Và kết quả trả về sẽ là JSON, dễ dàng sử dụng data từ React. Đây là các endpoint:
//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
});
//==========================//
//====GET ALL SIGNATURES===//
app.get('/api/signatures', function(req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
//==========================//
//====POST NEW SIGNATURE===//
app.post('/api/signatures', function(req, res) {
  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageofGuest,
  }).then(signature => {
    res.json(signature)
  });
});
//==========================//
Có 1 cái tôi quên nhắc đến là req.body.SignatureOfGuest và req.body.MessageofGuest. Mọi thứ trong đoạn trên đều đề cập đến những thứ mà chúng ta đã tạo như database, collections và các model. Nó cũng nhắc đến tên của các trường mà chúng ta sẽ sử dụng trong React, input sẽ dùng tên SignatureOfGuest và MessageofGuest. Vì vậy, chúng ta cần nhớ nó trong đầu nhé.
BƯỚC 4:
Giờ chúng ta sẽ kết nối vào local database từ text editor.
const url = 'mongodb://localhost:27017/signatures';
Chúng ta sẽ viết một function sử dụng constant này để kết nối đến local database
//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
//==========================//
Để đảm bảo mọi thứ hoạt động đúng, chúng ta cũng cần add một cái app.listen vào cuối file.
Ở điểm này, đây là ý tưởng tốt để tạm dừng và đảm bảo rằng các endpoint và kết nối local có hoạt động. Bạn có thể làm nó bằng cách dùng Postman để tạo các request GET/POST. Nếu các endpoint hoặc kết nối không làm việc, bạn nên chẩn đoán vấn đề dựa trên các báo lỗi nhận được. Nếu mọi thứ ok, nó sẽ cho phép read/write vào database.
Một khi mọi thứ đã ok, cũng là lúc tạo 1 account trên Heroku và Mlab.
BƯỚC 5:
Đăng ký một tài khoản Heroku here. Tạo một tài khoản mLabhere.
BƯỚC 6:
Sau khi tạo tài khoản mLab, click vào nút Create New và chọn Single node sandbox. Có nhiều lựa chọn tốn phí, nhưng sandbox có rất nhiều thứ để bắt đầu. Đặt tên cho database, tôi dùng cùng tên với database mLab
Tạo xong database, bạn có thể bắt đầu một collection mới
Bạn cũng sẽ cần add một User hoặc nhóm các User kết nối vào database. Nếu không làm bước này mà add chính bạn như là User thì khi truy cập sẽ bị fail khi deploy.
Xong, database đang chạy trên mLab. Khi bạn click và database sẽ thấy vài thông tin bên trên cùng nói rõ cách kết nối kiểu như:
mongodb://<dbuser>:<dbpassword>@ds79234.mlab.com:9234/signatures
Url của database phải bao gồm username và password, thay chúng bằng username và password của bạn.
Quay trở lại text editor, đang có 1 db chạy local tại:
const url = 'mongodb://localhost:27017/signatures';
Để thay đổi kết nối thành mLab, chỉ cần edit biến trong url với các thông tin của mLab, giống như vầy:
const url = 'mongodb://username:password@ds79234.mlab.com:9234/signatures';
Tuy nhiên, nếu bạn hay dùng github hoặc một nơi công cộng khác và không muốn lộ username/password? Hãy set một biến môi trường trong command line kiểu như:
export MONGOLAB_URI="mongodb://username:password@ds79234.mlab.com:9234/signatures';
Dĩ nhiên, thay username/password/numbers và database thành của bạn. Giờ quay lại text editor và đổi biến url như sau:
const url = process.env.MONGOLAB_URI;
Thay đổi app.listen qua cổng mới:
app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');
Với cách này sẽ chạy từ mongolab, nhưng nếu nó không thể tạo kết nối, nó sẽ chạy trên cổng mặc định là 3000. Câu lệnh trên cũng cho phép bạn chạy app trên local hoặc từ mlab, trong trường hợp bạn muốn test phiên bản local.
Bước cuối cùng là tạo kết nối để triển khai code của bạn trên Heroku. Để làm việc này, hãy sử dụng câu lệnh sau trên command line:
heroku config:set MONGOLAB_URI=mongodb://username:password@ds79234.mlab.com:9234/signatures
Xong, ứng dụng của bạn đã triển khai thành công trên Heroku. Nếu xảy ra lỗi, check xem nó có đang chạy local hay không, nếu có, có thể nó là lỗi kết nối.
BƯỚC 7:
Dùng lệnh ‘create-react-app’ trên command line để tạo app React.
BƯỚC 8:
Bây giờ chúng ta tạo form với input để user nhập thông tin. Sau đây là cách làm.
Trong một component mới, tạo class mới.
class GuestBook extends Component
2. Sử dụng một constructor và super method.
constructor(props) {
    super(props);
3. Sử dụng keyword này để handle tên user và message rồi bind nó vào (this)
this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);
4. Set trạng thái của tên và message của guest thành chuỗi rỗng.
this.state = {
      SignatureOfGuest: "",
      MessageofGuest: "",
    };
5. Lắn nghe trạng thái của name và message từ các sức kiện.
handleSignatureOfGuest(event) {
    this.setState({ SignatureOfGuest: event.target.value });
  }
  handleMessageofGuest(event) {
      this.setState({ MessageofGuest: event.target.value });
    }
6. Tạo một function thay đổi name và message theo giá trị của input.
addToGuestBook = event => {
    event.preventDefault();
    this.setState({
      SignatureOfGuest: event.target.value,
      MessageofGuest: event.target.value,
});
7. Tôi sử dụng axios để post data vào database trên heroku.
axios.post('<your-heroku-url here>', {
        SignatureOfGuest: this.state.SignatureOfGuest,
        MessageofGuest: this.state.MessageofGuest,
      })
    .then(response => {
      console.log(response, 'Signature added!');
    })
    .catch(err => {
      console.log(err, 'Signature not added, try again');
    });
8. Sau đó tôi reset trạng thái của input thành empty.
this.setState({
      SignatureOfGuest: "",
      MessageofGuest: "",
    });
};
9. Cuối cùng, chúng ta tạo method để render ra page cùng với các trường. Bên trong các trường, chúng ta đặt onChange, name, value. onChange sẽ được set vào các trường this.handlemessage hoặc this.handlename.
<input
           onChange={this.handleSignatureOfGuest}
           name="SignatureOfGuest"
           className="NameinputForm"
           value={this.state.SignatureOfGuest}
           placeholder="Enter your name"
            />
  <textarea
              onChange={this.handleMessageofGuest}
              name="MessageofGuest"
              className="MessageinputForm"
              value={this.state.MessageofGuest}
              placeholder="Type a message"
               />
10. Gắn nút submit
<button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
              >
            Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
            </button>
BƯỚC 9:
Bây giờ chúng ta tạo một component khác để render data đã lưu trong database. Sau đó có thể export component đó và đặt vào guestbook page.
Bên trong component chúng ta sẽ làm như sau:
Trong một component mới, tạo 1 class mới.
class GuestNames extends Component {
2. Chúng ta sử dụng constructor và super method.
constructor(props) {
    super(props);
3. Dùng this.state để set trạng thái của message thành empty.
this.state = {
      messages: "",
    };
4. componentDidMount
componentDidMount() {
5. Fetch data từ database.
fetch('<your-heroku-url-goes-here>')
    .then(results => {
      return results.json();
6. Map data và trả về dữ liệu chúng ta muốn.
data.map((msg) => {
        return(
          <div key={msg.results}>
            <h3 className="h3msg">{msg.message}</h3>
<h2 className="h2sig">-{msg.guestSignature}</h2>
          </div>
7. Rồi giờ dùng this.setState để set trạng thái của message thành giá trị của data nhận về.
this.setState({messages: messages});
8. Render.
render() {
9. Chúng ta tạo JSX element để render data bên trong component. Tôi dùng this.state.messages bên trong tag <h6>.
return (<div className="guestdataContainer">
          <h6>Guestbook Messages</h6>
          {this.state.messages}
        </div>
10. Cuối cùng, export component để có thể dùng trên các page khác.
export default GuestNames;
