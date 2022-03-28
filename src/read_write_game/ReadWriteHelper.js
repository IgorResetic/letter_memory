export const getNames = (word) => {
    var cards = []

    for (let i = 0; i < word.length; i++) {
        var letterKeyValue = letterMap.get(word[i])
        cards.push({src: letterKeyValue, letter: word[i]})
    }

    return cards
}


const letterMap = new Map([
    [ "A", "/img/cover/cover_a.png" ],
    [ "B", "/img/cover/cover_b.png" ],
    [ "C", "/img/cover/cover_c.png" ],
    [ "D", "/img/cover/cover_d.png" ],
    [ "E", "/img/cover/cover_e.png" ],
    [ "F", "/img/cover/cover_f.png" ],
    [ "G", "/img/cover/cover_g.png" ],
    [ "H", "/img/cover/cover_h.png" ],
    [ "I", "/img/cover/cover_i.png" ],
    [ "J", "/img/cover/cover_j.png" ],
    [ "K", "/img/cover/cover_k.png" ],
    [ "L", "/img/cover/cover_l.png" ],
    [ "M", "/img/cover/cover_m.png" ],
    [ "N", "/img/cover/cover_n.png" ],
    [ "O", "/img/cover/cover_o.png" ],
    [ "P", "/img/cover/cover_p.png" ],
    [ "R", "/img/cover/cover_r.png" ],
    [ "S", "/img/cover/cover_s.png" ],
    [ "T", "/img/cover/cover_t.png" ],
    [ "U", "/img/cover/cover_u.png" ],
    [ "V", "/img/cover/cover_v.png" ],
    [ "Z", "/img/cover/cover_z.png" ],
])