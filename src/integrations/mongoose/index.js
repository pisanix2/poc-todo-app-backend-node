const mongoose = require('mongoose')
mongoose.connectExt = async () => {
    await mongoose.connect(process.env.MONGOOSE_URI, { useNewUrlParser: true })
}
module.exports = mongoose
