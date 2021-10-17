

let music_note_icon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-music-note-beamed" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                        <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                        </svg>`

function load_library(elem, lib="") {
    console.log(localStorage.getItem('name'));
    let user = {
            user_name: localStorage.getItem('name'),
            password: '*'
        }
    login_as_user(user, (library) => {
        for (let i = 0; i < library.length; i++) {
            elem.append(`
            <tr>
            <th scope="row">${music_note_icon}</th>
            <td>${library[i].song_name}</td>
            <td>${library[i].artist}</td>
            <td>${library[i].genre}</td>
            <td>${library[i].album}</td>
            <td>${library[i].year}</td>
            </tr>`)
        }
    })
}

// load_all(library => {
//     console.log(library);
//     for (let i = 0; i < library.length; i++) {
//         $("#all_songs tbody").append(`
//         <tr>
//         <th scope="row">${music_note_icon}</th>
//         <td>${library[i].song_name}</td>
//         <td>${library[i].artist}</td>
//         <td>${library[i].genre}</td>
//         <td>${library[i].album}</td>
//         <td>${library[i].year}</td>
//         </tr>`)
//     }
// }); 

// load_all(library => {
//     console.log(library);
//     for (let i = 0; i < library.length; i++) {
//         $("#favourites tbody").append(`
//         <tr>
//         <th scope="row">${music_note_icon}</th>
//         <td>${library[i].song_name}</td>
//         <td>${library[i].artist}</td>
//         <td>${library[i].genre}</td>
//         <td>${library[i].album}</td>
//         <td>${library[i].year}</td>
//         </tr>`)
//     }
// })



 