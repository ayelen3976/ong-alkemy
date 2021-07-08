const { verify } = require("jsonwebtoken");

module.exports = {
    checkUserIsAdmin: (req, res, next) => {
        let token = req.get('authorization');
        if (typeof token !== 'undefined') {
            try {
                const tokenArray = token.split(' ');
                token = tokenArray[1];
                const data = verify(token, process.env.SECRET_KEY);
                if (data.user.roleId === '1') {
                    next();
                } else {
                    res.status(401).json({
                        message: "User must have administrator permissions"
                    })
                }
            } catch (error) {
                console.log(error.message);
                res.status(500).json({
                    message: "Server error"
                })
            }
        } else {
            res.status(400).json({
                message: "Should have authorization token"
            })
        }
    },
}
