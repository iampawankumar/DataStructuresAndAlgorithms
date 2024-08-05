const s = "anagram"

const t = "nagaram"


///true means anagram and false means not anagram
function isAnagram(s, t){
    const firstString = s.split('').sort().join()
    const secondString = t.split('').sort().join()

    return firstString === secondString
}



///second approach via creating a map with one string and then deleting the count from second string in the map
///if map size is zero after iteration then it is valid anagram otherwise not
function isAnagram2(s, t){

    let map = new Map()

    for(const i of s){
        if(map.has(i)){
            map.set(i, map.get(i) + 1)
        }else{
            map.set(i, 1)
        }
    }

    for(const c of t){
        if(!map.get(c)) return false

        map.set(c, map.get(c) - 1)

        if(map.size === 0) {
            map.delete()
        }

        if(map.size > 0) return false

        return true

    }


}