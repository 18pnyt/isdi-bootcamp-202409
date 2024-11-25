import db from 'dat'
import { validate } from 'com'

const { ObejctId } = db


export default (userId, targetUserId) => {
    validate.id(userId, 'userId')
    validate.id(targetUserId, 'targetUserId')

    return db.users.findOne({_id: ObejctId.createFromHexString(userId) })
        .catch(error => { new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('user not found')

            return db.users.findOne({_id: ObejctId.createFromHexString(targetUserId) })
                .catch(error => { new Error(error.message)})
        })
        .then(user => {
            if (!user) throw new Error('target user not found')

                return user.name
        })
    }