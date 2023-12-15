import 'server-only'
const dictionary = {
    en: () => import("./languages/en.json").then(res=> res.default),
    hi: () => import("./languages/hi.json").then(res=> res.default)
 }

 export const getDictionary = (lang) => {
    return dictionary[lang]?.() ?? dictionary.en()
 }