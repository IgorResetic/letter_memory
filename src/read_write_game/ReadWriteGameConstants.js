export const drinkActionImages = [
    {src: "/img/read_write_game/action/action_drink/water.png", key: 1, position: "1", name: "VODU", next: null },
    {src: "/img/read_write_game/action/action_drink/juce.png", key: 2, position: "2", name: "SOK", next: null },
    {src: "/img/read_write_game/action/action_drink/tee.png", key: 3, position: "3", name: "ČAJ", next: null },
]

export const eatActionImages = [
    {src: "/img/read_write_game/action/action_eat/meat.png", key: 1, position: "1", name: "MESO", next: null },
    {src: "/img/read_write_game/action/action_eat/frute.png", key: 2, position: "2", name: "VOĆE", next: null },
    {src: "/img/read_write_game/action/action_eat/cookie.png", key: 3, position: "3", name: "KEKS", next: null },
]

export const washActionImages = [
    {src: "/img/read_write_game/action/action_wash/wash_heands.png", key: 1, position: "1", name: "RUKE", next: null },
    {src: "/img/read_write_game/action/action_wash/wash_teath.png", key: 2, position: "2", name: "ZUBE", next: null },
    {src: "/img/read_write_game/action/action_wash/wash_hair.png", key: 3, position: "3", name: "KOSU", next: null },
]

export const acctionImages = [
    {src: "/img/read_write_game/action/drink.png", key: 1, position: "1", name: "PIJE", next: drinkActionImages },
    {src: "/img/read_write_game/action/eat.png", key: 2, position: "2", name: "JEDE", next: eatActionImages },
    {src: "/img/read_write_game/action/wash.png", key: 3, position: "3", name: "PERE", next: washActionImages },
]

export const trollsCharacrersImages = [
    {src: "/img/read_write_game/characters/granko_img.png", key: 1, position: "1", name: "GRANKO", next: acctionImages },
    {src: "/img/read_write_game/characters/lala_img.png", key: 2, position: "2", name: "LALA", next: acctionImages },
    {src: "/img/read_write_game/characters/miro_img.png", key: 3, position: "3", name: "MIRO", next: acctionImages }
]

export const levelImages = [
    trollsCharacrersImages,
    acctionImages,
    drinkActionImages
]
