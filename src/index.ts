import { Client } from 'discord.js'
import { config } from 'dotenv'
import { env, exit } from 'process'

config()

init().catch(error => {
    console.log(error)
    exit()
})

async function init () {
    const client = new Client()

    client.on('ready', () => {
        console.log('Bot iniciado')
    })

    client.on('message', async message => {
        if (message.content === `<@${env.bot_id}>` || message.content === `<@!${env.bot_id}>`) {
            await message.channel.send('Estamos com problemas tecnicos logo logo voltamos')
        }
    })

    client.login(env.bot_token)
}
