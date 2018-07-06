
const mongoose = require('mongoose')
const Goat = require('../models/goat.js')
const History = require('../models/history.js')
const Accolade = require('../models/accolade.js')
require('dotenv').config()


// --------requiredDocs


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected2MongoDB')
    })

    .catch((err) => {
        console.log('ERROR !!!', err)
    })



Goat.remove()
    .then(() => {

        const FluGame = new History({
            notableGm: 'Flu Game',
            playoffWins: 52,
            lateWins: 17,
            allstarGm: true,

        })

        const mjHigh = new Accolade({
            scoreHigh: 32292,
            offMvp: true,
            defMvp: true,
            scoreTitle: true,
            sigMove: "JumpMan",

        })

        const MJ = new Goat({
            name: 'Michael "MJ" Jordan',
            team: 'Chicago Bulls',
            yearsPlayed: 22,
            rings: 6,
            newimg1: "https://media.giphy.com/media/3o6gE08CvPHCg3eG2s/giphy.gif",
            newimg2: "https://media.giphy.com/media/DtfnHplLD2e6k/giphy.gif",
            newimg3: "https://media.giphy.com/media/3o6gDTA8qvNp4RomIM/giphy.gif",
            newimg4: "https://static.wixstatic.com/media/e3aeda_d799660136b744efbbfda10ed2233075.gif",
            audio: "/public/MJspeak.mp3",
            image2: "https://media.giphy.com/media/rhpfWqKiuJft6/giphy.gif",
            image: "http://www.transparentpng.com/download/michael-jordan/michael-jordan-hd-photo-png-6.png",
            accolades: [mjHigh],
            history: [FluGame],

        })
        //kobe 

        //create History = new History({stuff: Literal Value})

        const gameOf81 = new History({
            notableGm: 'Game of 81 vs. Toronto',
            playoffWins: 135,
            lateWins: 17,
            allstarGm: true,

        })
        //create Accolade = new Accolade ({stuff: Literal Value})

        const kobeHigh = new Accolade({
            scoreHigh: 33643,
            offMvp: true,
            defMvp: false,
            scoreTitle: true,
            sigMove: "Late Game Dagger",

        })
        //create Goat = new Goat ({stuff: Literal Value})

        const Kobe = new Goat({
            name: 'Kobe "Mamba" Bryant',
            team: 'Los Angeles Lakers',
            yearsPlayed: 12,
            rings: 5,
            newimg1: "https://media.giphy.com/media/g5iVMAQKs0yPu/giphy.gif",
            newimg2: "https://media.giphy.com/media/6HXQPVYGQwJEs/giphy.gif",
            newimg3: "http://cdn.bleacherreport.net/social_assets/nba/KobeBryantDUnkWizards.gif",
            newimg4: "http://media2.giphy.com/media/q5hVhkKwKHDuo/200.gif",
            history: [gameOf81],
            accolades: [kobeHigh],
            audio: "/public/MJspeak.mp3",
            image2: "https://media.giphy.com/media/s8kfCEcDXjfPO/giphy.gif",
            image: "http://www.pngmart.com/files/2/Kobe-Bryant-PNG-Pic.png",

        })
        // =====================================================================LebronInfo


        //create History = new History({stuff: Literal Value})

        const bronComeBack = new History({
            notableGm: 'vs. Spurs Down 3-1 to Win Series ',
            playoffWins: 134,
            lateWins: 72,
            allstarGm: true,

        })


        //create Accolade = new Accolade ({stuff: Literal Value})

        const bronHigh = new Accolade({
            scoreHigh: 30000,
            offMvp: true,
            defMvp: true,
            scoreTitle: false,
            sigMove: "Lebron ChaseDown Block",

        })
        //create Goat = new Goat ({stuff: Literal Value})

        const Lebron = new Goat({
            name: 'Lebron "King" James',
            team: 'Cleveland Cavaliers',
            yearsPlayed: 12,
            newimg1: "https://media.giphy.com/media/3o6ZtqN2Lcho6ptOs8/giphy.gif",
            newimg2: "https://78.media.tumblr.com/b1624057f6344b8cec115b661bf0549e/tumblr_olnltpc4dh1s3gys4o1_400.gif",
            newimg3: "https://i2.wp.com/gifrific.com/wp-content/uploads/2013/06/LeBron-James-Blocks-Tiago-Splitter-Game-2-2013-NBA-Finals.gif?fit=350%2C196&ssl=1",
            newimg4: "https://i2.wp.com/gifrific.com/wp-content/uploads/2013/06/LeBron-James-Blocks-Tim-Duncan.gif?ssl=1",
            rings: 3,
            audio: "/public/MJspeak.mp3",
            image2: "http://gif.mocksession.com/wp-content/uploads/2011/01/lebronshot12.gif'",
            image: "http://www.freepngimg.com/thumb/lebron_james/20172-1-lebron-james-free-download-thumb.png",
            accolades: [bronHigh],
            history: [bronComeBack]




        })
        // ====================================================================
        const goats = [MJ, Kobe, Lebron]

        return Goat.insertMany(goats)


        //Goat.save...then console 


    })

    .then(() => {

        // close the database
        mongoose.connection.close()
    })

