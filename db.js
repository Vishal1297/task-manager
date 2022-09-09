exports.connect = () => {
    require("./app/task/models/init").init(require("./app/task/models/mongoose"));
}