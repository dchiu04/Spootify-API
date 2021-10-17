function get_search_results(search_by, search_term) {
    fetch(`https://dry-sea-70637.herokuapp.com/music/${search_by}/${search_term}`)
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            console.log(data.message)
            console.log("search_by", search_by, "search_term", search_term)
            results_not_found(search_by, search_term)
        } else {
            console.log("Result", data)
            load(data)
        }
    })
    .catch(error => {
        console.log("ERROR SEARCHING")
        console.log(error) 
        
        results_not_found(search_by, search_term)
    })
    
    console.log("END OF FUNCTION GET_DATA")
}

function create_user(user) {
    console.log(user.user_name, user.password)

    if (user.user_name && user.password) {
    // TODO: enter pswd and username validation
    fetch(`https://dry-sea-70637.herokuapp.com/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => { 
            
            $("#un-msg").removeClass("d-none")
            if (data.status == 200)
                $("#un-msg").append(`<p>username successfully created</p>`)
            else if (data.status == 400) 
                $("#un-msg").append(`<p>${data.message}</p>`)
            else if (data.status == 500)
                $("#un-msg").append(`<p>${data.message}</p>`)
            await_show_msg($("#un-msg"))
            $("#un-msg").removeClass("d-none")

        })
        .catch(error => console.log('Error:', error))
    } else if (!user.user_name) {
        $("#un-msg").removeClass("d-none")
        $("#un-msg").append(`<p>username cannot be left empty</p>`)
        await_show_msg($("#un-msg"))
        // $("#un-msg").removeClass("d-none")
    } else if (!user.password){
        $("#pwd-msg").removeClass("d-none")
        $("#pwd-msg").append(`<p>password cannot be left empty</p>`)
        await_show_msg($("#pwd-msg"))
        // $("#pwd-msg").removeClass("d-none")
    }
}

function login_as_user(user, action) {
    
    fetch(`https://dry-sea-70637.herokuapp.com/user/${user.user_name}`)
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            console.log(data.message)
        }
        console.log("Result", data)
        window.localStorage.setItem("name", user.user_name)
        action(data);       
    })
    .catch(error => {
        console.log("ERROR SEARCHING")
        console.log(error) 
    })
    
    console.log("END OF FUNCTION GET_USER DATA")
}


function load_all(action) {
    fetch(`https://dry-sea-70637.herokuapp.com/music`)
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            console.log(data.message)   
        }

        action(data);
    })
    .catch(error => {
        console.log("ERROR SEARCHING")
        console.log(error) 
    })

    
    console.log("END OF FUNCTION GET_USER DATA")
}


