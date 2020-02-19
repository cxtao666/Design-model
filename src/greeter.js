function greeter(preson) {
    return 'Hello' + preson.firstName + preson.lastName;
}
var user = {
    firstName: 'cai',
    lastName: 'xiantao'
};
console.log(greeter(user));
