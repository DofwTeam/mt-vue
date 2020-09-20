/**
 * Mongoose - 添加
 * 1. Model.create({ type: 'jelly bean' }, { type: 'snickers' }, function (err, jellybean, snickers) {
 * if (err) });
 * 2. new model(...).save((err,account) => {})
 */

// const account = new Account({
//     account: 12345678,
//     passWord: 'lyj12345678'
// })
// silence.save(function(err, account) {
//     if (err) {
//         return res.status(500).send(err)
//     }
//     res.status(200).send('注册成功')
// })

/**
 * Mongoose - 查询
 * 1. Model.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
 * 2. Model.findOne();
 * 3. Model.findById(id, function (err, docs) {});
 *      This function triggers the following middleware.     findOne()
 */
// Account.find({ iphone: 12345678, passWord: 'lyj12345678' }, (err, docs) => {
//     if (err) {
//         return console.log(err)
//     }
//     console.log(docs)
// })

/**
 * Mongoose - 更新
 * 1.Model.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);
 * 2.Model.updateOne()
 * 3.Model.updateMany()
 * 4.Model.replaceOne()
 */
// Account.update(
//     { passWord: 'abc12345678' },
//     { passWord: 'aaa12345678' },
//     (err, ret) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log(ret)
//     }
// )

/**
 * Mongoose - 删除
 * 1. Modle.remove({ name: 'Eddard Stark' }, function (err) {})
 * 2. Modle.delateOne({ name: 'Eddard Stark' }, function (err) {});
 * 3. Modle.deleteMany({ name: /Stark/, age: { $gte: 18 } }, function (err) {});匹配的规则
 */
// Account.delateOne({ iphone: 12345678 }, err => {
//     console.log(err)
// })
