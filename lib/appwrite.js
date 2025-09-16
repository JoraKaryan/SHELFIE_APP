import {Client, Account, Avatars, Databases} from "react-native-appwrite"

export const client = new Client()

client
    .setProject('68c2c77c00093791beff')
    .setPlatform('dev.karyan.sheflie')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)