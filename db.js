const low = require("lowdb")
const fsync = require("lowdb/adapters/FileSync")
const adap = new fsync('yiff.json')
const db = low(adap)
exports.db = db

exports.addyiffy = async function(member){
	if(this.db.get('all').find(member).value() !== undefined) return new Error(`DATABASE ERROR: O Membro já tem registro na DataBase.`)
	this.db.get('all').push(member).write()
}