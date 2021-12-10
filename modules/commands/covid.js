module.exports.config = {
	name: "covid",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy thông tin về tình hình dịch bệnh COVID-19",
	commandCategory: "other",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.run = async function({ api, event }) {
	const axios = global.nodemodule["axios"];
	let {data} = await axios.get('https://unifalo.tech/covid/data.json')
	return api.sendMessage('===「Thế Giới」===' +
        `\n» Nhiễm: ${data.world.case}.` +
        `\n» Hồi phục: ${data.world.recovered}.` +
        `\n» Tử vong: ${data.world.deaths}.` +
        '\n===「Việt Nam」===' +
        `\n» Nhiễm: ${data.vietnam.case}.` +
        `\n» Hồi phục: ${data.vietnam.recovered}.` +
        `\n» Tử vong: ${data.vietnam.deaths}.` +
        '\n===「Tin Tức」===' +
        `\n${data.news.vietnam}\n${data.news.link}.`, event.threadID, event.messageID);
}