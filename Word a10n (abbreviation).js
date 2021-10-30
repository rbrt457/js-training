function abbreviate(string) {
    console.log(string.replace(/\B\w{2,}\B/g, match => match.length))
}
abbreviate('elephant-rides are really fun')