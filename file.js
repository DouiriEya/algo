// chekpoint 1 
function count() {
    var ch=prompt('give a string that ends with a point')
    while(ch[ch.length-1]!=='.'){
        ch=parseInt(prompt('give a valid string ending with a point  '))
    }
    console.log('le nombre de char est : ')
    console.log(ch.length) // longeur chaine c bon 
   var words = ch.split(" ")
   var l=words.length
   console.log(`le nbr de mots est ${l}`) // nbr de mot dand la chaine c bon 
   var vowels=0
   var tab=['a','e','i','o','y']
   for(var i=0;i<ch.length;i++){
    if (tab.includes(ch[i].toLowerCase())){
        vowels+=1
    }
    

}
console.log(`le nbr de voyelles est ${vowels}`)  // nbr de voyelles dans la chaine

return 'DONE'   
}

// checkpoint 2 
function tri(arr){
    do {
    var k=0
    for (var i=0;i<arr.length-1;i++){
        if (arr[i+1]<arr[i]) {
            var j=arr[i]
            arr[i]=arr[i+1] 
            arr[i+1]=j
            k=1
        }
    }} while(k==1)
    return arr 

}