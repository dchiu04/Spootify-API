let songList = [
  {
    "song_name": "Seals - Solo",
    "artist": "Theophilus London",
    "album": "Bebey",
    "genre": "Hip-Hop/Rap",
    "year": 2020
  },
  {
    "song_name": "If It Don't Work",
    "artist": "Carter Ace",
    "album": "If It Don't Work",
    "genre": "R&B/Soul",
    "year": 2010
  },
  {
    "song_name": "perfect timing",
    "artist": "col3trane x FKJ",
    "album": "sanitary delusions",
    "genre": "Dance/Electronic",
    "year": 2019
  },
  {
    "song_name": "Talk",
    "artist": "Noya Rao",
    "album": "Owls",
    "genre": "Dance/Electronic",
    "year": 2019
  },
  {
    "song_name": "Talk",
    "artist": "Noya Rao",
    "album": "Owls",
    "genre": "Dance/Electronic",
    "year": 2019
  }
]

let music_note_icon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-music-note-beamed" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
                        <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
                        </svg>`

$("#searchbtn").click(function (e) {
  // empty previous search results
  $("tbody").empty()
  let search_by = $(".search_by_selection").text()
  let search_term = $("#search").val()
  if ($(".search_by_selection").length > 0) {
    console.log("search by", search_by)
    get_search_results(search_by, search_term)
  } else {
    console.log("there is no search by selection")
    get_search_results("song", search_term)
  }
})

$(".dropdown-content li").click(function (e) {
  console.log("clicked list item", $(e.target).text())
  let search_by = $(e.target).text()

  // remove class search_by_selection from previously clicked list elements before 
  // adding to the newly clicked list element
  $(".dropdown-content li").removeClass("search_by_selection")
  $(e.target).addClass("search_by_selection")
  $("#search")[0].placeholder = `search ${search_by}`
})

function load(data) {
  if (data) {
    $("#search_table").removeClass("d-none")
    $("#search_table th").removeClass("d-none")
    for (let i = 0; i < data.length; i++) {
      $("tbody").append(
        `
          <tr>
          <th scope="row">${music_note_icon}</th>
          <td>${data[i].song_name}</td>
          <td>${data[i].artist}</td>
          <td>${data[i].genre}</td>
          <td>${data[i].album}</td>
          <td>${data[i].year}</td>
          </tr>
        `
      )
    }
  } else {
    $("#searchResults").append(
      `<div class="list-group-item d-flex justify-content-center flex-wrap">
          <div>
              <span>${data}</span>
          </div>
        </div>`)
  }
}

function results_not_found(search_by, search_term) {
  console.log("Results Not Found")
  console.log("search by", search_by, "search_term", search_term)
  $("#search_table").removeClass("d-none")
  $("#search_table th").addClass("d-none")
  if (search_by == "all") {
    $("tbody").append(
      `<tr>
      <th scope="row">${music_note_icon}</th>
      <td>No results found for ${search_term} </td>
     </tr>`
    )
  } else {
    $("tbody").append(
      `<tr>
      <th scope="row">${music_note_icon}</th>
      <td>No results found for <b>${search_by}</b> ${search_term} </td>
      </tr>`
    )
  }
}


