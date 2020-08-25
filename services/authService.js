const _ = require('lodash')
const User = require('../models').users
const Role = require('../models').roles
const RolePermissions = require('../models').role_permissions
const UserPermissions = require('../models').user_permissions
const Permission = require('../models').permissions

class AuthService {

    async login(username){        

        const relations = {        
            
            include: [
            {
                model: Role,
                attributes:['id','name'],
                include:{ model: RolePermissions, include: {model: Permission}}
            },{
                model: RolePermissions,
                attributes:['id','permission_id'],
                include: [{
                    attributes:['name'],
                    model: Permission
                    
                }]
            },{
                model:UserPermissions,
                attributes:['id','permission_id'],
                include: [{
                    attributes:['name'],
                    model: Permission
                }]
            }]
        }    

        const rows = await User.findAll({
            where:{ email: username },
            ...relations
        })

        
        if (rows.length == 0){
            throw new Error ('Authentication failed.' )
        }

        let user =_.first(rows)

        return user
    }


}

module.exports = AuthService