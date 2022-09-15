export const createUser = (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const userWithId = { ...user, id: userId };

    users.push(userWithId);

    if(user){
        res.send(`User with the name ${user.name} has just been created`)
    }else{
        res.send('no user created')
    }
}