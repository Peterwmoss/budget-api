import IUserRepository from "./IUserRepository";
import crypto from 'crypto'
import User from '../models/User'
import UserDTO from "../models/UserDTO";
import connection from '../config/database'

export default class UserRepository implements IUserRepository {
    create(user: UserDTO): number {
        const salt = crypto.randomBytes(16).toString('hex')
        const entity = new User(
            user.username,
            salt,
            crypto.createHmac('sha512', salt).update(user.password).digest('hex')
        )

        console.log(entity)

        connection.connect()
        connection.query('insert into users set ?', entity, (err, res) => {
            if (err) throw err;
            console.log(res)
        })
        connection.end()

        console.log('User created')

        return 201
    }

    get(username: string): UserDTO {
        throw new Error("Method not implemented.");
    }
}