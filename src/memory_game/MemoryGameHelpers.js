import { BERGENS, bergensImages, FROZEN, frozenImages, HELMET, helmetImages, hotelTransylvaniaImages, HOTEL_TRANSYLVANIA, lionKingImages, LION_KING, memoryGames, peppaPigImages, PEPPA_PIG, segertHlapicImages, SEGERT_HLAPIC, TROLLS, trollsImages, trollsTwoImages, TROLLS_TWO, vlakUSnjeguImages, VLAK_U_SNJEGU } from "../utils/constants"


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
    [BERGENS, bergensImages],
    [PEPPA_PIG, peppaPigImages],
    [HOTEL_TRANSYLVANIA, hotelTransylvaniaImages],
    [SEGERT_HLAPIC,segertHlapicImages],
    [VLAK_U_SNJEGU, vlakUSnjeguImages],
    [LION_KING, lionKingImages]
])



