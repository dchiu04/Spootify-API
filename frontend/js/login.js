
let users_list = [
    {
        "username":"sa-eeda",
        "psw":"123"
    }
]

let un_taken_msg = "<p>sorry, this username is already being used<p>"
let pwd_invalid = "<p>your password is invalid<p>"

$("#sign_up_submit").click(function (e) {
    e.preventDefault()
    console.log("sign up submit")
    let signup_header = $("#sign-up-header")
    let signin_header = $("#sign-in-header")
    if (signin_header.hasClass("d-none")) {
        console.log("sign up")
        login("Sign up")
    } else {
        signin_header.addClass("d-none")
        console.log("HIDING SIGN IN HEADER")
        signup_header.removeClass("d-none")
        clear_inputs()
    }
})

$("#sign_in_submit").click(function (e) {
    e.preventDefault()
    console.log("sign in submit")
    let signup_header = $("#sign-up-header")
    let signin_header = $("#sign-in-header")
    if (signup_header.hasClass("d-none")) {
        console.log("sign in")
        login("Sign in")
    } else {
        signup_header.addClass("d-none")
        console.log("HIDING SIGN UP HEADER")
        signin_header.removeClass("d-none")
        clear_inputs()
    }
})

$(".cancelbtn").click(function (e) {
   clear_inputs()
})


function login(op) {
    let username = $("input[name='uname']").val()
    let password = $("input[name='psw']").val()
    const user = {user_name:username , password: password}
    if (op == "Sign up")
        create_user(user)
    // else if (op == "Sign up") 
    login_as_user(user, () => {
        let bn_pathname = window.location.href;
        let en_pathname = bn_pathname.replace("/login.html", "/user_page.html") 
        // load_library($("#favourites"), data)
        window.location.replace(en_pathname)
    });

        
    // if (username && psw) {
    //     console.log(un_availability(username))
    //     if (un_availability(username)) {
    //         user = {
    //             "username":username,
    //             "psw":psw
    //         }
    //         // users_list.push(user)
         
    //     } else {
    //         $("#un-msg").removeClass("d-none")
    //         $("#un-msg").append(`<p>username already taken</p>`)
    //         await_show_msg()
    //         ("un-msg").removeClass("d-none")
    //     }
    // }
    // console.log("USER", user.username, "INSERTED")
}

function clear_inputs() {
    $("input[name='uname']").val('')
    $("input[name='psw']").val('')
}

async function await_show_msg(elem) {
    await sleep(2000)
    elem.addClass("d-none")
    elem.empty()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function un_availability(username) {
    for (let i = 0; i < users_list.length; i++) {
        if (users_list[i].username == username) {
            return false
        } 
    }   
    return true
}

function print_list() {
    for (let i = 0; i < users_list.length; i++) {
        console.log("USER", users_list[i].username, "PSW", users_list[i].psw)
    }
}


