import axios from "axios";


export const fetchRawdata = async (country) => {
	try {
		const rawdata = await axios.get("https://opentdb.com/api.php?amount=10");
		console.log("fetchdata", rawdata.data);
		return rawdata;
	} catch (error) {
		return console.log("fetchRawdata error",error)
	}
};