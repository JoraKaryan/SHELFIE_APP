import {createContext, useState} from 'react'
import { databases } from "../lib/appwrite"
import {useUser} from "../hooks/useUser";
import {Permission, Role} from "react-native-appwrite";

const DATABASE_ID = '68c80651000e246b78de'
const COLLECTION_ID = 'books'

export const BooksContext = createContext()

export function BooksProvider({children}) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBooks() {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    async function fetchBookById(id) {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    async function createBook(book) {
        try {
            const newBook = await database.createDocument(
                DATABASE_ID, COLLECTION_ID, ID.unique(), {...data, userId:user.$id},
                [Permission.read(Role.user(user.$id))]
                [Permission.update(Role.user(user.$id))]
                [Permission.delete(Role.user(user.$id))]
            )
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteBook(id, book) {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <BooksContext.Provider value={{books, setBooks, fetchBooks, fetchBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    )
}