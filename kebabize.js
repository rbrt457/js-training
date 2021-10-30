function kebabize(str) {
   if (str !== ''){
        let kebab = []
        str = str.match(/[a-z A-Z]/gui)
            for(let i = 0; i < str.length; i++){
                if(str[i] == str[i].toUpperCase() && str[i] !== str[0]){
                    kebab.push('-',str[i])
                }
                else  {
                    kebab.push(str[i])
                }
            }
        kebab = kebab.join('').toLowerCase()
        console.log(kebab)
        return kebab
   }
   else {
       return ''
   }

}
kebabize('myCamelHas3Humps')
kebabize('myCamelCasedString')
kebabize('')