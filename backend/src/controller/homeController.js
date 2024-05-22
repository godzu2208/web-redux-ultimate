import userService from '../service/userService';

const handleHelloWord = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = async (req, res) => {
    //model => get data from database
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });
}
// 22/05/2024
const handleCreateNewUser = (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    userService.createNewUser(email, password, username);
    return res.redirect("/user");

}

const handleDelteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    userData = user;

    return res.render("user-update.ejs", { userData });
}

const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;

    await userService.updateUserInfor(email, username, id);

    return res.redirect("/user");

}

const handleUserGetAPI = async (req, res) => {
    setTimeout(async () => {
        let userList = await userService.getUserList();
        return res.status(200).json(userList);
    }, 200)

}


const handleDelteUserAPI = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.status(200).json({
        message: `User with the id = ${req.params.id} is deleted successfully!`,
        errCode: 0
    })
}

// const handleCreateNewUserAPI = async (req, res) => {
//     let email = req.body.email;
//     let password = req.body.password;
//     let username = req.body.username;

//     setTimeout(async () => {
//         await userService.createNewUser(email, password, username);

//         return res.status(200).json({
//             message: `A new User is created successfully!`,
//             errCode: 0
//         })
//     }, 5000)
// }

const handleCreateNewUserAPI = async (req, res) => {
    try {
        console.log(req.body)
        const { email, password, username } = req.body;

        // Kiểm tra nếu các trường bắt buộc bị thiếu
        if (!email || !password || !username) {
            return res.status(400).json({
                message: 'Missing fields',
                errCode: 1
            });
        }

        // Gọi hàm tạo người dùng mới từ userService
        await userService.createNewUser(email, password, username);

        // Trả về phản hồi thành công
        return res.status(200).json({
            message: 'A new User is created successfully!',
            errCode: 0
        });
    } catch (error) {
        // Bắt lỗi và trả về phản hồi lỗi
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            errCode: 2
        });
    }
};

module.exports = {
    handleHelloWord, handleUserPage, handleCreateNewUser, handleDelteUser, getUpdateUserPage,
    handleUpdateUser, handleUserGetAPI, handleDelteUserAPI, handleCreateNewUserAPI
}