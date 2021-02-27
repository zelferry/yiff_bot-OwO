const low = require("lowdb")
const fsync = require("lowdb/adapters/FileSync")
const adap = new fsync('yiff.json')
const db = low(adap)
exports.db = db

exports.addyiffy = async function(member){
	this.db.get('all').push(member).write()
}