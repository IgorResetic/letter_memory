import { BERGENS, bergensImages, FROZEN, frozenImages, HELMET, helmetImages, memoryGames, TROLLS, trollsImages, trollsTwoImages, TROLLS_TWO } from "../utils/constants"


export const getImages = (paramName) => {
    return imagesMap.get(paramName)
} 

export const getTitle =(paramName) => {
    var game = memoryGames.find((obj) => {
        return obj.name === paramName
    })

    return game.title
}

const imagesMap = new Map([
    [FROZEN, frozenImages],
    [TROLLS, trollsImages],
    [HELMET, helmetImages],
    [TROLLS_TWO, trollsTwoImages],
    [BERGENS, bergensImages]
])



