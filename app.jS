{

  "name": "🇱🇰SACHIYA-SL-BOT-V4🇱🇰",

  "description": "whatsapp md bot build with nodejs",

  "repository": "https://github.com/Nipuna-apps/Blue-Lione-Bot",

  "logo": "https://i.ibb.co/fdVNVby/337211b6aaa25af5dc698da9e41691a0.jpg",

  "keywords": ["nodejs", "bot", "whatsapp bot", "whatsapp automation", "multi device"],

  "buildpacks": [

    {

      "url": "heroku/nodejs"

    },

    {

      "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"

    },

    {

      "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"

    }

  ],

   "formation": {

        "worker": {

            "quantity": 1,

            "size": "free"

        }

    }

} 
