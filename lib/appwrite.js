import { Client, Account, Avatars } from "react-native-appwrite"

export const client = new Client()

client
    .setProject('68c2c77c00093791beff')
    .setPlatform('dev.karyan.sheflie')

export const account = new Account(client)
export const avatars = new Avatars(client)