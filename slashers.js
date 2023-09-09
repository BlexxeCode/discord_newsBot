require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'daily',
        description: 'Get daily news for variety of news topics',
    },
    {
        name: 'news',
        description: 'Get daily news for variety of news topics',
        options: [
            {
                name: 'topic',
                description: 'Subject of news',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    },
    {
        name: 'dmore',
        description: 'Get more info on selected daily news topic',
        options: [
            {
                name: 'number',
                description: 'Number position of news article in list',
                type: ApplicationCommandOptionType.Integer,
                choices: [
                    {
                        name: 'one',
                        value: 0,
                    },
                    {
                        name: 'two',
                        value: 1,
                    },
                    {
                        name: 'three',
                        value: 2,
                    },
                    {
                        name: 'four',
                        value: 3,
                    },
                    {
                        name: 'five',
                        value: 4,
                    },
                    {
                        name: 'six',
                        value: 5,
                    },
                    {
                        name: 'seven',
                        value: 6,
                    },
                    {
                        name: 'eight',
                        value: 7,
                    },
                    {
                        name: 'nine',
                        value: 8,
                    },
                    {
                        name: 'ten',
                        value: 9,
                    },
                    {
                        name: 'eleven',
                        value: 10,
                    },
                    {
                        name: 'twelve',
                        value: 11,
                    },
                    {
                        name: 'thirteen',
                        value: 12,
                    },
                    {
                        name: 'fourteen',
                        value: 13,
                    },
                    {
                        name: 'fifteen',
                        value: 14,
                    },
                    {
                        name: 'sixteen',
                        value: 15,
                    },
                    {
                        name: 'seventeen',
                        value: 16,
                    },
                    {
                        name: 'eighteen',
                        value: 17,
                    },
                ],
                required: true  
            }
        ]
    },
    {
        name: 'tmore',
        description: 'Get more info on selected /news topic',
        options: [
            {
                name: 'number',
                description: 'Number position of news article in list',
                type: ApplicationCommandOptionType.Integer,
                choices: [
                    {
                        name: 'one',
                        value: 0,
                    },
                    {
                        name: 'two',
                        value: 1,
                    },
                    {
                        name: 'three',
                        value: 2,
                    },
                    {
                        name: 'four',
                        value: 3,
                    },
                    {
                        name: 'five',
                        value: 4,
                    },
                    {
                        name: 'six',
                        value: 5,
                    },
                    {
                        name: 'seven',
                        value: 6,
                    },
                    {
                        name: 'eight',
                        value: 7,
                    },
                    {
                        name: 'nine',
                        value: 8,
                    },
                    {
                        name: 'ten',
                        value: 9,
                    },
                ],
                required: true  
            }
        ]
    }
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try
    {
        console.log('The slashes are getting ready')

        await rest.put(
            Routes.applicationGuildCommands(process.env.BOT_ID, process.env.SER_ID1),
            {body: commands}
        );
        console.log("It's go time!")
    }
    catch (error)
    {
        console.log(`This was not as intended: ${error}`)
    }
})();