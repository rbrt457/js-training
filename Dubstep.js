function songDecoder(song){
    song = song.replace(/(WUB)+/g," ").trim()
    console.log(song)
}
songDecoder('A B C')