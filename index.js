const {channel} = require('diagnostics_channel');
const {Client, IntentsBitField, EmbedBuilder} = require('discord.js');
const { stdout } = require('process');
const cron = require('cron')
require('dotenv/config');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

function splitMessage(mess, size) {
    const numChunks = Math.ceil(mess.length / size)
    const chunks = new Array(numChunks)

    for (let i=0, c = 0; i< numChunks; ++i, c += size) {
        chunks[i] = mess.substr(c, size)
    }
    return chunks
}

client.once('ready', (c) => {
    console.log(`${c.user.tag} is ready to deliver!`);

    let schedule = new cron.CronJob('00 00 15 * * *', () =>{
        const guild = client.guilds.cache.get(process.env.SER_ID1);
        const channel = guild.channels.cache.get(process.env.CH_ID);
    
        try{
            const {exec} = require('child_process');
    
            
    
            exec('C:/Users/New/Documents/NewsBot/.venv/Scripts/python newsPython/News.py', (error, stdout, stderr) => {
                if (error) {
                    channel.send(`This ain't the news?\n${error}`)
                    return;
                }
    
                const fs = require('fs')
                
                const results = fs.readFileSync('result.json')
                const data = JSON.parse(results)
    
                const embed1 = new EmbedBuilder()
                .setTitle("Here's your Daily World News")
                .setDescription('Page 1')
                .setColor('#800080')
                .addFields({
                    name:data['title'][0],
                    value: `${data['link'][0]}\n${data['media'][0]}`
                },{
                    name:data['title'][1],
                    value: `${data['link'][1]}\n${data['media'][1]}`
                },{ 
                    name:data['title'][2],
                    value: `${data['link'][2]}\n${data['media'][2]}`
                },{
                    name:data['title'][3],
                    value: `${data['link'][3]}\n${data['media'][3]}`
                },{
                    name:data['title'][4],
                    value: `${data['link'][4]}\n${data['media'][4]}`
                },{
                    name:data['title'][5],
                    value: `${data['link'][5]}\n${data['media'][5]}`
                },{
                    name:data['title'][6],
                    value: `${data['link'][6]}\n${data['media'][6]}`
                },{
                    name:data['title'][7],
                    value: `${data['link'][7]}\n${data['media'][7]}`
                },{ 
                    name:data['title'][8],
                    value: `${data['link'][8]}\n${data['media'][8]}`
                },{
                    name:data['title'][9],
                    value: `${data['link'][9]}\n${data['media'][9]}`
                });
                const embed2 = new EmbedBuilder()
                .setTitle("Here's your Daily Gaming News")
                .setDescription('Page 2')
                .setColor('#7F00FF')
                .addFields({
                    name:data['title'][10],
                    value: `${data['link'][10]}\n${data['media'][10]}`
                },{
                    name:data['title'][11],
                    value: `${data['link'][11]}\n${data['media'][11]}`
                },{ 
                    name:data['title'][12],
                    value: `${data['link'][12]}\n${data['media'][12]}`
                },{
                    name:data['title'][13],
                    value: `${data['link'][13]}\n${data['media'][13]}`
                },{
                    name:data['title'][14],
                    value: `${data['link'][14]}\n${data['media'][14]}`
                },{
                    name:data['title'][15],
                    value: `${data['link'][15]}\n${data['media'][15]}`
                },{
                    name:data['title'][16],
                    value: `${data['link'][16]}\n${data['media'][16]}`
                },{
                    name:data['title'][17],
                    value: `${data['link'][17]}\n${data['media'][17]}`
                },{ 
                    name:data['title'][18],
                    value: `${data['link'][18]}\n${data['media'][18]}`
                },{
                    name:data['title'][19],
                    value: `${data['link'][19]}\n${data['media'][19]}`
                });
                const embed3 = new EmbedBuilder()
                .setTitle("Here's your Daily Entertainment News")
                .setDescription('Page 3')
                .setColor('#301934')
                .addFields({
                    name:data['title'][20],
                    value: `${data['link'][20]}\n${data['media'][20]}`
                },{
                    name:data['title'][21],
                    value: `${data['link'][21]}\n${data['media'][21]}`
                },{ 
                    name:data['title'][22],
                    value: `${data['link'][22]}\n${data['media'][22]}`
                },{
                    name:data['title'][23],
                    value: `${data['link'][23]}\n${data['media'][23]}`
                },{
                    name:data['title'][24],
                    value: `${data['link'][24]}\n${data['media'][24]}`
                },{
                    name:data['title'][25],
                    value: `${data['link'][25]}\n${data['media'][25]}`
                },{
                    name:data['title'][26],
                    value: `${data['link'][26]}\n${data['media'][26]}`
                },{
                    name:data['title'][27],
                    value: `${data['link'][27]}\n${data['media'][27]}`
                },{ 
                    name:data['title'][28],
                    value: `${data['link'][28]}\n${data['media'][28]}`
                },{
                    name:data['title'][29],
                    value: `${data['link'][29]}\n${data['media'][29]}`
                });
    
                channel.send({embeds:[
                    embed1,
                ]})
                
                channel.send({embeds:[
                    embed2,
                ]})
                
                channel.send({embeds:[
                    embed3,
                ]})
            });    
        }
        catch (err) {
            channel.send(`This is not the news\n${err}`)
        }
        
        
    });
    schedule.start()
});


client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'daily') {

        try{
            const {exec} = require('child_process');

            await interaction.deferReply()

            exec('C:/Users/New/Documents/NewsBot/.venv/Scripts/python newsPython/News.py', (error, stdout, stderr) => {
                if (error) {
                    interaction.editReply(`This ain't the news?\n${error}`)
                    return;
                }
    
                const fs = require('fs')
                
                const results = fs.readFileSync('result.json')
                const data = JSON.parse(results)
    
                const embed1 = new EmbedBuilder()
                .setTitle("Here's your Daily World News")
                .setDescription('Page 1')
                .setColor('#800080')
                .addFields({
                    name:data['title'][0],
                    value: `${data['link'][0]}\n${data['media'][0]}`
                },{
                    name:data['title'][1],
                    value: `${data['link'][1]}\n${data['media'][1]}`
                },{ 
                    name:data['title'][2],
                    value: `${data['link'][2]}\n${data['media'][2]}`
                },{
                    name:data['title'][3],
                    value: `${data['link'][3]}\n${data['media'][3]}`
                },{
                    name:data['title'][4],
                    value: `${data['link'][4]}\n${data['media'][4]}`
                },{
                    name:data['title'][5],
                    value: `${data['link'][5]}\n${data['media'][5]}`
                },{
                    name:data['title'][6],
                    value: `${data['link'][0]}\n${data['media'][0]}`
                },{
                    name:data['title'][7],
                    value: `${data['link'][7]}\n${data['media'][1]}`
                },{ 
                    name:data['title'][8],
                    value: `${data['link'][8]}\n${data['media'][2]}`
                },{
                    name:data['title'][9],
                    value: `${data['link'][9]}\n${data['media'][3]}`
                });
                const embed2 = new EmbedBuilder()
                .setTitle("Here's your Daily Gaming News")
                .setDescription('Page 2')
                .setColor('#7F00FF')
                .addFields({
                    name:data['title'][10],
                    value: `${data['link'][10]}\n${data['media'][0]}`
                },{
                    name:data['title'][11],
                    value: `${data['link'][11]}\n${data['media'][1]}`
                },{ 
                    name:data['title'][12],
                    value: `${data['link'][12]}\n${data['media'][2]}`
                },{
                    name:data['title'][13],
                    value: `${data['link'][13]}\n${data['media'][3]}`
                },{
                    name:data['title'][14],
                    value: `${data['link'][14]}\n${data['media'][4]}`
                },{
                    name:data['title'][15],
                    value: `${data['link'][15]}\n${data['media'][5]}`
                },{
                    name:data['title'][16],
                    value: `${data['link'][16]}\n${data['media'][0]}`
                },{
                    name:data['title'][17],
                    value: `${data['link'][17]}\n${data['media'][1]}`
                },{ 
                    name:data['title'][18],
                    value: `${data['link'][18]}\n${data['media'][2]}`
                },{
                    name:data['title'][19],
                    value: `${data['link'][19]}\n${data['media'][3]}`
                });
                const embed3 = new EmbedBuilder()
                .setTitle("Here's your Daily Entertainment News")
                .setDescription('Page 3')
                .setColor('#301934')
                .addFields({
                    name:data['title'][20],
                    value: `${data['link'][20]}\n${data['media'][0]}`
                },{
                    name:data['title'][21],
                    value: `${data['link'][21]}\n${data['media'][1]}`
                },{ 
                    name:data['title'][22],
                    value: `${data['link'][22]}\n${data['media'][2]}`
                },{
                    name:data['title'][23],
                    value: `${data['link'][23]}\n${data['media'][3]}`
                },{
                    name:data['title'][24],
                    value: `${data['link'][24]}\n${data['media'][4]}`
                },{
                    name:data['title'][25],
                    value: `${data['link'][25]}\n${data['media'][5]}`
                },{
                    name:data['title'][26],
                    value: `${data['link'][26]}\n${data['media'][0]}`
                },{
                    name:data['title'][27],
                    value: `${data['link'][27]}\n${data['media'][1]}`
                },{ 
                    name:data['title'][28],
                    value: `${data['link'][28]}\n${data['media'][2]}`
                },{
                    name:data['title'][29],
                    value: `${data['link'][29]}\n${data['media'][3]}`
                });
    
                interaction.editReply({embeds:[
                    embed1,
                ]})
                interaction.channel.send({embeds:[
                    embed2,
                ]})
                interaction.channel.send({embeds:[
                    embed3,
                ]})
            });    
        }
        catch (err) {
            interaction.editReply(`This is not the news\n${err}`)
        }
    }

    if (interaction.commandName === 'news') {
        const topic = interaction.options.get('topic').value

        try{
            const {exec} = require('child_process');

            await interaction.deferReply()

            await exec(`C:/Users/New/Documents/NewsBot/.venv/Scripts/python newsPython/topicNews.py ${topic}`, (error, stdout, stderr) => {
                if (error) {
                    interaction.editReply(`This ain't the news?\n${error}`)
                    return;
                }

                const fs = require('fs')
                
                const results = fs.readFileSync('result_topic.json')
                const data = JSON.parse(results)

                const embed = new EmbedBuilder()
                .setTitle(`Here's your latest ${topic} News`)
                .setDescription('Page 1')
                .setColor('Random')
                .addFields({
                    name:data['title'][0],
                    value: `${data['link'][0]}\n${data['media'][0]}`
                },{
                    name:data['title'][1],
                    value: `${data['link'][1]}\n${data['media'][1]}`
                },{ 
                    name:data['title'][2],
                    value: `${data['link'][2]}\n${data['media'][2]}`
                },{
                    name:data['title'][3],
                    value: `${data['link'][3]}\n${data['media'][3]}`
                },{
                    name:data['title'][4],
                    value: `${data['link'][4]}\n${data['media'][4]}`
                },{
                    name:data['title'][5],
                    value: `${data['link'][5]}\n${data['media'][5]}`
                },{
                    name:data['title'][6],
                    value: `${data['link'][6]}\n${data['media'][6]}`
                },{
                    name:data['title'][7],
                    value: `${data['link'][7]}\n${data['media'][7]}`
                },{ 
                    name:data['title'][8],
                    value: `${data['link'][8]}\n${data['media'][8]}`
                },{
                    name:data['title'][9],
                    value: `${data['link'][9]}\n${data['media'][9]}`
                });
                
                interaction.editReply({embeds:[
                    embed,
                ]})
            });    
        }
        catch (err) {
            interaction.editReply(`This is not the news\n${err}`)
        }   
    }
    if (interaction.commandName === 'tmore'){
        const number = interaction.options.get('number').value

        await interaction.deferReply()
        
        try
            {
                const {exec} = require('child_process');

                await exec(`C:/Users/New/Documents/NewsBot/.venv/Scripts/python newsPython/newsInfo.py ${number}`, (error, stdout, stderr) => {
                if (error) {
                    interaction.editReply(`Something didnt go right. Most likely the site does not work will with this feature, ${error}`)
                    return;
                }

                const fs = require('fs')
                
                const results = fs.readFileSync('result_topic.json')
                const data = JSON.parse(results)


                const embed1 = new EmbedBuilder()
                .setTitle(data['title'][number])
                .setDescription(data['media'][number])
                .setURL(data['link'][number])

                interaction.editReply('Check your DM for a summary')

                interaction.user.send({embeds:[
                    embed1,
                ]})
                const out = stdout || stderr;
                const messageChunks = splitMessage(out, 2000)

                for (chunk of messageChunks){
                    interaction.user.send(chunk)
                }

                interaction.user.send({files: ['wordcloud.png']})
            

            });
    
        }
        catch (err) {
            interaction.user.send(`Something didnt go right. Most likely the site does not work will with this feature, ${err}`)

        }

    }
    if (interaction.commandName === 'dmore'){
        const number = interaction.options.get('number').value
        
        interaction.reply('Check your DM for a summary')
        interaction.user.reply('Work in process... please check back')

    }
});

client.login(process.env.TOKEN)