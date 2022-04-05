export const getNames = (word) => {
    var cards = []

    for (let i = 0; i < word.length; i++) {
        var letterKeyValue = letterMap.get(word[i])
        var letterFrontValue = letterFrontMap.get(word[i])
        cards.push({src: letterKeyValue, letter: word[i], back: letterFrontValue, key: i, select: false})
    }

    return cards
}
/*
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
*/

const letterFrontMap = new Map([
    [ "A", { src: "/img/cover/cover_a.png", letter: "a" } ],
    [ "B", { src: "/img/cover/cover_b.png", letter: "a" } ],
    [ "C", { src: "/img/cover/cover_c.png", letter: "a" } ],
    [ "Č", { src: "/img/cover/cover_č.png", letter: "a" } ],
    [ "Ć", { src: "/img/cover/cover_ć.png", letter: "a" } ],
    [ "D", { src: "/img/cover/cover_d.png", letter: "a" } ],
    [ "Đ", { src: "/img/cover/cover_đ.png", letter: "a" } ],
    [ "E", { src: "/img/cover/cover_e.png", letter: "a" } ],
    [ "F", { src: "/img/cover/cover_f.png", letter: "a" } ],
    [ "G", { src: "/img/cover/cover_g.png", letter: "G" } ],
    [ "H", { src: "/img/cover/cover_h.png", letter: "a" } ],
    [ "I", { src: "/img/cover/cover_i.png", letter: "a" } ],
    [ "J", { src: "/img/cover/cover_j.png", letter: "a" } ],
    [ "K", { src: "/img/cover/cover_k.png", letter: "k" } ],
    [ "L", { src: "/img/cover/cover_l.png", letter: "G" } ],
    [ "M", { src: "/img/cover/cover_m.png", letter: "G" } ],
    [ "N", { src: "/img/cover/cover_n.png", letter: "n" } ],
    [ "O", { src: "/img/cover/cover_o.png", letter: "o" } ],
    [ "P", { src: "/img/cover/cover_p.png", letter: "G" } ],
    [ "R", { src: "/img/cover/cover_r.png", letter: "r" } ],
    [ "S", { src: "/img/cover/cover_s.png", letter: "G" } ],
    [ "Š", { src: "/img/cover/cover_š.png", letter: "G" } ],
    [ "T", { src: "/img/cover/cover_t.png", letter: "G" } ],
    [ "U", { src: "/img/cover/cover_u.png", letter: "G" } ],
    [ "V", { src: "/img/cover/cover_v.png", letter: "G" } ],
    [ "Z", { src: "/img/cover/cover_z.png", letter: "G" } ],
    [ "Ž", { src: "/img/cover/cover_ž.png", letter: "G" } ],
])

/*
const letterMap = new Map([
    [ "A", "/img/letters/Lower_Letter_A.png"],
    [ "B", "/img/letters/Lower_Letter_A.png"],
    [ "C", "/img/letters/Lower_Letter_A.png"],
    [ "D", "/img/letters/Lower_Letter_A.png"],
    [ "E", "/img/letters/Lower_Letter_A.png"],
    [ "F", "/img/letters/Lower_Letter_A.png"],
    [ "G", "/img/letters/Upper_Letter_G.png"],
    [ "H", "/img/letters/Lower_Letter_A.png"],
    [ "I", "/img/letters/Lower_Letter_A.png"],
    [ "J", "/img/letters/Lower_Letter_A.png"],
    [ "K", "/img/letters/Lower_Letter_K.png"],
    [ "L", "/img/letters/Upper_Letter_G.png"],
    [ "M", "/img/letters/Upper_Letter_G.png"],
    [ "N", "/img/letters/Lower_Letter_N.png"],
    [ "O", "/img/letters/Lower_Letter_O.png"],
    [ "P", "/img/letters/Upper_Letter_G.png"],
    [ "R", "/img/letters/Lower_Letter_R.png"],
    [ "S", "/img/letters/Upper_Letter_G.png"],
    [ "T", "/img/letters/Upper_Letter_G.png"],
    [ "U", "/img/letters/Upper_Letter_G.png"],
    [ "V", "/img/letters/Upper_Letter_G.png"],
    [ "Z", "/img/letters/Upper_Letter_G.png"],
])
*/

const letterMap = new Map([
    [ "A", "/img/letters/lower_letters/lower_letter_A.png"],
    [ "B", "/img/letters/lower_letters/lower_letter_B.png"],
    [ "C", "/img/letters/lower_letters/lower_letter_C.png"],
    [ "Č", "/img/letters/lower_letters/lower_letter_Č.png"],
    [ "Ć", "/img/letters/lower_letters/lower_letter_Ć.png"],
    [ "D", "/img/letters/lower_letters/lower_letter_D.png"],
    [ "E", "/img/letters/lower_letters/lower_letter_E.png"],
    [ "F", "/img/letters/lower_letters/lower_letter_F.png"],
    [ "G", "/img/letters/lower_letters/lower_letter_G.png"],
    [ "H", "/img/letters/lower_letters/lower_letter_H.png"],
    [ "I", "/img/letters/lower_letters/lower_letter_I.png"],
    [ "J", "/img/letters/lower_letters/lower_letter_J.png"],
    [ "K", "/img/letters/lower_letters/lower_letter_K.png"],
    [ "L", "/img/letters/lower_letters/lower_letter_L.png"],
    [ "M", "/img/letters/lower_letters/lower_letter_M.png"],
    [ "N", "/img/letters/lower_letters/lower_letter_N.png"],
    [ "O", "/img/letters/lower_letters/lower_letter_O.png"],
    [ "P", "/img/letters/lower_letters/lower_letter_P.png"],
    [ "R", "/img/letters/lower_letters/lower_letter_R.png"],
    [ "S", "/img/letters/lower_letters/lower_letter_S.png"],
    [ "Š", "/img/letters/lower_letters/lower_letter_Š.png"],
    [ "T", "/img/letters/lower_letters/lower_letter_T.png"],
    [ "U", "/img/letters/lower_letters/lower_letter_U.png"],
    [ "V", "/img/letters/lower_letters/lower_letter_V.png"],
    [ "Z", "/img/letters/lower_letters/lower_letter_Z.png"],
    [ "Ž", "/img/letters/lower_letters/lower_letter_Ž.png"],
])