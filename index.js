import axios from "axios";
import cheerio from "cheerio";
import TelegramApi from  "node-telegram-bot-api"
import  fs from  "fs"
import translate from  'translation-google';
import {OrNot} from "./controller.js";
import {Horoscope} from "./Horoscope.js";

const data = JSON.parse(fs.readFileSync('data.json'))
const token = "your token "
const bot = new TelegramApi(token, { polling: true })
bot.on("message", msg => {
  const text = msg.text.toUpperCase()
  
  const chatId = msg.chat.id
  async function SearchEraz(look) {
  if (data[look] != undefined) {
      await bot.sendMessage(chatId, `${data[look]}`)
    } else {
      bot.sendMessage(chatId, 
     `Ձեր կողմից ուղարկված <${look}> բառը կամ առկա չէ ցանկում կամ չի հետեվում կանոննեին օրինակ ձեր երազին առյուծեք տեսել գրեք առյուծ պեքե գրել մի բառ ուղիղ ձևով ու հայատառ։Բոտը նաև ներկայացնում է  կանխատեսումներ կենդանակերպի բոլոր նշանների համար:Օրվա հորոսկոպը տեսնելու համար պետքե ուղարկել հորոսկոպ և կենդանակերպի անվանումը։Օրինակ հորոսկոպ-այծեղջուր`)
    }
  }
  if(OrNot(text)){
      SearchEraz(text)
  }
    let key =Horoscope(text)
  let url=`https://horo.mail.ru/prediction/${key}/today/`
  async function getGenere(){
      try{
          const response= await axios.get(url)
          const $=cheerio.load(response.data)
          const genere=$("p").text()
          let translation= await translate(genere,{from:"ru",to:"hy"})
        bot.sendMessage(chatId,translation.text)
          translation=""
      }
      catch(error){
          console.error(error)
      }
  }
  if(key!=""){
  getGenere()
  }
  key=""
})

