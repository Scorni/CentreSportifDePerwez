function hasPermission(user, permissionNeeded){
    const matchedPermissions = user.permissions.filter(
        permissionTheyHave=>
        permissionNeeded.includes(permissionTheyHave)
    );
    if(!matchedPermissions.length){
        throw new Error(`Vous n'avez pas les permission requises
        : ${permissionNeeded}

        Vous avez celles-ci : 
        ${user.permissions}
        `);
    }
}

exports.hasPermission = hasPermission;