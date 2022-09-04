module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            uuid: String,
            title: String,
            desciption: String,
            createdAt: Number
        },

        {
            timestams: true
        }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id;
        return object;
    });

    const Task = mongoose.model("task", schema);
    return Task;
};