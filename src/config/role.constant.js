const allRoles = {
    user: [],
    admin: ['getUsers', 'manageUsers'],
    superadmin: ['getUsers', 'manageUsers', 'getProducts', 'manageProducts'],
    vendor: ['getProducts', 'manageProducts'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));
// console.log(roles);
module.exports = {
    roles,
    roleRights,
};
